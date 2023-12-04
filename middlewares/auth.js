const jwtHelpers = require('../utils/jwtHelpers')

exports.check = (req, res, next) => 
{    
    let token = req.headers.authorization
    
    token = token?.replace('Bearer', '')?.trim() //trim() "remove spaces from the start and the end of a string"

    const payload = jwtHelpers.verifyToken(token)
    if (payload) {
        req.userId = payload.sub
        return next() 
    }
    res.status(401).json({
        message: 'Unauthorized!'
    })
    
}