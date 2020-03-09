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

import { push } from 'connected-react-router';
import reducer, { selector, operation, action, type } from './ducks';
import messages from './messages'
// UI
import { Container, Row, Col, Spinner, Button } from "react-bootstrap";
import CardItem from './components/CardItem';

export function CoronaGeneral({
    loading = false,
    error = false,
    coronaList = [],
    onGetList = () => { }
}) {
    useInjectReducer({ key: type.key, reducer: reducer });
    useInjectSaga({ key: type.key, saga: operation.default });

    useEffect(() => {
        onGetList();
    }, []);

    let { total = {}, chart = {}, latest = {} } = coronaList;
    let { confirmed = 0, deaths = 0, recovered = 0 } = total;
    let { confirmed: confirmedVN = 0, deaths: deathsVN = 0, recovered: recoveredVN = 0 } = latest.Vietnam || {};

    return (
        <div>
            <Helmet>
                <title>Corona General</title>
                <meta
                    name="description"
                    content="A React.js Boilerplate application homepage"
                />
            </Helmet>
            <Container className='pt-5'>
                <div className="d-flex justify-content-center mb-3">
                    <Button variant="outline-primary" disabled={loading} onClick={() => { onGetList(); }}>{loading ? <Spinner animation="border" variant="primary" /> : <FormattedMessage {...messages.refresh} />}</Button>
                </div>
                <div>
                    <h3 className="text-center mb-3"><FormattedMessage {...messages.world} /></h3>
                    <Row>
                        <Col xs={12} sm={4}>
                            <CardItem title={<FormattedMessage {...messages.confirmed} />} total={confirmed} loading={loading} colorBg={'info'} colorText={'light'} />
                        </Col>
                        <Col xs={12} sm={4}>
                            <CardItem title={<FormattedMessage {...messages.deaths} />} total={deaths} loading={loading} colorBg={'info'} colorText={'light'}/>
                        </Col>
                        <Col xs={12} sm={4}>
                            <CardItem title={<FormattedMessage {...messages.recovered} />} total={recovered} loading={loading} colorBg={'info'} colorText={'light'}/>
                        </Col>
                    </Row>
                </div>
                <div className="mt-5">
                    <h3 className="text-center mb-3"><FormattedMessage {...messages.vietnam} /></h3>
                    <Row>
                        <Col xs={12} sm={4}>
                            <CardItem title={<FormattedMessage {...messages.confirmed} />} total={confirmedVN} loading={loading} colorBg={'danger'} colorText={'light'}/>
                        </Col>
                        <Col xs={12} sm={4}>
                            <CardItem title={<FormattedMessage {...messages.deaths} />} total={deathsVN} loading={loading} colorBg={'danger'} colorText={'light'}/>
                        </Col>
                        <Col xs={12} sm={4}>
                            <CardItem title={<FormattedMessage {...messages.recovered} />} total={recoveredVN} loading={loading} colorBg={'danger'} colorText={'light'}/>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}

CoronaGeneral.propTypes = {
    error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    loading: PropTypes.bool,
}

const mapStateToProps = createStructuredSelector({
    loading: makeSelectorLoading(type.CORONA),
    error: makeSelectorError(type.CORONA),
    coronaList: selector.makeSelectCorona()
});

export function mapDispatchToProps(dispatch) {
    return {
        onGetList: evt => dispatch(action.coronaAction.request()),
    };
}

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);

export default compose(
    withConnect,
    memo,
)(CoronaGeneral);

