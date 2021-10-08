import { useEffect } from 'react'
import Question from '../Question/Question'
import { connectSocket, subscribeToNewVotedPLanguage } from '../../socketApi';
import { useVote } from '../../context/VoteContext'
import Dashboard from '../Dashboard/Dashboard';

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
        <div className="app">
            <div className="qcontainer">
                <Question />
            </div>
            <div>
                <Dashboard />
            </div>
        </div>
    )
}

export default Container
