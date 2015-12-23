'use strict';
const Code = require('code');
const Constants = require('../../../../../client/pages/account/constants');
const Lab = require('lab');
const Store = require('../../../../../client/pages/account/store/index');


const lab = exports.lab = Lab.script();


lab.experiment('Account Details Reducer', () => {

    lab.test('it handles a GET_ACCOUNT_SETTINGS action', (done) => {

        Store.dispatch({
            type: Constants.GET_ACCOUNT_SETTINGS
        });

        const state = Store.getState().account;

        Code.expect(state.loading).to.be.true();
        Code.expect(state.hydrated).to.be.false();

        done();
    });


    lab.test('it handles a GET_ACCOUNT_SETTINGS_RESPONSE action (success)', (done) => {

        Store.dispatch({
            type: Constants.GET_ACCOUNT_SETTINGS_RESPONSE,
            err: null,
            response: {
                name: {}
            }
        });

        const state = Store.getState().account;

        Code.expect(state.loading).to.be.false();
        Code.expect(state.hydrated).to.be.true();

        done();
    });


    lab.test('it handles a GET_ACCOUNT_SETTINGS_RESPONSE action (error)', (done) => {

        Store.dispatch({
            type: Constants.GET_ACCOUNT_SETTINGS_RESPONSE,
            err: new Error('sorry pal'),
            response: {
                message: 'something else failed'
            }
        });

        const state = Store.getState().account;

        Code.expect(state.loading).to.be.false();
        Code.expect(state.showSaveSuccess).to.be.false();
        Code.expect(state.error).to.equal('something else failed');

        done();
    });


    lab.test('it handles a SAVE_ACCOUNT_SETTINGS action', (done) => {

        Store.dispatch({
            type: Constants.SAVE_ACCOUNT_SETTINGS,
            request: {
                data: {}
            }
        });

        const state = Store.getState().account;

        Code.expect(state.loading).to.be.true();

        done();
    });


    lab.test('it handles a SAVE_ACCOUNT_SETTINGS_RESPONSE action (success)', (done) => {

        Store.dispatch({
            type: Constants.SAVE_ACCOUNT_SETTINGS_RESPONSE,
            err: null,
            response: {}
        });

        const state = Store.getState().account;

        Code.expect(state.loading).to.be.false();

        done();
    });


    lab.test('it handles a SAVE_ACCOUNT_SETTINGS_RESPONSE action (failure)', (done) => {

        Store.dispatch({
            type: Constants.SAVE_ACCOUNT_SETTINGS_RESPONSE,
            err: new Error('sorry pal'),
            response: {
                name: {}
            }
        });

        const state = Store.getState().account;

        Code.expect(state.loading).to.be.false();

        done();
    });


    lab.test('it handles a HIDE_ACCOUNT_SAVE_SUCCESS action', (done) => {

        Store.dispatch({
            type: Constants.HIDE_ACCOUNT_SAVE_SUCCESS
        });

        const state = Store.getState().account;

        Code.expect(state.showSaveSuccess).to.be.false();

        done();
    });
});
