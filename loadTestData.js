import { MongoClient } from 'mongodb';
import assert from 'assert';
import config from './config';

MongoClient.connect(config.mongodbUri, (err, db) => {
  assert.equal(null, err);

  db.collection('contests').insertMany([
    { id: 1, categoryName: 'Business/SME', contestName: 'New shades with Nash Paints',
      description: `
Nash Paints is a one of the largest paint producer and distributor in Southern African region
      `,
      nameIds: [101, 102] },
    { id: 2, categoryName: 'Blog/Newsletter', contestName: 'Essentials of human nutrition',
      description: `
Educating people about sustainable food production
      `,
      nameIds: [] },
    { id: 3, categoryName: 'Data-Driven software', contestName: 'Machine learning analytics for E-commerce',
    description: `
Data is created at every touch point in a notes life-cycle. Because of the volume of the data, it can be difficult to store, analyse and gain insight. Collecting, processing and analysing the data using big data technologies and displaying the results in an interactive display makes it easy to make informative decisions, overcome problem and plan for the future.

It works using big data technologies and displays the results in modern browsers, combining powerful visualisation components and a data-driven approach to interact with the data.

It enables you to analyse data that were not previously possible. The volume, variety, complexity of the analytical processing involved, and the responsiveness required are now achievable with the product. Gaining smarter decision making but also provide faster time to value.
    `,
      nameIds: [103, 104, 105] },
    { id: 4, categoryName: 'Webpage', contestName: 'Free PDF books',
    description: `
Free pdf book list available for online downloads at any given time
    `,
      nameIds: [] }
  ]).then(response => {
    console.info('Contests', response.insertedCount);
    db.collection('names').insertMany([
      { id: 101, name: 'Braniac Maniac', timestamp: new Date() },
      { id: 102, name: 'Mind Maze', timestamp: new Date() },
      { id: 103, name: 'Coin toss', timestamp: new Date() },
      { id: 104, name: 'Geographical map', timestamp: new Date() },
      { id: 105, name: 'Currency map', timestamp: new Date() },
      { id: 106, name: 'Ratatouile', timestamp: new Date() },
    ]).then(response => {
      console.info('Names', response.insertedCount);
      db.close();
    });
  });
});
