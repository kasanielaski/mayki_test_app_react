import React, { Component } from 'react';
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

class App extends Component {
    render() {
        return (
            <>
                <AppHeader />

                <AppMain>
                    <Search/>
                    <ListView/>
                    <DetailView/>
                </AppMain>
            </>
        )
    }
};

export default App;
