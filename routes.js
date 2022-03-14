const Controller = require('./app/controllers/controller.js');

module.exports = [
    { method: 'GET', path: '/', config: Controller.index },
    { method: 'GET', path: '/planning', config: Controller.planning },
    { method: 'GET', path: '/data', config: Controller.data },
    { method: 'GET', path: '/about', config: Controller.about },
    {
        method: "GET",
        path: "/{param*}",
        handler: {
            directory: {
                path: "./public"
            }
        },
        options: { auth: false }
    },
];