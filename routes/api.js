var express = require('express');
var router = express.Router();

var SSH = require('simple-ssh');
var ssh = new SSH({
    host: '188.166.23.178',
    user: 'root',
    pass: 'Password99!'
});
 
 
/***
ssh.exec('echo', {
    args: ['$PATH'],
    out: function(stdout) {
        console.log(stdout);
    }
}).start();
***/
router.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");      
    res.setHeader("Access-Control-Allow-Methods","*");
    next();  
  });




router.get('/scan', function(req, res, next) {
    var email = req.query.email;
    var website = req.query.id; // GET REQUEST LOCALHOST:3000/SCAN?ID=FACEBOOK.COM
    res.send('respond with a resource');
    console.log(website);
    console.log(email);
    ssh.exec('cd ..; sudo sh main.sh '+website+' '+email, {
        pty: true,
        out: console.log.bind(console)
    }).start();
    
    /***
    ssh.exec('cd ..; sudo sh main.sh '+website+' '+email, {
        out: function(stdout) {
            console.log(stdout);
        }
    }).start();
    ***/
});

module.exports = router;
