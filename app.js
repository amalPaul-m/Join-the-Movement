  require('dotenv').config();
  const createError = require('http-errors');
  const express = require('express');
  const session = require('express-session');
  const nocache = require('nocache');
  const passport = require('passport');
  const path = require('path');
  const cookieParser = require('cookie-parser');
  const logger = require('morgan');
  const bodyParser = require('body-parser');
  const hbs = require('hbs');
  const moment = require('moment');
  const connectToDB = require('./configuration/db');
  connectToDB();
  require('./auth/google'); 


  const indexRouter = require('./routes/index');
  const userLoginRouter = require('./routes/userlogin');
  const userSignupRouter = require('./routes/signup');
  const verifyOtpRouter = require('./routes/verifyOtp');
  const homeRouter = require('./routes/home');
  const logoutRouter = require('./routes/logout');
  const authRouter = require('./routes/auth');
  const forgotRouter = require('./routes/forgot');
  const resetRouter = require('./routes/reset');
  const aboutRouter = require('./routes/about');
  const adminRouter = require('./routes/admin');
  const dashboardRouter = require('./routes/dashboard');

  const app = express();



  //session handling
  app.use(session({
    secret: process.env.SESSION_SECRET || 'someStrongRandomSecret',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false, // Set to true if using HTTPS
      httpOnly: true, // Helps prevent XSS attacks
      maxAge: 1000 * 60 * 60 * 24
    }
  }))

  // app.set('trust proxy', 1);

  // app.use(methodOverride('_method'));
  //cache remove
  app.use(nocache())


  // Passport middleware
  app.use(passport.initialize());
  app.use(passport.session());


  // Prevent caching to block back button after logout
  app.use((req, res, next) => {
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, private');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    next();
  });


  // view engine setup
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'hbs');

  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));

  //helpers

  hbs.registerHelper('section', function (name, options) {
      if (!this._sections) this._sections = {};
      this._sections[name] = options.fn(this);
      return null;
  });

  hbs.registerHelper('addOne', function (value) {
    return value + 1;
  });


  hbs.registerHelper('formatDate', function (date, format) {
    // Example format: 'DD/MM/YYYY hh:mm A'
    return moment(date).format(format);
  });

  app.use('/', indexRouter);
  app.use('/userlogin', userLoginRouter);
  app.use('/signup', userSignupRouter);
  app.use('/verifyOtp', verifyOtpRouter);
  app.use('/home', homeRouter);
  app.use('/logout', logoutRouter);
  app.use('/auth', authRouter);
  app.use('/forgot', forgotRouter);
  app.use('/reset', resetRouter);
  app.use('/about', aboutRouter);
  app.use('/admin', adminRouter);
  app.use('/dashboard', dashboardRouter);

  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
    next(createError(404));
  });

  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });

  module.exports = app;
