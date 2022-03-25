var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res,) {
  res.render('index', {layout:false});
});
//tabel data
router.get('/dashboard', function(req, res) {
  res.render('tabel');
});
//list mobil card
router.get('/dashboard2', function(req, res) {
  res.render('listCar');
});
//form tambah
router.get('/dashboard3', function(req, res) {
  res.render('tambah');
});
//form edit
router.get('/dashboard4', function(req, res) {
  res.render('edit');
});

// login user

router.post('/dashboard',(req, res)=>{
    const {email,password} = req.body;
    user.push({
        email,
        password,
    });
    res.redirect('tabel');
});


//logout
router.get('/',(req,res)=>{
   
    res.render('index',{logout: "Berhasill Keluar"})
        
    
})
module.exports = router;
