const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const { PORT } = require('./deploy-info/config');

const themeRoute = require('./routes/theme');
const resetPasswordRoute = require('./routes/resetpassword');
const forgotPasswordRoute = require('./routes/forgot-password');
const deleteRoute = require('./routes/delete');
const categoriesRoute = require('./routes/categories');
const signRoute = require('./routes/sign');
const loginRoute = require('./routes/login');
const purchasesRoute = require('./routes/purchases');
const homeRoute = require('./routes/home');
const favoritesRoute = require('./routes/favorites');
const cartRoute = require('./routes/cart');
const profileRoute = require('./routes/profile');
const historyRoute = require('./routes/history');
const salesRouter = require('./routes/sales');
const searchRouter = require('./routes/products');
const quantityRoute = require('./routes/n-products');

app.use(cors({
    origin: ['https://free-market-ecommerce.netlify.app'],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(session({
    key: "sessionID",
    secret: "myteamisthebestteamever",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 60 * 24 * 1000
    }
}));

app.use('/', homeRoute);
app.use('/login', loginRoute);
app.use('/sign', signRoute);
app.use('/categories', categoriesRoute);
app.use('/sales', salesRouter);
app.use('/search', searchRouter);
app.use('/quantity', quantityRoute);
app.use('/delete', deleteRoute);
app.use('/forgotpassword', forgotPasswordRoute);
app.use('/resetpassword', resetPasswordRoute);

/*
app.use((req, res, next) => {
    console.log(req.session);
    if(req.session.sessionID) next();
    else res.sendStatus(401);
})
*/

app.use('/theme', themeRoute);
app.use('/favorites', favoritesRoute);
app.use('/cart', cartRoute);
app.use('/profile', profileRoute);
app.use('/history', historyRoute);
app.use('/purchases', purchasesRoute);

app.post('/closesession', (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});