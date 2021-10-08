import { createContext, useState, useContext, useEffect } from 'react';

const VoteContext = createContext();

const INITVOTES = { Javascript: 0, Python: 0, Ruby: 0, C: 0, Go: 0, Java: 0 }

export const VoteProvider = ({ children }) => {
    const [vote, setVote] = useState(JSON.parse(localStorage.getItem('votes')) || INITVOTES);

    useEffect(() => {
        localStorage.setItem('votes', JSON.stringify(vote));
    }, [vote])

    const values = {
        vote,
        setVote,
    };

    return <VoteContext.Provider value={values}>{children}</VoteContext.Provider>;
};

export const useVote = () => useContext(VoteContext);
