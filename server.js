const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
let nextId = 10;

function getNewId() {
  return nextId++;
}

let friends = [
  {
    id: 1,
    name: 'Mario',
    age: 28,
    email: 'mario@lambdaschool.com',
    location: 'Milan'
  },
  {
    id: 2,
    name: 'Ben',
    age: 30,
    email: 'ben@lambdaschool.com',
    location: 'New York'
  },
  {
    id: 3,
    name: 'Austen',
    age: 32,
    email: 'austen@lambdaschool.com',
    location: 'Austin'
  },
  {
    id: 4,
    name: 'Ryan',
    age: 35,
    email: 'ryan@lambdaschool.com',
    location: 'Georgia'
  },
  {
    id: 5,
    name: 'Sean',
    age: 35,
    email: 'sean@lambdaschool.com',
    location: 'Lagos'
  },
  {
    id: 6,
    name: 'Michelle',
    age: 67,
    email: 'michelle@gmail.com',
    location: 'Abuja'
  },
  {
    id: 7,
    name: 'Luis',
    age: 47,
    email: 'luis@lambdaschool.com',
    location: 'Abeokuta'
  },
  {
    id: 8,
    name: 'Olawale',
    age: 32,
    email: 'wala@lambdaschool.com',
    location: 'Rio'
  },
  {
    id: 9,
    name: 'James',
    age: 18,
    email: 'james@lambdaschool.com',
    location: 'London'
  },
];

app.use(cors());
app.use(bodyParser.json());

app.get('/friends', (req, res) => {
  res.status(200).json(friends);
});

app.post('/friends', (req, res) => {
  const friend = { id: getNewId(), ...req.body };
  friends = [...friends, friend];
  res.status(201).json(friends);
});

app.put('/friends/:id', (req, res) => {
  const { id } = req.params;
  let friendIndex = friends.findIndex(friend => friend.id == id);

  if (friendIndex >= 0) {
    friends[friendIndex] = { ...friends[friendIndex], ...req.body };
    res.status(200).json(friends);
  } else {
    res
      .status(404)
      .json({ message: `The friend with id ${id} does not exist.` });
  }
});

app.delete('/friends/:id', (req, res) => {
	friends = friends.filter(friend => friend.id != req.params.id);
	res.status(200).json(friends);
});

app.listen(5000, () => {
  console.log('server listening on port 5000');
});
