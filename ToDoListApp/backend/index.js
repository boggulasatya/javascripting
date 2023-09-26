// Server API
const PORT = 8080;
const app = require('express')();   // npm i express
const cors = require('cors');       // npm i cors
const uniqid = require('uniqid');   // npm i uniqid
const morgan = require('morgan');   // npm i morgan

app.use(morgan('dev'));
app.use(cors());


const data = [
    {id: uniqid(), task: 'buy milk', done: false},
    {id: uniqid(), task: 'wash dishes', done: false},
    {id: uniqid(), task: 'clean up', done: true },
];


app.get("/todos", (req, res) => {
    res.json(data);
});

app.post("/todos/:id/delete", (req, res) => {
  const idToDelete = req.params.id;

  // Find the index of the to-do item with the specified id
  const indexToDelete = data.findIndex(item => item.id === idToDelete);

  // If the item is found, remove it from the data array
  if (indexToDelete !== -1) {
      data.splice(indexToDelete, 1);
      res.status(204).send(); // Send a successful (no content) response
  } else {
      res.status(404).json({ error: "To-do item not found" });
  }
});



app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
