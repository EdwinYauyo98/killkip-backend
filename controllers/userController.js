const db = require('../database');

const conection = db();

const register = (req,res) =>{
    const {nombre, apellido, email, password} = req.body;

    conection.query('INSERT INTO USUARIOS SET?', {
        nombre:nombre,
        apellido:apellido,
        email:email,
        password:password
    }, (err, result) =>{
        if(!err){
            res.json("usuario añadido")
        }else{
            res.json("usuario no añadido");
            console.log(err);
        }
    });
}

const login = (req, res) =>{
    const {email, password} = req.body;

    conection.query('SELECT * FROM USUARIOS WHERE email=? and password=?', [email, password],
    (err,result) => {
        if(err)
            console.log(err);
        if(result.length!==0){
            res.json("logeo exitoso");
            console.log(result);
        }
    });
}

const edit = (req,res) =>{
    const {nombre, apellido, email, password} = req.body;

    conection.query('UPATE USUARIOS SET?', {
        nombre:nombre,
        apellido:apellido,
        email:email,
        password,password
    }+'WHERE email=?',email, (err,result) => {
        if(!err){
            res.json("usuario actualizado");
        } else{
            res.json("usuario no actualizado");
            console.log(err);
        }
    });
}


module.exports = {
    register,
    login,
    edit
}