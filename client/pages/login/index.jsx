/* global window */
'use strict';
const ReactDOM = require('react-dom');
const Routes = require('./routes.jsx');


class App {
    static blastoff() {

        this.mainElement = ReactDOM.render(
            Routes,
            window.document.getElementById('app-mount')
        );
    }
}


module.exports = App;


/* $lab:coverage:off$ */
if (!module.parent) {
    window.app = App;
    App.blastoff();
}
/* $lab:coverage:on$ */
