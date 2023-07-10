const { Post } = require('../models');

const postData = [
  {
    title: "Sample Title One",
    content: 'Sample content for the forum post 1',
    user_id: 1
  },
  {
    title: "Sample Title Two",
    content: 'Sample content for the forum post 2',
    user_id: 2
  },
  {
    title: "Sample Title Three",
    content: 'Sample content for the forum post 3',
    user_id: 3
  },
  {
    title: "Sample Title Four",
    content: 'Sample content for the forum post 4',
    user_id: 4
  },
  {
    title: "Sample Title Five",
    content: 'Sample content for the forum post 5',
    user_id: 5
  },
];

const seedCategories = () => Post.bulkCreate(postData);

module.exports = seedCategories;