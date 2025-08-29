const express = require('express');
const connection = require('../connection');
const router = express.Router();

const jwt = require('jsonwebtoken');
require('dotenv').config();

router.post('/signup', (req, res) => {
    let user = req.body;
    query = "SELECT * from user WHERE email=?";
    connection.query(query, [user.email], (err, results) => {
        if (!err) {
            if (results.length <= 0) {
                query = "INSERT into user (name, contactNumber, email,password, status, role ) VALUES (?,?,?,?, 'false','user')";
                connection.query(query, [user.name, user.contactNumber, user.email, user.password], (err, results) => {
                    if (!err) {
                        return res.status(200).json({
                            message: "User registered successfully"
                        })
                    } else {
                        return res.status(500).json(err);
                    }
                })
            } else {
                return res.status(400).json({
                    message: "Email id already exists"
                })
            }
        } else {
            return res.status(500).json(err);
        }
    })
});

router.post('/login', (req, res) => {
    const user = req.body;
    query = "SELECT email,password,status, role FROM user WHERE email=? ";
    connection.query(query, [user.email], (err, results) => {
        if (!err) {
            if (results.length <= 0 || results[0].password != user.password) {
                return res.status(401).json({ message: " User Name or password incorrect" })
            }
            else if (results[0].status === 'false') {
                return res.status(401).json({ message: "User is not active, waiting or approval" })
            }
            else if (results[0].password == user.password) {
                const response = { email: results[0].email, role: results[0].role };
                const accessToken = jwt.sign(response, process.env.ACCESS_TOKEN, { expiresIn: '8h' });
                return res.status(200).json({ token: accessToken })
            }
            else {
                return res.status(400).json({ message: "Something went wrong, try again later" });
            }
        }
        else {
            return res.status(500).json(err);
        }
    })
})

module.exports = router;