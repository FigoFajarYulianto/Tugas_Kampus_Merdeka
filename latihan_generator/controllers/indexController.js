// exports.index = (req, res)=>{
//     res.send('controller succes');
// };

exports.index = (req, res)=>{
    res.render('index', {tittle:'controller succes'})
};