const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/api', (req, res) => {
    res.send('Server work')
});

app.listen(PORT, () => console.log(`Server has been started on port ${PORT}...`))