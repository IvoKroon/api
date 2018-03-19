module.exports = app => {
    require('./routes/crateRoute')(app);
    require('./routes/userRoute')(app);
}