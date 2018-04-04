module.exports = app => {
    app.get('/', (req, res) => {
        // Crate.findAll(crates => {
        //     res.json(crates);
        // });
        res.json({ 'success': 'test' });
    });
}