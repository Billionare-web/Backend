const express = require('express');

const app = express();
app.use(express.json());

const PORT = 8080;

app.get('/home/blog', (req, res) => {
    try {
        res.status(200).send('Hello world');
    } catch (error) {
        console.log(error);
    }
});

app.post('/api/post', (req, res) => {
    try{
        const { firstName, lastName, email } = req.body;

        res.send(`My full Name is ${firstName} ${lastName}`);
    } catch (error) {
        res.send(`Error this is Post req -- $(error)`);
    }
})

app.listen(PORT, () => console.log(`Listen to -- https://localhost:${PORT}`));
