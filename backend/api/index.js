const express = require("express");
const app = express();
//i have changed the import statment to require to soleve the problem
const cors = require("cors");
const { Users } = require("./data/users");


app.use(cors());
app.get("/", (req, res) => {
    res.send("Hello World! ayoub says Api is working successfully");
});

//The splice() method modifies the original Users array by removing the first 20 elements
//and returning those elements as a new array.
app.get("/api/users", (req, res) => {
//tow methods
// const {q}=req.query;
const q=req.query.q;
   console.log(q)

   //
    const keys = ["first_name", "last_name", "email", "gender"];
  const SearchResult = (Users) => {
    return Users.filter((user) =>
      keys.some((key) => user[key].toLowerCase().includes(q))
    );
  }
    res.json(SearchResult(Users).splice(0,20));
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
