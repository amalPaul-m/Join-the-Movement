
const getContact = (req, res, next) => {
  res.render('contact', { title: 'Join the movement' });
}

module.exports = { getContact }