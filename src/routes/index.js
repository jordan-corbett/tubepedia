const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('pages/index', { title: 'Home Page' });
});

router.get('/history', (req, res) => {
  res.render('pages/history');
});

router.get('/departures', (req, res) => {
  res.render('/pages/departures');
});

router.get('/map', (req, res) => {
  res.render('pages/map');
});

router.get('/games-and-quizzes', (req, res) => {
  res.render('pages/gamesAndQuizzes');
});

router.get('/lines-and-stations', (req, res) => {
  res.render('pages/linesAndStations');
});

router.get('/about', (req, res) => {
  res.render('pages/about');
});

module.exports = router;