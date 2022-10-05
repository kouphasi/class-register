const express = require("express")
const router = express.Router()

router.get('/', function(req, res, next) {
    var param = {"値":"これはサンプルAPIです"};
    res.header('Content-Type', 'application/json; charset=utf-8')
    res.send(param);
  });


router.get('/hello', function(req, res, next) {
    var param = {"result":"Hello World !"};
    res.header('Content-Type', 'application/json; charset=utf-8')
    res.send(param);
  });


module.exports = router;