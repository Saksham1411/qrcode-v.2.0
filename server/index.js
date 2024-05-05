require("dotenv").config();
const express = require('express');
const staticRoute = require('./routes/staticRoutes');
const studentRoute = require('./routes/student');
const userRoute = require('./routes/auth');
const eventRoute = require('./routes/event');
const notFound = require('./middleware/not-found');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
const checkAuth = require('./middleware/authentication');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// app.set("view engine", "ejs");
// app.set("views", path.resolve("./views"));

app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({
    credentials:true,
    origin:process.env.FRONTEND
}));
// app.use(checkAuth('token'));

// app.use('/', staticRoute);
app.use('/',userRoute);
app.use('/',eventRoute);
// app.use('/', studentRoute);

// app.use(notFound);

const start = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        app.listen(PORT, () => console.log("working..."));
    } catch (error) {
        console.log(error);
    }
}
start();