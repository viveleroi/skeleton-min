import express from 'express';
import next from 'next';

// Get the Next app
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    // Create the express server application
    const server = express();

    // All remaining routes should be served by the front end
    server.get('*', (req, res) => handle(req, res));

    // Start the server
    server.listen(3000, err => {
        if (err) {
            throw err;
        }

        console.log(`Listening at http://localhost:3000`);
    });
});
