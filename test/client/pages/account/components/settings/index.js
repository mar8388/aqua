'use strict';
const Lab = require('lab');
const Proxyquire = require('proxyquire');
const React = require('react');
const ReactDOM = require('react-dom');
const Store = require('../../../../../../client/pages/account/store/index');


const lab = exports.lab = Lab.script();
const stub = {
    Actions: {
        getAccountSettings: () => {},
        getUserSettings: () => {}
    }
};
const Component = Proxyquire('../../../../../../client/pages/account/components/settings/index.jsx', {
    '../../actions': stub.Actions
});
const container = global.document.createElement('div');


lab.experiment('Account Home Component', () => {

    lab.afterEach((done) => {

        ReactDOM.unmountComponentAtNode(container);

        done();
    });


    lab.test('it renders', (done) => {

        const ComponentEl = React.createElement(Component, {});

        ReactDOM.render(ComponentEl, container);

        done();
    });


    lab.test('it handles a store change', (done) => {

        const ComponentEl = React.createElement(Component, {});

        ReactDOM.render(ComponentEl, container);

        Store.dispatch({
            type: 'UNKNOWN'
        });

        done();
    });
});
