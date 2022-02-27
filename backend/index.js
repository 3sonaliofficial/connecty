const express = require("express");
const app = express();
const port = 5000;

const cors = require("cors");

const userRouter = require("./routers/userRouter");
const vendorRouter = require("./routers/vendorRouter");
const reviewRouter = require("./routers/reviewRouter");

app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);
app.use(express.json());

app.use("/user", userRouter);
app.use("/vendor", vendorRouter);
app.use("/review", reviewRouter);

app.listen(port, () => {
  console.log("server started");
});
