const express = require("express");
require("dotenv").config();
const PORT  = process.env.PORT || 7000 ;
const notFound = require("./middleware/notFound");
const connectDB = require("./config/db");
const productRoute = require("./routes/productRoutes");
const loggerMid = require("./middleware/logger");
const errorMiddleware = require("./middleware/errorMiddleware");

const app = express();


// ==================================================
// Middleware
// ==================================================

app.use(express.json());

app.use(loggerMid);


// ==================================================
// Product Routes
// ==================================================

app.use("/product", productRoute);


// ==================================================
// Error Handling Middleware
// ==================================================
app.use(notFound);
app.use(errorMiddleware);


// ==================================================
// MongoDB Connection
// ==================================================

connectDB();


// ==================================================
// Start Server
// ==================================================

app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

});