const db = require('../database');


//const conection = db();

const register = (req,res) =>{
    const {name, lastname, email, password} = req.body;
    db().connect();
    db().query('INSERT INTO user SET?', {
        name:name,
        lastname:lastname,
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

    db().end();
}

const login = (req, res) =>{
    const {email, password} = req.body;
    db().connect();
    db().query('SELECT * FROM user WHERE email=? and password=?', [email, password],
    (err,result) => {
        if(err)
            console.log(err);
        if(result.length!==0){
            res.json("logeo exitoso");
            console.log(result);
        }
        else
        {
            res.json("datos incorrectos");
            console.log(result);
        }
    });
    db().end();
}

const edit = (req,res) =>{
    const {name, lastname, email, password} = req.body;
    db().connect();
    db().query('UPATE USUARIOS SET?', {
        name:name,
        lastname:lastname,
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
    db().end();
}


module.exports = {
    register,
    login,
    edit
}