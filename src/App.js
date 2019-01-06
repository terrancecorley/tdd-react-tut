import React, { Component, Fragment } from 'react';
import { CSSNormalize } from './CSSNormalize';
import { CSSGlobalStyles } from './CSSGlobalStyles';
import Login from './Login';

class App extends Component {
    render() {
        return (
            <Fragment>
                <CSSNormalize />
                <CSSGlobalStyles />
                <Login />
            </Fragment>
        );
    }
}

export default App;
