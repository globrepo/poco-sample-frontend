import Poco, { HistoryPlugin, IntlPlugin, ReduxPlugin } from '@globality/poco';

import createApp from './modules/app';

const App = new Poco({
    appName: 'poco-sample-frontend',
    createApp,
});

App.load((app) => {
    app.addPlugin(HistoryPlugin);
    app.addPlugin(IntlPlugin);
    app.addPlugin(ReduxPlugin, {
        rootReducer: state => state,
    });
});
