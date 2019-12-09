import React from 'react';
import { Router, Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import StyledExample from "./StyledExample"

const MainPage = ({ container }) => {
    return (
        <div>
            <h2>Front-end developer playground</h2>
            {/* <pre style={{ fontSize: '10px', color: '#ccc' }}>
                {JSON.stringify(container.configuration.config, null, 2)}
            </pre> */}
            <Link to='/styled'>Styled components</Link>
        </div>
    );
}

export default function createApp ({ container, onReady }) {
    const { history } = container;
    setTimeout(() => onReady(), 1000);

    return (
        <Router history={history}>
            <Switch>
                <Route path='/styled' component={StyledExample} exact />
                <Route path='/' render={() => <MainPage container={container} />} />
            </Switch>
        </Router>
    );
}
