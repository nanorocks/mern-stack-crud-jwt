const loggerMiddleware = (req, res, next) => {
    // console.log({
    //     req, res
    // })

    next()
} 

module.exports = loggerMiddleware;
