const express = require('express');
const {newForm} = require("../controllers/form.controller");

const router = express.Router();

router.post('/', newForm);

module.exports=router;