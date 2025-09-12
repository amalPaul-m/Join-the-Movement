
const getAboutLogin = (req, res, next) => {
  res.render('aboutLogin', { title: 'Join the movement' });
}

module.exports = { getAboutLogin }