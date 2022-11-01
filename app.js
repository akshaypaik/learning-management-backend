const express = require("express");
const cors = require("cors");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const router = require("./router");

let sessionOptions = session({
    secret: "lms is amazing",
    store: MongoStore.create({
        client: require("./db")
    }),
    saveUninitialized: true,
    resave: false,
    proxy: true,
    name: "learningManagementCookie",
    cookie: {
        maxAge: 1000 * 60* 60* 24,
        httpOnly: true,
        sameSite: process.env.NODE_ENV === "production" ? 'none' : 'lax',
        secure: process.env.NODE_ENV === "production"
    }
});

const app = express();

app.use(sessionOptions);
app.use(cors({
    credentials: true,
    origin: [
        "http://localhost:4200",
        "http://learning-management-frontend.s3-website.ap-south-1.amazonaws.com"
    ]
}));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", router);

module.exports = app;