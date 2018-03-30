let express = require('express'),
    router = express.Router();


router.get('/',function (req,res,next) {
    res.render('contact',{title:'Nevaa'});
});

module.exports = router;