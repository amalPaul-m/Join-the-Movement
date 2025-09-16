
const getContactLogin = (req, res, next) => {
  res.render('contactLogin', { title: 'Join the movement' });
}

module.exports = { getContactLogin }