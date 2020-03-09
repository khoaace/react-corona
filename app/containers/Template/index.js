/*
 * Test Page
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo, useState } from 'react';
import PropTypes, { func } from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

import { makeSelectorLoading, makeSelectorError } from 'utils/createSelector';
import reducer, { selector, operation, action, type } from './ducks';
import { push } from 'connected-react-router';

export function Template({
    loading = false,
    error = false,
}) {
    useInjectReducer({ key: type.key, reducer: reducer });
    useInjectSaga({ key: type.key, saga: operation.default });

    return (
        <div>
            <Helmet>
                <title>Test Page</title>
                <meta
                    name="description"
                    content="A React.js Boilerplate application homepage"
                />
            </Helmet>
            <div>
                
            </div>
        </div>
    );
}

Template.propTypes = {
//   error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
//   loading: PropTypes.bool,
}

const mapStateToProps = createStructuredSelector({
    // loading: makeSelectorLoading(type.template),
    // error: makeSelectorError(type.template),
});

export function mapDispatchToProps(dispatch) {
    return {
        onRouter: evt => dispatch(push(evt)),
    };
}

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);

export default compose(
    withConnect,
    memo,
)(Template);

