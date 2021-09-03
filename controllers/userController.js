const pool = require('../database');
const jwt = require('jsonwebtoken');

//const conection = db();

const register = (req,res) =>{
    const {name, lastname, email, password} = req.body;
    pool().getConnection(function (err, connection) {

        if(err) throw err;

        connection.query('INSERT INTO user SET?', {
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

            connection.release();
        });
    });
}

const login = (req, res) =>{
    const {email, password} = req.body;
    pool().getConnection(function (err, connection){

        if(err) throw err;

        connection.query('SELECT * FROM user WHERE email=? and password=?', [email, password],
        (err,result) => {
            if(err)
                console.log(err);
            if(result.length!==0){
                console.log(result);
                const token = jwt.sign({email: email, password: password}, 'my_secret');
                res.json({token}); 
            }
            else
            {
                res.json("datos incorrectos");
                console.log(result);
            }
            connection.release();
        });
    });

}

const out = (req, res) =>{
    jwt.verify(req.token, 'my_secret', (err, data)=>{
        if(err){
            res.sendStatus(403);
            //console.log("1");
        } else{
            res.json({text: 'protected'});
        }
    });
}

const edit = (req,res) =>{
    const {id_user, name, lastname, email, password} = req.body;
    pool().getConnection(function (err,connection){

        if (err){
            console.log(err);
            throw err;
        }

        connection.query('UPDATE user SET id_user=?, name=?, lastname=?, email=?, password=? WHERE id_user=?', 
            [id_user, name, lastname, email, password, id_user], (err,result) => {
            if(!err){
                res.json("usuario actualizado");
            } else{
                //res.json("usuario no actualizado");
                res.json("error");
                console.log(err);
            }
            connection.release();
        });
    });
}

// middleware

function ensureToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];

    if (typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];
        //console.log(bearerToken);
        req.token = bearerToken;
        next()
    }
    else{
        res.sendStatus(403);
    }
}


module.exports = {
    register,
    login,
    edit,
    ensureToken,
    out
}