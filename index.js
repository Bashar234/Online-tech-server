const express = require("express");
const cors = require("cors");
const course = require("./data/course.json");
const category = require("./data/catagory.json");
const app = express();

const PORT = process.env.PORT || 5000;
app.use(cors());
app.get("/", (req, res) => {
  res.status(200).send("Server is running");
});

app.get("/api/category", (req, res) => {
  res.status(200).send(category);
});

app.get("/api/course", (req, res) => {
  res.status(200).send(course);
});
app.get("/api/course/:id", (req, res) => {
  const id = req.params.id;
  //console.log(typeof id);
  const findCourse = course.find((item) => item.course_id === id);
  res.status(200).send(findCourse);
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
