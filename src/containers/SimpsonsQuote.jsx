import React, { useState } from 'react';
import { getQuote } from '../services/simpsonsApi';
import Load from '../components/quote/Load';
import Quote from '../components/quote/Quote';

const SimpsonsQuote = () => {
    const [quote, setQuote] = useState({});

    const handleClick = async () => {
        const quote = await getQuote();
        setQuote(quote);
    };

    return (
        <main>
            <Load onClick={handleClick} />
            <Quote { ...quote } />
        </main>
    );
};

export default SimpsonsQuote;