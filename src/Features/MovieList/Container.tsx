import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import actions from './Actions';
import { movieListStore } from './Selectors';

// @ts-ignore
const movieListActions = actions.features.movieList;

const mapDispatchToProps = (dispatch: any) =>
    bindActionCreators(movieListActions, dispatch);

const MovieList = (props: any) => {
    useEffect(() => {
        props.movieListGet();
    });

    return <span>saaaaa</span>;
};

export default connect(
    movieListStore,
    mapDispatchToProps
)(MovieList);
