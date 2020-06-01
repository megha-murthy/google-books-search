const db=require('../models');

module.exports=function(app){
    app.post('/api/save',function(req,res){
        console.log(req.body)
        db.Book.create(
            req.body
        )
        .then(res.end()) 
        
    })
    
    app.get('/api/loadbooks',function(req,res){
        db.Book.find()
        .then(data=>res.json(data));
    })

    app.delete('/api/remove/:id',function(req,res){
        console.log("to delete",req.params.id);
        db.Book.findById({
            _id: req.params.id
        })
        .then(dbModel=>{
            dbModel.remove()
            res.end()});
    })
}

