const express = require("express") //import the package
const mongoose = require("mongoose")
const routes = require("./routes");
//connect to mongoDB database
mongoose.connect("mongodb+srv://SakshiKakad:sakshikakad123@vparking.qzg362v.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
        const app = express(); //create the instance
        app.use(express.json());
        app.use("/api", routes);

        app.listen(3000, () => {
            console.log("Server has started !")

        })
    })