const express = require('express');
const cors = require('cors');

const { uuid } = require('uuidv4');

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

// resume
app.use((request, response, next) => {
  console.time('Request time');
  console.log(`REQUEST Method: [${request.method}] URL: ${request.url}`);
  next();
  console.timeEnd('Request time');
});

// list
app.get('/repositories', (request, response) => {
  return response.json(repositories);
});

// add/create
app.post('/repositories', (request, response) => {
  const { title, url, techs } = request.body;

  const project = { id: uuid(), title, url, techs, likes: 0 };

  repositories.push(project);

  return response.json(project);
});

// edit/update
app.put('/repositories/:id', (request, response) => {
  const { title, url, techs } = request.body;
  const { id } = request.params;
  const repositoryIndex = repositories.findIndex(repository => repository.id === id);

  if (repositoryIndex < 0)
    return response.status(400).json({ error: 'Repo not found!' });

  const editedRepository = { ...repositories[repositoryIndex], title, url, techs }
  repositories[repositoryIndex] = editedRepository;

  return response.json(editedRepository);
});

// remove
app.delete('/repositories/:id', (request, response) => {
  const { id } = request.params;

  const repositoryIndex = repositories.findIndex(repository => repository.id === id);

  if (repositoryIndex < 0)
    return response.status(400).json({ error: 'Repo not found!' });

  repositories.splice(repositoryIndex, 1);
  return response.status(204).send();
});

// add like
app.post('/repositories/:id/like', (request, response) => {
  const { id } = request.params;

  const repositoryIndex = repositories.findIndex(repository => repository.id === id);

  if (repositoryIndex < 0)
    return response.status(400).json({ error: 'Repo not found!' });
  
  repositories[repositoryIndex].likes++;

  return response.json(repositories[repositoryIndex]);
});

module.exports = app;
