const express = require('express');
const router = express.Router();
const connection = require('../connection');
const auth = require('../services/authentication');
const checkRole = require('../services/checkRole');

router.post('/add',auth.authenticateToken, checkRole.checkRole,(req,res)=>{
    const product = req.body;
    query = "insert into product (name,categoryId,description ,price,status) values (?,?,?,?,'true')";
    connection.query(query,[product.name, product.categoryId, product.description, product.price],(err, results)=>{
        if(!err){
            return res.status(200).json({ message: "Record added successfully"});
        }
        else{
            return res.status(500).json(err);
        }
    })
});

router.get('/get', auth.authenticateToken,(req, res, next)=>{
    query = "select p.id, p.name, p.categoryId, p.price, p.status, c.id as categoryId, c.name as categoryName from product as p INNER JOIN category as c where p.categoryId = c.id";
    connection.query(query,(err, results)=>{
        if(!err){
            return res.status(200).json(results);
        }
        else{
            return res.status(500).json(err);
        }
    })
});

router.get('/getByCategoryId/:id', auth.authenticateToken,(res, results)=>{
    const id = req.params.id;
    query ="select id, name from product where categoryId =? and status='true'";
    connection.query(query,[id], (err, results)=>{
        if(!err){
            return  res.status(200).json(results);
        }
        else{
            return res.status(500).json(err);
        }
    })
});

router.get('/getById/:id', auth.authenticateToken,(req,res,next)=>{
    const id = req.params.id;
    query = "select id, name, description, price from product where id =?";
    connection.query(query,[id],(err, results)=>{
        if(!err){
            return res.status(200).json(results[0]);
        }
        else {
            return res.status(500).json(err);
        }
    })
});

router.patch('/update', auth.authenticateToken, checkRole.checkRole,(req, res, next)=>{
    const product = req.body;
    query ="insert into product set name=?, categoryId=?, description=?, price=? where id=?";
    connection.query(query,[product.name, product.categoryId, product.description, product.price, product.id],(err, results)=>{
        if(!err){
            if(results.affectedRows==0){
                return res.status(404).json({ message: "product does not fount"});
            }
            return res.status(200).json({ message: " product updated successfully"});
        }
        else {
            return res.status(500).json(err);
        }
    })
})

module.exports = router