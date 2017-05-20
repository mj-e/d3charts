module.exports = {
    DB: {
        test: 'mongodb://localhost/fx-test',
        dev: 'mongodb://localhost/fx-live'
    },
    PORT: {
        test: 3090, 
        dev: process.env.PORT || 3000
    }
};