const express = require("express");
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    'extended': 'true'
}));
app.use(bodyParser.json());
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
const products = [
    {
        company: "Nike",
        model: "Revolution 5",
        price: "$65.00",
        img: "1.jpg",
        href: "product1"
    },
    {
        company: "Hoka One One",
        model: "Clifton 6",
        price: "$129.95",
        img: "2.jpg",
        href: "product2"
    },
    {
        company: "Nike",
        model: "Flyease Revolution 5",
        price: "$65.00",
        img: "3.jpg",
        href: "product3"
    },
    {
        company: "New Balance",
        model: "Fresh Foam Arishi v3",
        price: "$69.99",
        img: "4.jpg",
        href: "product4"
    },
    {
        company: "Nike Kids",
        model: "Flex Runner (Big Kid)",
        price: "$50.00",
        img: "5.jpg",
        href: "product5"
    },
    {
        company: "Under Armour Kids",
        model: "Surge 2 (Little Kid)",
        price: "$37.99",
        img: "6.jpg",
        href: "product6"
    }
]
app.use(express.static("public"));
app.get('/home', function(req, res){
    res.render('pages/home',{products: products});
})
app.get('/about', function(req, res){
    res.render('pages/about');
})
app.get('/contact', function(req, res){
    res.render('pages/contact');
})
app.get('/:product', function(req, res){
    res.render('pages/'+req.params.product)
})







app.listen(3000);