
const getIndex = (req, res, next) => {
  res.render('index', { title: 'Join the movement' });
}

module.exports = { getIndex }