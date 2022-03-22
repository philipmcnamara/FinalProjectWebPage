const MainPage = {
    index: {
        handler: function (request, h) {
            return h.file('./app/views/main.html');
        },
    },
    planning: {
        handler: function (request, h) {
            return h.file('./app/views/planning.html');
        },
    },
    data: {
        handler: function (request, h) {
            return h.file('./app/views/data.html');
        },
    },
    about: {
        handler: function (request, h) {
            return h.file('./app/views/about.hbs');
        },
    },
};

module.exports = MainPage;