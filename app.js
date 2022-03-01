const express = require('express');
const app = express();

const http = require('http');
const { Server } = require('socket.io');

const server = http.createServer(app);
const io = new Server(server);

app.use(express.json());

const port = 3000;
const chatRoute = require('./routes/chatRoute');

// Routes & Socket.IO
app.use('/chatting', chatRoute);
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});
app.use((req, res) => {
    return res.status(404).json({
        message: 'Page Not Found!'
    });
});

server.listen(port, () => {
    console.log(`App running on port ${port}...`);
});