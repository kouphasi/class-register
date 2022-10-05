const express = require("express")
const router = express.Router()

router.post('/', function(req, res, next) {
    const setid_pass = {id: "sophiaess", pass: "hello"}
    const getid_pass = {id: req.body.id, pass: req.body.pass}

    const id_check = (setid_pass.id === getid_pass.id)?1:0
    const pass_check = (setid_pass.pass === getid_pass.pass)?1:0
    const check = (id_check+pass_check>1)?1:0
    const param = {
        check,
        id_check,
        pass_check
    }
    res.header('Content-Type', 'application/json; charset=utf-8')
    res.send(param);
  });
  
  module.exports = router;