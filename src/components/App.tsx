import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components';

import Search from './Search';
import ListView from './ListView';
import DetailView from './DetailView';

const AppHeader = styled.header`
    width: 100%;
`;

const AppMain = styled.main`
    width: 100%;
`;

class App extends Component<any> {
    render() {
        return (
            <>
                <AppHeader />

                <AppMain>
                    <Search/>
                    <ListView/>
                </AppMain>
            </>
        )
    }
};

export default App;
