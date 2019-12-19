import React from 'react';
import { Router, Route, Switch } from 'react-router';
import { createGlobalStyle } from 'styled-components';
import { FormattedMessage } from 'react-intl';
import {MasterDetailLayout, SvgIcon, themes} from "@globality/gi-web-components"
import Styled from "./styled-components"
import StyledExample from "./StyledExample"
import IntlExample from "./IntlExample"
import TestExample from "./TestExample"
import GqlExample from "./GqlExample"
import globalityLogo from './assets/globality-logo.svg';
import theme from './theme.sass';
import masterDetailTheme from './theme.sass';
import loc from './locale.yml'; // eslint-disable-line no-unused-vars

const GlobalStyle = createGlobalStyle`
    ${themes.normalize}
    .root {
        position: absolute;
        height: 100%;
        width: 100%;
    }
`;

const MainPage = ({ container }) => {
    return (
        <div className={theme.wrapper}>
            <MasterDetailLayout theme={masterDetailTheme}>
                <MasterDetailLayout.Master>
                    <aside className={theme.aside}>
                        <h2>
                            <FormattedMessage id="@loc:poco" />
                        </h2>
                        <div className={theme.nav}>
                            <Styled.Link to='/styled'>Components & Styling</Styled.Link>
                            <Styled.Link to='/intl'>Localization</Styled.Link>
                            <Styled.Link to='/testing'>Testing</Styled.Link>
                            <Styled.Link to='/gql'>Apollo GQL Example</Styled.Link>
                        </div>
                        <footer className={theme.logo}>
                            <SvgIcon icon={globalityLogo} />
                        </footer>
                    </aside>
                </MasterDetailLayout.Master>
                <MasterDetailLayout.Detail>                    
                    <Switch>
                        <Route path='/styled' component={StyledExample} exact />
                        <Route path='/intl' component={IntlExample} exact />
                        <Route path='/testing' component={TestExample} exact />
                        <Route path='/gql' component={GqlExample} exact />
                    </Switch>
                </MasterDetailLayout.Detail>
            </MasterDetailLayout>
        </div>
    );
}

export default function createApp ({ container, onReady }) {
    const { history } = container;
    setTimeout(() => onReady(), 1000);

    return (
        <React.Fragment>
            <GlobalStyle />
            <Router history={history}>
                <Switch>
                    <Route path='/' render={() => <MainPage container={container} />} />
                </Switch>
            </Router>
        </React.Fragment>
    );
}
