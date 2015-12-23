'use strict';
const Code = require('code');
const Constants = require('../../../../client/pages/account/constants');
const Lab = require('lab');
const Proxyquire = require('proxyquire');


const lab = exports.lab = Lab.script();
const stub = {
    Fetch: function () {

        stub.Fetch.mock.apply(null, arguments);
    },
    Store: {

        dispatch: function () {

            stub.Store.dispatch.mock.apply(null, arguments);
        }
    }
};
const Actions = Proxyquire('../../../../client/pages/account/actions', {
    '../../helpers/json-fetch': stub.Fetch,
    './store/index': stub.Store
});


lab.experiment('Account Actions', () => {

    lab.test('it handles getAccountSettings successfully', (done) => {

        stub.Store.dispatch.mock = function (action) {

            if (action.type === Constants.GET_ACCOUNT_SETTINGS) {
                Code.expect(action.request).to.exist();
            }

            if (action.type === Constants.GET_ACCOUNT_SETTINGS_RESPONSE) {
                Code.expect(action.err).to.not.exist();
                Code.expect(action.response).to.exist();

                done();
            }
        };

        stub.Fetch.mock = function (options, callback) {

            Code.expect(options).to.be.an.object();
            Code.expect(callback).to.be.a.function();

            callback(null, {});
        };

        Actions.getAccountSettings({});
    });


    lab.test('it handles getAccountSettings when xhr fails', (done) => {

        stub.Store.dispatch.mock = function (action) {

            if (action.type === Constants.GET_ACCOUNT_SETTINGS) {
                Code.expect(action.request).to.exist();
            }

            if (action.type === Constants.GET_ACCOUNT_SETTINGS_RESPONSE) {
                Code.expect(action.err).to.exist();
                Code.expect(action.response).to.not.exist();

                done();
            }
        };

        stub.Fetch.mock = function (options, callback) {

            Code.expect(options).to.be.an.object();
            Code.expect(callback).to.be.a.function();

            callback(new Error('sorry pal'));
        };

        Actions.getAccountSettings({});
    });


    lab.test('it handles saveAccountSettings successfully', (done) => {

        const realSetTimeout = setTimeout;

        setTimeout = function (handler, ms) {

            handler();

            setTimeout = realSetTimeout;

            done();
        };

        stub.Store.dispatch.mock = function (action) {

            if (action.type === Constants.SAVE_ACCOUNT_SETTINGS) {
                Code.expect(action.request).to.exist();
            }

            if (action.type === Constants.SAVE_ACCOUNT_SETTINGS_RESPONSE) {
                Code.expect(action.err).to.not.exist();
                Code.expect(action.response).to.exist();
            }
        };

        stub.Fetch.mock = function (options, callback) {

            Code.expect(options).to.be.an.object();
            Code.expect(callback).to.be.a.function();

            callback(null, {});
        };

        Actions.saveAccountSettings({});
    });


    lab.test('it handles saveAccountSettings when xhr fails', (done) => {

        stub.Store.dispatch.mock = function (action) {

            if (action.type === Constants.SAVE_ACCOUNT_SETTINGS) {
                Code.expect(action.request).to.exist();
            }

            if (action.type === Constants.SAVE_ACCOUNT_SETTINGS_RESPONSE) {
                Code.expect(action.err).to.exist();
                Code.expect(action.response).to.not.exist();

                done();
            }
        };

        stub.Fetch.mock = function (options, callback) {

            Code.expect(options).to.be.an.object();
            Code.expect(callback).to.be.a.function();

            callback(new Error('sorry pal'));
        };

        Actions.saveAccountSettings({});
    });


    lab.test('it handles hideAccountSaveSuccess', (done) => {

        stub.Store.dispatch.mock = function (action) {

            if (action.type === Constants.HIDE_ACCOUNT_SAVE_SUCCESS) {

                done();
            }
        };

        Actions.hideAccountSaveSuccess({});
    });


    lab.test('it handles getUserSettings successfully', (done) => {

        stub.Store.dispatch.mock = function (action) {

            if (action.type === Constants.GET_USER_SETTINGS) {
                Code.expect(action.request).to.exist();
            }

            if (action.type === Constants.GET_USER_SETTINGS_RESPONSE) {
                Code.expect(action.err).to.not.exist();
                Code.expect(action.response).to.exist();

                done();
            }
        };

        stub.Fetch.mock = function (options, callback) {

            Code.expect(options).to.be.an.object();
            Code.expect(callback).to.be.a.function();

            callback(null, {});
        };

        Actions.getUserSettings({});
    });


    lab.test('it handles getUserSettings when xhr fails', (done) => {

        stub.Store.dispatch.mock = function (action) {

            if (action.type === Constants.GET_USER_SETTINGS) {
                Code.expect(action.request).to.exist();
            }

            if (action.type === Constants.GET_USER_SETTINGS_RESPONSE) {
                Code.expect(action.err).to.exist();
                Code.expect(action.response).to.not.exist();

                done();
            }
        };

        stub.Fetch.mock = function (options, callback) {

            Code.expect(options).to.be.an.object();
            Code.expect(callback).to.be.a.function();

            callback(new Error('sorry pal'));
        };

        Actions.getUserSettings({});
    });


    lab.test('it handles saveUserSettings successfully', (done) => {

        const realSetTimeout = setTimeout;

        setTimeout = function (handler, ms) {

            handler();

            setTimeout = realSetTimeout;

            done();
        };

        stub.Store.dispatch.mock = function (action) {

            if (action.type === Constants.SAVE_USER_SETTINGS) {
                Code.expect(action.request).to.exist();
            }

            if (action.type === Constants.SAVE_USER_SETTINGS_RESPONSE) {
                Code.expect(action.err).to.not.exist();
                Code.expect(action.response).to.exist();
            }
        };

        stub.Fetch.mock = function (options, callback) {

            Code.expect(options).to.be.an.object();
            Code.expect(callback).to.be.a.function();

            callback(null, {});
        };

        Actions.saveUserSettings({});
    });


    lab.test('it handles saveUserSettings when xhr fails', (done) => {

        stub.Store.dispatch.mock = function (action) {

            if (action.type === Constants.SAVE_USER_SETTINGS) {
                Code.expect(action.request).to.exist();
            }

            if (action.type === Constants.SAVE_USER_SETTINGS_RESPONSE) {
                Code.expect(action.err).to.exist();
                Code.expect(action.response).to.not.exist();

                done();
            }
        };

        stub.Fetch.mock = function (options, callback) {

            Code.expect(options).to.be.an.object();
            Code.expect(callback).to.be.a.function();

            callback(new Error('sorry pal'));
        };

        Actions.saveUserSettings({});
    });


    lab.test('it handles hideUserSaveSuccess', (done) => {

        stub.Store.dispatch.mock = function (action) {

            if (action.type === Constants.HIDE_USER_SAVE_SUCCESS) {

                done();
            }
        };

        Actions.hideUserSaveSuccess({});
    });


    lab.test('it handles savePasswordSettings successfully', (done) => {

        const realSetTimeout = setTimeout;

        setTimeout = function (handler, ms) {

            handler();

            setTimeout = realSetTimeout;

            done();
        };

        stub.Store.dispatch.mock = function (action) {

            if (action.type === Constants.SAVE_PASSWORD_SETTINGS) {
                Code.expect(action.request).to.exist();
            }

            if (action.type === Constants.SAVE_PASSWORD_SETTINGS_RESPONSE) {
                Code.expect(action.err).to.not.exist();
                Code.expect(action.response).to.exist();
            }
        };

        stub.Fetch.mock = function (options, callback) {

            Code.expect(options).to.be.an.object();
            Code.expect(callback).to.be.a.function();

            callback(null, {});
        };

        Actions.savePasswordSettings({});
    });


    lab.test('it handles savePasswordSettings when xhr fails', (done) => {

        stub.Store.dispatch.mock = function (action) {

            if (action.type === Constants.SAVE_PASSWORD_SETTINGS) {
                Code.expect(action.request).to.exist();
            }

            if (action.type === Constants.SAVE_PASSWORD_SETTINGS_RESPONSE) {
                Code.expect(action.err).to.exist();
                Code.expect(action.response).to.not.exist();

                done();
            }
        };

        stub.Fetch.mock = function (options, callback) {

            Code.expect(options).to.be.an.object();
            Code.expect(callback).to.be.a.function();

            callback(new Error('sorry pal'));
        };

        Actions.savePasswordSettings({});
    });


    lab.test('it handles savePasswordSettings when passwords do not match', (done) => {

        stub.Store.dispatch.mock = function (action) {

            if (action.type === Constants.SAVE_PASSWORD_SETTINGS_RESPONSE) {
                Code.expect(action.err).to.exist();
                Code.expect(action.response).to.exist();

                done();
            }
        };

        Actions.savePasswordSettings({
            password: 'hi',
            passwordConfirm: 'hey'
        });
    });


    lab.test('it handles hidePasswordSaveSuccess', (done) => {

        stub.Store.dispatch.mock = function (action) {

            if (action.type === Constants.HIDE_PASSWORD_SAVE_SUCCESS) {

                done();
            }
        };

        Actions.hidePasswordSaveSuccess({});
    });
});
