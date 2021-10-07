import { createContext, useState, useContext } from 'react';

const VoteContext = createContext();

export const VoteProvider = ({ children }) => {
    const [vote, setVote] = useState({ Javascript: 0, Python: 0, Ruby: 0, C: 0, Go: 0, Java: 0 });

    const values = {
        vote,
        setVote,
    };

    return <VoteContext.Provider value={values}>{children}</VoteContext.Provider>;
};

export const useVote = () => useContext(VoteContext);
