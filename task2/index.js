import express from "express";
import route from "./route.js";
const app = express();
const port = process.env.PORT || "8000";
app.use(express.json());

app.use("/",route);

app.listen(port,()=>{
    console.log(`Server is listening on http://localhost:${port}.`);
});