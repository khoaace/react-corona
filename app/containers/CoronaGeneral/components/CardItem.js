import React from 'react';
import PropTypes from 'prop-types';
import { Card, Spinner } from 'react-bootstrap';
import { formatCurrency } from 'utils/formatNumber';

const CardItem = ({
    title = '',
    total = 0,
    loading = false,
    colorBg = 'info',
    colorText = 'light'
}) => {
    return (
        <Card bg={colorBg} text={colorText}>
            <Card.Header>{title}</Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    {loading ? <div className="d-flex justify-content-center">
                        <Spinner animation="border" variant="secondary" />
                    </div> : <p>
                            {formatCurrency(parseInt(total))}
                        </p>}

                </blockquote>
            </Card.Body>
        </Card>
    );
}
CardItem.propTypes = {
    loading: PropTypes.bool,
    title: PropTypes.string,
    total: PropTypes.number
}

export default CardItem;