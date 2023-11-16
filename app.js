require('@babel/register');
const React = require('react');
const express = require('express');
const app = express();

app.listen(3000, () => console.log('Все работает'));
