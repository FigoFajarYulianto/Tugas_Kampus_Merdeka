const express = require('express')
const app = express();
app.use(express.json());
app.use(express.urlencoded({
    extended:false
}));

app.get('/', (req, res) => res.send('Hello world!'));
app.get('/products', (req, res) => {
    res.json(["apple", "redmi","one plus one"]);

});
app.get('/order', (req, res) => {
    res.json([
        { id: 1, paid: false, user_id: 1 }, 
        { id: 2, paid: false, user_id: 1 },
        
    ]);

});
app.set('view engine','ejs');
app.get('/', (req, res) => res.render('index'));
app.get('/query',(req, res)=>{
    const name = req.query.name || 'anonymous';
    res.render('name',{name});
});

const user= []
app.get('/register',(req, res) =>{
    res.render('register');
});
app.post('/register',(req, res)=>{
    const {name,email,password} = req.body;
    user.push({
        name,
        email,
        password,
    });
    res.status(201).json({status: 'success'});
});

const p = 3000;
app.listen(p, () => console.log(`App listen on port ${p}!`));