const express = require("express")
const router = express.Router()

router.post('/', function(req, res, next) {
    const setid_passes = require("./pass.js")
    const getid_pass = {id: req.body.id, pass: req.body.pass}

    const check_id_pass = setid_passes.passwords.some(id_pass =>{id_pass.id === getid_pass.id && id_pass.pass === getid_pass.pass})
    // console.log(check_id_pass)
    // console.log(setid_passes.passwords)
    var check = 0

    for (var i=0; i<setid_passes.passwords.length; i++){
        // console.log(setid_passes.passwords[i])
        // console.log(getid_pass)
        const id_check = (setid_passes.passwords[i].id === getid_pass.id)?1:0
        const pass_check = (setid_passes.passwords[i].pass === getid_pass.pass)?1:0
        check += id_check * pass_check
    }

    // const id_check = (setid_pass.id === getid_pass.id)?1:0
    // const pass_check = (setid_pass.pass === getid_pass.pass)?1:0
    // const check = (id_check+pass_check>1)?1:0
    const param = {
        check,
        // id_check,
        // pass_check
    }
    res.header('Content-Type', 'application/json; charset=utf-8')
    res.send(param);
  });
  
  module.exports = router;