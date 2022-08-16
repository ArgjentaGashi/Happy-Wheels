require('./config/mongoose.config');
const express = require('express');
const app = express();
const PORT = 8001;
const cors = require('cors');

app.use(express.json());

app.use(cors({origin:"http://localhost:3000"}));

require('./routes/wheels.routes')(app);

app.listen(PORT, ()=> console.log(`Listening to port ${PORT}`));

