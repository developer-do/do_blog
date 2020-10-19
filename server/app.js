import express from "express";
import mongoose from "mongoose";
import config from "./config";

const app = express();
const { MONGO_URI } = config;

// hpp & helmet 서버 보안 설정
app.use(hpp());
app.use(helmet());

// cors 설정
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

// log 확인
app.use(morgan("div"));

app.use(express.json());

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connecting Success!!"))
  .catch((e) => console.log(e));
app.get("/");

export default app;
