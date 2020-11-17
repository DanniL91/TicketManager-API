const app = require ('./app');

const express = require('express');

const PORT =process.env.PORT || 3050;

app.use(express.json());

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))