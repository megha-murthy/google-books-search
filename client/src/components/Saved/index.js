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


class Saved extends React.Component{
    state={
        search:'',
        APIKey:'AIzaSyAKnOrsH2cU8UYpqKVSpfHtXbwrb0XRgWM',
        saved:[]  
    }


    componentDidMount(){
        this.getSavedBooks();
    }

    getSavedBooks(){
        axios.get('/api/loadbooks')
        .then(response=>{
            console.log("got back books",response);
            this.setState({
                saved:response.data
            })
        })
    }

    handleDelete(event){
        let value=event.target.dataset.id;
        console.log("delete",value);
        axios.delete('/api/remove/'+ value)
        .then(res=>{
            console.log("deleted",res);
            this.getSavedBooks();
            toast.error("Deleted!");
        })
    }

    render(){
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
                        <h3>Saved Books</h3>
                        <List>
                        {this.state.saved.map((book,index)=>{
                            return(
                                <div className="card mb-3" key={index}>
                                <div className="row no-gutters">
                                    <div className="col-md-4">
                                    <img src={book.image} className="card-img" alt="..."/>
                                    </div>
                                    <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{book.title}</h5>
                                        <p className="card-text">Author:{book.authors}</p>
                                        <p className="card-text"><small className="text-muted">Description: {book.description}</small></p>
                                        <button className="view"><a href={book.link} target="_blank" style={{textDecoration:'none', color:'black'}}>View</a></button>
                                        <button className="save" data-id={book._id} onClick={this.handleDelete.bind(this)}>Delete</button>
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

export default Saved;