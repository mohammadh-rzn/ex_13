const express = require("express");
const path = require('path');
const fs = require('fs');
const app = express();
const bodyParser = require('body-parser');
let users = [];
app.use(bodyParser.urlencoded({
    'extended': 'true'
}));
app.use(bodyParser.json());
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/',function(req, res){
    res.render('pages/signUp');
})

app.get('/login', function(req, res){
    res.render('pages/login');
})
app.post('/addUser', function(req, res){
    fs.readFile('./public/users.json','utf8', function(err, data){
        if(err){
            console.log(err);
        }
        else{
            let allUsers = JSON.parse(data);
            allUsers.push(req.body);
            fs.writeFile('./public/users.json', JSON.stringify(allUsers), function(err){
                if(err){
                    console.log(err);
                }
            })
        }
    })
    console.log(users);
    
    res.send(true);
})
app.get('/check/:username', function(req, res){
    let flag = true;
    fs.readFile('./public/users.json','utf8', function(err, data){
        if(err){
            console.log(err);
        }
        else{
            let allUsers = JSON.parse(data);
            console.log(req.params.username);
            for(let i = 0; i < allUsers.length; i++){
                if(allUsers[i].username === req.params.username)
                    flag = false;
            }
            res.send(flag);
        }
    })

})
app.get('/signUp', function(req, res){
    res.render('pages/signUp');
})
app.post('/loginCheck', function(req, res){
    
    let flag =false; 
    fs.readFile('./public/users.json','utf8', function(err, data){
        if(err){
            console.log(err);
        }
        else{
            let allUsers = JSON.parse(data);
            console.log(req.params.username);
            for(let i = 0; i < allUsers.length; i++){
                if(allUsers[i].username === req.body.username && allUsers[i].password === req.body.password){
                    flag = true;
                    allUsers[i].isLoggedIn =true;
                }
                    
            }
            res.send(flag);
            fs.writeFile('./public/users.json', JSON.stringify(allUsers), function(err){
                if(err){
                    console.log(err);
                }
            })

        }
    })
})
app.get('/profile',function(req, res){
    fs.readFile('./public/users.json','utf8', function(err, data){
        if(err){
            console.log(err);
        }
        else{
            let allUsers = JSON.parse(data);
            for(let i = 0; i < allUsers.length; i++){
                if(allUsers[i].isLoggedIn === true){
                    res.render('pages/profile',{user: allUsers[i]});
                }
                    
            }
        }
    })    
})
app.get('/logOut/:username', function(req, res){
    console.log('hello');
    fs.readFile('./public/users.json','utf8', function(err, data){
        if(err){
            console.log(err);
        }
        else{
            let allUsers = JSON.parse(data);
            console.log(req.params.username);
            for(let i = 0; i < allUsers.length; i++){
                if(allUsers[i].username === req.params.username){
                    allUsers[i].isLoggedIn =false;
                }
                    
            }
            res.send(true);
            fs.writeFile('./public/users.json', JSON.stringify(allUsers), function(err){
                if(err){
                    console.log(err);
                }
            })

        }
    })
})
app.post('/update', function(req, res){
    fs.readFile('./public/users.json','utf8', function(err, data){
        if(err){
            console.log(err);
            console.log('hell no');
        }
        else{
            let allUsers = JSON.parse(data);
            console.log(req.params.username);
            for(let i = 0; i < allUsers.length; i++){
                if(allUsers[i].username === req.body.username){
                    allUsers[i].isLoggedIn =false;
                    allUsers[i] = req.body;
                }
                    
            }
            console.log('hello');
            res.send(true);
            console.log(req.body);
            fs.writeFile('./public/users.json', JSON.stringify(allUsers), function(err){
                if(err){
                    console.log(err);
                }
            })

        }
    })
})
app.get('/checkLogged/:username', function(req, res){
    fs.readFile('./public/users.json','utf8', function(err, data){
        if(err){
            console.log(err);
        }
        else{
            let allUsers = JSON.parse(data);
            console.log(req.params.username);
            for(let i = 0; i < allUsers.length; i++){
                if(allUsers[i].username === req.params.username){
                    if(allUsers[i].isLoggedIn === true){
                        res.send(true);
                    }
                    else res.send(false);
                }
                    
            }
        }
    })
})
app.use(express.static('public'));




app.listen(3000);