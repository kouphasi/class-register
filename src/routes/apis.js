const express = require("express")
const router = express.Router()
const doIt = require("./functions/entry.js")
router.post('/', async function(req, res, next) {
    // const getid_pass = {id: req.body.id, pass: req.body.pass}

    const club = await req.body.club_data
    const schedule_set = await req.body.schedule

    const param = await doIt.doIt(club, schedule_set)
    // const param = [club, schedule_set]
    await res.header('Content-Type', 'application/json; charset=utf-8')
    await res.send(param);
  });
  
  module.exports = router;