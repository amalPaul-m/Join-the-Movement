const usersSchema = require('../models/usersSchema');


const getHome = async (req, res, next) => {

  if (!req.isAuthenticated() && !req.session.user) {
    return res.redirect('/login');
  }

  try {

    res.render('home', { title: 'Join the movement' });


  } catch (error) {

    console.log(error)

  }
};



module.exports = { getHome }