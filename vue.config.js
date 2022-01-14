module.exports = {
    publicPath: '.', // comment out when developing
    pages: {
        index: {
            entry: 'src/assets/main.js',
            template: 'public/index.html',
            filename: 'index.html'
        },
        thema: {
            entry: 'src/pages/thema/thema.js',
            template: 'src/pages/thema/thema.html',
            filename: 'thema.html'
        },
        behindthescenes: {
            entry: 'src/pages/behindthescenes/behindthescenes.js',
            template: 'src/pages/behindthescenes/behindthescenes.html',
            filename: 'behindthescenes.html'
        }
    }
};
