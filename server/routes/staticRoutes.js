const express = require('express');
const checkAuth = require('../middleware/routeAuth');
const router = express.Router();

// router.get('/home',checkAuth(),(req,res)=>{
//     // console.log(req.user);
//     res.render("home",{
//         user:req.user
//     });
// })

router.get('/homepage',checkAuth(),(req,res)=>{
    res.render("homepage",{
        user:req.user
    });
})

router.get('/event',(req,res)=>{
    res.render('event');
})

router.get('/enterEvent',(req,res)=>{
    res.render('enterEvent');
})

router.get('/scanner',checkAuth(),(req,res)=>{
    res.render("Scanner");
})


router.get('/register',checkAuth(),(req,res)=>{
    res.render("register",);
})
router.get('/signIn',(req,res)=>{
    res.render("signin");
})
router.get('/',(req,res)=>{
    res.render("login");
})
router.get('/logOut',(req,res)=>{
    res.clearCookie('token').redirect('/');
})


module.exports = router;