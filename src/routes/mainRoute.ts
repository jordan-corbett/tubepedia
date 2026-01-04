import { Router } from 'express';
const mainRouter = Router();

mainRouter.get('/', (_req, res) => {
  res.render('pages/home', { title: 'Home Page' });
});

mainRouter.get('/history', (_req, res) => {
  res.render('pages/history');
});

mainRouter.get('/departures', (_req, res) => {
  res.render('/pages/departures');
});

mainRouter.get('/map', (_req, res) => {
  res.render('pages/map');
});

mainRouter.get('/games-and-quizzes', (_req, res) => {
  res.render('pages/gamesAndQuizzes');
});

mainRouter.get('/lines-and-stations', (_req, res) => {
  res.render('pages/lines-and-stations');
});

mainRouter.get('/about', (_req, res) => {
  res.render('pages/about');
});

export default mainRouter;