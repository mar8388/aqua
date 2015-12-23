'use strict';
const Code = require('code');
const Constants = require('../../../../../client/pages/account/constants');
const Lab = require('lab');
const Store = require('../../../../../client/pages/account/store/index');


const lab = exports.lab = Lab.script();


lab.experiment('Account Password Reducer', () => {

    lab.test('it handles a SAVE_PASSWORD_SETTINGS action', (done) => {

        Store.dispatch({
            type: Constants.SAVE_PASSWORD_SETTINGS
        });

        const state = Store.getState().password;

        Code.expect(state.loading).to.be.true();

        done();
    });


    lab.test('it handles a SAVE_PASSWORD_SETTINGS_RESPONSE action (success)', (done) => {

        Store.dispatch({
            type: Constants.SAVE_PASSWORD_SETTINGS_RESPONSE
        });

        const state = Store.getState().password;

        Code.expect(state.loading).to.be.false();

        done();
    });


    lab.test('it handles a SAVE_PASSWORD_SETTINGS_RESPONSE action (validation errors)', (done) => {

        Store.dispatch({
            type: Constants.SAVE_PASSWORD_SETTINGS_RESPONSE,
            err: new Error('sorry pal'),
            response: {
                validation: {
                    keys: ['name']
                },
                message: 'name is required'
            }
        });

        const state = Store.getState().password;

        Code.expect(state.loading).to.be.false();
        Code.expect(state.showSaveSuccess).to.be.false();
        Code.expect(state.hasError).to.have.length(1);
        Code.expect(state.help).to.have.length(1);

        done();
    });


    lab.test('it handles a SAVE_PASSWORD_SETTINGS_RESPONSE action (other error)', (done) => {

        Store.dispatch({
            type: Constants.SAVE_PASSWORD_SETTINGS_RESPONSE,
            err: new Error('sorry pal'),
            response: {
                message: 'something else failed'
            }
        });

        const state = Store.getState().password;

        Code.expect(state.loading).to.be.false();
        Code.expect(state.showSaveSuccess).to.be.false();
        Code.expect(state.error).to.equal('something else failed');

        done();
    });


    lab.test('it handles a HIDE_PASSWORD_SAVE_SUCCESS action', (done) => {

        Store.dispatch({
            type: Constants.HIDE_PASSWORD_SAVE_SUCCESS
        });

        const state = Store.getState().password;

        Code.expect(state.showSaveSuccess).to.be.false();

        done();
    });
});
