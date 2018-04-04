module.exports = app => {
    app.get('/', (req, res) => {
        res.json({ 'Welcome': 'Welcome to the api' });
    });
}