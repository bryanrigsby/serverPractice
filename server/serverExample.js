const express = require('express');
const app = express();
const cors = require('cors');

// Enable CORS
app.use(cors());

app.get('/test', (req, res) => {
    res.send('Hello from Server!');
});  

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});