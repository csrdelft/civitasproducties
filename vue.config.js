module.exports = {
    publicPath: '.', // comment out when developing
    pages: {
        index: {
            entry: 'src/assets/main.js',
            template: 'public/index.html',
            filename: 'index.html'
        },
        ticketverkoop: {
            entry: 'src/assets/ticketverkoop.js',
            template: 'src/pages/ticketverkoop/ticketverkoop.html',
            filename: 'ticketverkoop.html'
        },
        eerderefilms: {
            entry: 'src/assets/eerderefilms.js',
            template: 'src/pages/eerderefilms/eerderefilms.html',
            filename: 'eerderefilms.html'
        },
        nieuwefilm: {
            entry: 'src/assets/nieuwefilm.js',
            template: 'src/pages/nieuwefilm/nieuwefilm.html',
            filename: 'nieuwefilm.html'
        }
    }
};
