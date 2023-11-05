
const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const colors = require("colors");
const chatRoutes = require("./Routes/chatRoutes");
const userRoutes = require('./Routes/userRoutes');
const messageRoutes = require('./Routes/messageRoutes')

const { notFound, errorHandler } = require("./middlewares/errrorMIddleware");



dotenv.config();
connectDB();
const app = express();


app.use(express.json())

app.get('/', (req, res) => {
    res.send("api is setteled");
})

app.use('/api/user', (userRoutes))
app.use('/api/chat', (chatRoutes))
app.use('/api/message', (messageRoutes))

app.use(notFound)
app.use(errorHandler)



const PORT = process.env.PORT || 5000

app.listen(5000, console.log(`server started on port ${PORT}`.blue.bold))