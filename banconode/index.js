const express = require('express');
const userRoutes = require('./routes/userRoutes');
const fileRoutes = require('./routes/fileRoutes');
const app = express();

app.use(express.json());


app.use('/api', userRoutes);
app.use('/api/files', fileRoutes)


app.listen(3000, () => {
    console.log('Server running on port 3000');
});