import express from "express";
import router from "./routes.js";
const app = express();
app.use(express.json());
const port = process.env.PORT || "8500";

app.use("/",router);

app.listen(port,()=>{
    console.log(`Server is listening on http://localhost:${port}.`);
});