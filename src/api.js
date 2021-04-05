/**
 * @module API
 */
const express = require('express');

const app = express();

/**
 * Index route
 * @name index
 * @path {GET} /
 */
app.get('/', (req, res) => res.send('Welcome'));
/**
 * Post route
 * @name users
 * @path {POST} /users
 */
app.post('/users', (req, res) => res.send('Welcome'));
/**
 * Route to delete a product.
 * @name products
 * @path {DELETE} /products
 */
app.delete('/products', (req, res) => res.send('Welcome'));
