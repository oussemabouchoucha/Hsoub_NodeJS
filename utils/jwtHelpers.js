const jwt = require('jsonwebtoken')
const secret = process.env.JWT_SECRET
const expiresIn = process.env.JWT_EXPIRES_IN

exports.signToken = (payload) => {
    return jwt.sign(payload, secret, { expiresIn })
}

exports.verifyToken = (token) => {
    try{
        return jwt.verify(token, secret)
    } catch (e) {
        return false
    }
}