import React from 'react';
import PropTypes from 'prop-types';

const Load = ({ onClick }) => (
    <section className='button' aria-label='button' >
        <h2>What'd they say?</h2>
        <button onClick={onClick}>Uhhhh...</button>
    </section>
);

Load.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default Load;
