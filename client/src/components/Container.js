import { useEffect } from 'react'
import Header from './Header'
import Question from './Question'
import { connectSocket, subscribeToNewVotedPLanguage } from '../socketApi';
import { useVote } from '../context/VoteContext'
import Dashboard from './Dashboard';

const Container = () => {
    const { setVote } = useVote();

    useEffect(() => {
        connectSocket();

        subscribeToNewVotedPLanguage((language) => {
            console.log(language);
            setVote((prevData) => ({ ...prevData, [language]: prevData[language] + 1 }));
        });
    }, [setVote]);

    return (
        <div>
            <Header />
            <Question />
            <Dashboard />
        </div>
    )
}

export default Container
