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
            template: 'src/pages/eerderefilms/contact.html',
            filename: 'contact.html'
        },
        contact: {
            entry: 'src/assets/contact.js',
            template: 'src/pages/contact/contact.html',
            filename: 'contact.html'
        },
        nieuwefilm: {
            entry: 'src/assets/nieuwefilm.js',
            template: 'src/pages/nieuwefilm/nieuwefilm.html',
            filename: 'nieuwefilm.html'
        }
    }
};
