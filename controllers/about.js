
const getAbout = (req, res, next) => {
  res.render('about', { title: 'Join the movement' });
}

module.exports = { getAbout }