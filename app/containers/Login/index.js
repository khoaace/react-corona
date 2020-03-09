/*
 * Login Page
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
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
// UI
import { Container, Row, Col, Spinner, Button, Form } from 'react-bootstrap';

export function LoginPage({
    loading = false,
    error = false,
    onLogin = () => { },
}) {
    useInjectReducer({ key: type.key, reducer: reducer });
    useInjectSaga({ key: type.key, saga: operation.default });
    
    const LoginSchema = yup.object().shape({
        username: yup.string().required('Username không được để trống'),
        password: yup.string().required('Mật khẩu không được để trống').min(4, 'Tối thiểu 4 kí tự'),
    });
    const { register, handleSubmit, errors, setValue, setError } = useForm({
        validationSchema: LoginSchema
    });
    const onSubmit = (params) => {
        onLogin(params);
    };
    
    return (
        <div>
            <Helmet>
                <title>Login</title>
                <meta
                    name="description"
                    content="Login page"
                />
            </Helmet>
            <Container>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" name="username" ref={register} />
                        {errors.username && (
                            <Form.Text className="text-danger">
                                {errors.username.message}
                            </Form.Text>
                        )}
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" ref={register} />
                        {errors.password && (
                            <Form.Text className="text-danger">
                                {errors.password.message}
                            </Form.Text>
                        )}
                    </Form.Group>
                    {error && (
                        <p className="text-danger">
                            {error?.message}
                        </p>
                    )}
                    <Button variant="primary" type="submit">
                        {loading ? (
                            <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            />) : "Login"}
                    </Button>
                </Form>
            </Container>
        </div>
    );
}

LoginPage.propTypes = {
    error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    loading: PropTypes.bool,
    onLogin: PropTypes.func
}

const mapStateToProps = createStructuredSelector({
    loading: makeSelectorLoading(type.LOGIN),
    error: makeSelectorError(type.LOGIN),
});

export function mapDispatchToProps(dispatch) {
    return {
        onLogin: params => dispatch(action.loginAction.request(params)),
    };
}

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);

export default compose(
    withConnect,
    memo,
)(LoginPage);

