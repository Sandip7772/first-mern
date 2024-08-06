const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.get('/', (req, res)=> {res.send('Hello world');});
app.post( '/username', (req, res)=> {res.send(`${req.body.name}`);});
app.listen(port,()=>{
    console.log (`server is running on http://localhost:${port}`);
});