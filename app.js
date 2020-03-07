const express = require ('express');
const appServer = express();
const myUser = require ('./user');

appServer.listen (3000, ()=>{
    console.log('SERVER IS RUNNING ON PORT 3000');
   });
//Middleware, este debe estar antes de todas las rutas
appServer.use(express.json());
   
appServer.get ('/', (req, res) => {
 res.send ('HELLO WORLD WITH EXPRESS!!!');
 });

appServer.get ('/mybasicinfo', (req, res) => {
 res.send ('THIS IS MY BASIC INFORMATION - My Name Is Julian Andres Vargas!!!');
 });

appServer.get ('/myexperience', (req, res) => {
 res.send ('THIS IS MY EXPERIENCE - Ingeniero Progamador');
 });

appServer.get ('/getrequest', (req, res) => {
 res.send ('THIS IS A GET REQUEST'); 
 });

appServer.post ('/postrequest', (req, res) => {
 res.send ('THIS IS A POST REQUEST');
 });

appServer.delete ('/deleteUser/:id', (req, res) => {
    const usu = req.id;
    console.log(usu);
    myUser.slice(usu);
 res.send ('THIS IS A DELETE REQUEST');
 }); 

appServer.put ('/putrequest', (req, res) => {
 res.send ('THIS IS A PUT REQUEST');
 });

appServer.get ('/user', (req, res)=>{
    res.json (myUser);
});
   
appServer.post ('/adduser' , (req, res)=>{
    //console.log(req.body);
    const usuario = req.body;
    myUser.push(usuario);
    res.send ('POST USER ADDED');
});

appServer.post ('/updateuser/:idUser' , (req, res)=>{
    console.log(req.body);
    console.log ( req.params.idUser);
    res.send ('USER UPDATED');
});

appServer.post ('/deleteuser/:idUser' , (req, res)=>{
    console.log (req.params.idUser);
    myUser.splice(req.params.idUser,1);
    res.send ('THIS IS A DELETE REQUEST');
});
