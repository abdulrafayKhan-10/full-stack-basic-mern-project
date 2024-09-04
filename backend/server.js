import express from "express";
import dotenv from "dotenv";
import { ConnectDB } from "./config/db.js";
import router from "./Route/products.route.js";

dotenv.config();

const app = express();
app.use(express.json());    
app.use("/api/products", router);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>{ 
    ConnectDB();
    console.log(`Server running on port ${PORT}`)
    }
    );
