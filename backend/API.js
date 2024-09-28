const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors({}));
app.use(express.json());

app.post('/api/response', (req,res) => {
    const {name} = req.body;
    console.log('Received request with name:', name); 
    res.json({ message: `Hello, ${name}. How are you today?` });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
