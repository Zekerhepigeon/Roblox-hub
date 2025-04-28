const express = require('express');
const app = express();
const path = require('path');

// Serve all files (HTML, CSS, JS) from current folder
app.use(express.static(path.join(__dirname)));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
