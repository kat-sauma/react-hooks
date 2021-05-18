import React, { useState } from 'react';
import { getQuote } from '../services/simpsonsApi';
import Load from '../components/quote/Load';
import Quote from '../components/quote/Quote';

const SimpsonsQuote = () => {
    const [quote, setQuote] = useState({});

    const handleClick = async () => {
        const newQuote = await getQuote();
        setQuote(newQuote);
    };

    return (
        <main>
            <Load onClick={handleClick} />
            <Quote 
            text={quote.text}
            image={quote.image}
            name={quote.name}
            />
        </main>
    );
};

export default SimpsonsQuote;