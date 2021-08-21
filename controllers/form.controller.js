const Form = require("../models/Form");

module.exports = {

        newForm :async (req, res) => {


                const newForm = new Form(req.body);
                const savedForm = await newForm.save();
                res.status(200).json({ savedForm });



        }



};