const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config');
const {basicStrategy, jwtStrategy} = require('./strategies');

const router = express.Router();

const jsonParser = bodyParser.json();

const UsersController = require('./users');
const AuthController = require('./auth');
const ScraperController = require('./scraper');

//Register User
router.post('/register', jsonParser, UsersController.register);

//Login User
router.post('/login', passport.authenticate('basic', {session: false}), AuthController.login);

//Refresh Token
router.post('/refresh', passport.authenticate('jwt', {session: false}), AuthController.refresh);

//Add Entry
router.post('/add', [passport.authenticate('jwt', {session: false}), jsonParser],UsersController.addEntry);

//GET Topics
router.get('/topics', jsonParser, ScraperController.getTopics);

//GET data
router.get('/get-entries', [passport.authenticate('jwt', {session: false}), jsonParser], ScraperController.getdata);


module.exports = {router, basicStrategy, jwtStrategy};