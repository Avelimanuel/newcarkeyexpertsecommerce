import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config()


import {userRouter} from './routes/user.js'
import { smartRouter } from "./routes/smart.js";
import { carBatRouter } from "./routes/carbatteries.js";
import { remotekeyRouter } from "./routes/remotekeys.js";
import {keycoverRouter} from "./routes/keycovers.js";
import {keyshellRouter} from "./routes/keyshells.js"


const port = process.env.PORT;

const app = express();

app.use(cors({
  origin:[""]
}))
app.use(express.json());


app.use("/user",userRouter)
app.use("/smartkeys",smartRouter)
app.use("/carbatteries",carBatRouter)
app.use("/remotekeys",remotekeyRouter)
app.use("/keycovers",keycoverRouter)
app.use("/keyshells",keyshellRouter)


const dbUri = process.env.DATABASE_URI
  

const dbConnection = async () => {
  try {
    await mongoose.connect(dbUri);
    console.log(`Database connected`);
    app.listen(port, () => {
      console.log(`Server runing on port ${port}`);
    });
  } catch (error) {
    console.log(`Connection to database has failed ${error}`);
  }
};

dbConnection();

app.use(express.json());
app.use(cors());
