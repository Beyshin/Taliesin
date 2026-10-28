const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  res.render('admin/dashboard', { username: req.session.username || 'Admin' });
});

router.get('/add-comic', (req, res) => {
  res.render('admin/add-comic');
});

router.get('/add-character', (req, res) => {
  res.send('dodawanie bohatera');
});


module.exports = router;