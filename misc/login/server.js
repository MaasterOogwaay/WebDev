const express = require("express"); // server software
const bodyParser = require("body-parser"); // parse incoming requests
const session = require("express-session"); // session middleware
const passport = require("passport"); // authentication
const connectEnsureLogin = require("connect-ensure-login"); // authorization
const User = require("./user.js"); // user model

const app = express();

/**
 * Configure session middleware
 */
app.use(
  session({
    secret: "r8q,+&1LM3)CD*zAGpx1xm{NeQhc;#",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60 * 60 * 1000 }, // 1 hour
  })
);

/**
 * Configure more middleware
 */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

/**
 * Passport local strategy for authenticating users.
 */
passport.use(User.createStrategy());

/**
 * Use with sessions. Saves data to user's key.
 */
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

/**
 * Get routes
 */
// Index page
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/static/index.html");
});

// Login page
app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/static/login.html");
});

// Dashboard page. Only accessible to logged in users
app.get("/dashboard", connectEnsureLogin.ensureLoggedIn(), (req, res) => {
  res.send(`Hello ${req.user.username}. Your session ID is ${req.sessionID} 
     and your session expires in ${req.session.cookie.maxAge} 
     milliseconds.<br><br>
     <a href="/logout">Log Out</a><br><br>
     <a href="/secret">Members Only</a>`);
});

// Secret page. Only accessible to logged in users
app.get("/secret", connectEnsureLogin.ensureLoggedIn(), (req, res) => {
  res.sendFile(__dirname + "/static/secret-page.html");
});

// Logout page
app.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/login");
});

/**
 * Post routes
 */
app.post("/login", passport.authenticate("local", { failureRedirect: "/" }), function (req, res) {
  console.log(req.user);
  res.redirect("/dashboard");
});

/**
 * Assign port
 */
const port = 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
