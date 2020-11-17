const db = require("../models");
const User = db.users;
const JWT = require('jsonwebtoken');

module.exports = {
    signIn: async (req, res, next) => {
        //const { email, password } =req.value.body;
        //console.log(email);
        const email = req.body.email.toLowerCase();
        console.log('esto imprimeeee::'+req.body.email);
        console.log('Signin()');
        const foundUser = User.findOne({where: { email: email }})
        if(foundUser){
            const token =JWT.sign({
                iss: 'Ok',
                sub: foundUser.id_user,
                iat: new Date().getTime(),
                exp: new Date().setDate(new Date().getDate() + 1)
            }, 'authentication');

            return res.status(200).json({token: token});
        }
        
    },
    auth: async (req, res, next) => {
        console.log('UserControllerauth()');
    }
}