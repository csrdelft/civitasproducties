module.exports = {
    publicPath: '.', // comment out when developing
    pages: {
        index: {
            entry: 'src/assets/main.js',
            template: 'public/index.html',
            filename: 'index.html'
        },
        thema: {
            entry: 'src/assets/thema.js',
            template: 'src/pages/thema/thema.html',
            filename: 'thema.html'
        },
        behindthescenes: {
            entry: 'src/assets/behindthescenes.js',
            template: 'src/pages/behindthescenes/behindthescenes.html',
            filename: 'behindthescenes.html'
        }
    }
};
