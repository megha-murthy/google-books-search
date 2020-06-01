import React from 'react';
import Nav from '../Nav';
import Row from '../Row';
import Col from '../Col';
import Header from '../Header';
import Container from '../Container'
import '../../App.css';
import axios from 'axios';
import {List} from '../List';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

class Search extends React.Component{
    state={
        search:'',
        APIKey:'AIzaSyAKnOrsH2cU8UYpqKVSpfHtXbwrb0XRgWM',
        books:[],
        display:false
        
    }

    handleInputChange(event){
        event.preventDefault();
        this.setState({
            search:event.target.value
        })
       
    }

    handleSearch(event){

        event.preventDefault();
        console.log(this.state.search);
        console.log("Reached here")
        axios.get("https://cors-anywhere.herokuapp.com/https://www.googleapis.com/books/v1/volumes?q="+this.state.search+"&key="+this.state.APIKey)
        .then(response=>{
            console.log(response);
            this.setState({
                books:response.data.items,
                display:true
            })
            // .catch(err=>console.log(err));
            console.log(this.state.title)
        })
    }

    handleSave(event){
        

        let obj={
            title:event.target.dataset.title,
            authors:event.target.dataset.author,
            description:event.target.dataset.desc,
            image:event.target.dataset.image,
            link:event.target.dataset.vol

        }
        console.log("saved:",obj)
        axios.post('/api/save',obj)
        .then(response=>{
            console.log("after save",response);
            toast.success("Saved successfully!");
        })

    }

    render(){
        console.log(this.state.books)
        if(this.state.display){
            var result= <h3>Results</h3>
        }
        return(
            <Container>
                <Row>
                    <Col size="md-12">
                        <Nav/>
                    </Col>
                </Row>
                
                <Row>
                    <Col size="md-12">
                        <Header/>
                    </Col>
                </Row>
              
                <Row>
                    <Col size="md-12">
                    <h3>Book Search</h3>
                    <form className="form-inline">
                        <input type="text" className="searchbox" placeholder="Search" onChange={this.handleInputChange.bind(this)}/>
                        <button className="searchbutton" onClick={this.handleSearch.bind(this)}>Search</button>

                        {/* <input className="form-control mr-sm-2 ser" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
                    </form>
                    </Col>
                </Row>

                <Row>
                    <Col size="md-12">
                    {result}
                        {/* <h3>Results</h3> */}
                        <List>   
                        {this.state.books.map((book,index)=>{
                            return(
                                <div className="card mb-3" key={index}>
                                <div className="row no-gutters">
                                    <div className="col-md-4">
                                    <img src={book.volumeInfo.imageLinks.smallThumbnail} className="card-img" alt="..."/>
                                    </div>
                                    <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{book.volumeInfo.title}</h5>
                                        <p className="card-text">Author:{book.volumeInfo.authors}</p>
                                        {/* {author} */}
                                        <p className="card-text"><small className="text-muted">Description: {book.volumeInfo.description}</small></p>
                                        <button className="view"><a href={book.volumeInfo.canonicalVolumeLink} target="_blank" style={{textDecoration:'none', color:'black'}}>View</a></button>
                                        <button className="save" data-id={book.id} data-title={book.volumeInfo.title} data-author={book.volumeInfo.authors}  data-desc={book.volumeInfo.description} data-image={book.volumeInfo.imageLinks.smallThumbnail} data-vol={book.volumeInfo.canonicalVolumeLink}onClick={this.handleSave.bind(this)}>Save</button>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            )
                            
                        })}
                        </List>
                       
                    </Col>
                </Row>
                </Container>
        )
    }
}

export default Search;