const express = require('express');
const router = express.Router();

let data = {};

router.get('/', function(req, res) {
    if (Object.keys(data).length != 0) {
        res.status(200).json(data);
    }else{
        res.status(200).json(null);
    }

})

router.post('/', function(req, res){
    if (Object.keys(data).length != 0) {
        res.sendStatus(400);
    }else{
        data = req.body;
        console.log(req.body);
        res.sendStatus(200);
    }
})

router.put('/', function(req, res){
    if (Object.keys(data).length == 0) {
        res.sendStatus(400);
    }else{
        data = req.body;
        res.sendStatus(200);
    }
})

router.patch('/', function(req, res){
    if (Object.keys(data).length == 0) {
        res.sendStatus(400);
    }else{
        let temp = req.body;
        for (var i in temp) {
            data[i] = temp[i];
        } 
        res.sendStatus(200);
    }
})

module.exports = router;