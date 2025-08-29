1. npm init
2.npm install --save express mysql2 dotenv cors
3. npm i --save nodemon
4. add .env file in root
5. npm i --save jsonwebtoken nodemailer
6. need to generate token key 
in the terminal type "node"
then 
require('crypto').ramdomBytes(64).toString('hex');