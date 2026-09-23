const notFound = (req , res , next )=>{
    res.status(500).json({
        message :  "Routes Not Found"
    })
}

module.exports = notFound;