const pool = require('../database');


//const conection = db();

const register = (req,res) =>{
    const {name, lastname, email, password} = req.body;
    pool().getConnection(function (err, connection) {

        if(err) throw err;


        connection.query('SELECT * FROM user WHERE email=? and password=?', [email, password],
        (err,result) => {

            if(err)
                console.log(err);
            if(result.length!==0){
                //correo existente
                res.json("Éste correo está en uso");
                console.log(result);
            }
            else
            {
                //correo nuevo
                connection.query('INSERT INTO user SET?', {
                    name:name,
                    lastname:lastname,
                    email:email.trim(),
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
                //console.log(result);
            }
            connection.release();
        });

        // connection.query('INSERT INTO user SET?', {
        //     name:name,
        //     lastname:lastname,
        //     email:email,
        //     password:password
        // }, (err, result) =>{
        //     if(!err){
        //         res.json("usuario añadido")
        //     }else{
        //         res.json("usuario no añadido");
        //         console.log(err);
        //     }

        //     connection.release();
        // });
    });
}

const login = (req, res) =>{
    const {email, password} = req.body;
    pool().getConnection(function (err, connection){


        if(err) throw err;

        connection.query('SELECT * FROM user WHERE email=? and password=?', [email.trim(), password],
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
            connection.release();
        });
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
            [id_user, name, lastname, email.trim(), password, id_user], (err,result) => {
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


module.exports = {
    register,
    login,
    edit
}