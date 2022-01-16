module.exports = {
    publicPath: '.', // comment out when developing
    pages: {
        index: {
            entry: 'src/assets/main.js',
            template: 'public/index.html',
            filename: 'index.html'
        },
        kaartjes: {
            entry: 'src/assets/kaartjes.js',
            template: 'src/pages/kaartjes/kaartjes.html',
            filename: 'kaartjes.html'
        },
        behindthescenes: {
            entry: 'src/assets/behindthescenes.js',
            template: 'src/pages/behindthescenes/behindthescenes.html',
            filename: 'behindthescenes.html'
        },
        nieuwefilm: {
            entry: 'src/assets/nieuwefilm.js',
            template: 'src/pages/nieuwefilm/nieuwefilm.html',
            filename: 'nieuwefilm.html'
        }
    }
};
