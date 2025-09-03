const express = require('express');
const router = express.Router();
const connection = require('../connection');
const auth = require('../services/authentication');
const checkRole = require('../services/checkRole');