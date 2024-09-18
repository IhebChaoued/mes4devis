const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Hello, world!');
  });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
