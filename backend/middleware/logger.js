const logger  = (req , res , next)=>{
    console.log("Request Time" , new Date());
    console.log("Method" , req.method);
    console.log("URL" , req.url);

    next();
}

module.exports =  logger;