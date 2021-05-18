import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ name, text, image }) => (
    <figure>
        <img src={image} alt={name} />
        <figcaption>{text}</figcaption>
    </figure>
);

Quote.propTypes = {
    name: PropTypes.string,
    text: PropTypes.string,
    image: PropTypes.string
};

export default Quote;
