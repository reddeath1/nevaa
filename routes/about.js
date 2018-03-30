let express = require('express'),
    router = express.Router();


router.get('/',function (req,res,next) {
    res.render('about',{title:'Nevaa'});
});

module.exports = router;