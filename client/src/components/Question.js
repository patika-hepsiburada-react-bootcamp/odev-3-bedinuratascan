import { useState } from 'react';
import { sendMessage } from '../socketApi';
import { useVote } from '../context/VoteContext'

const Question = () => {
    const [language, setLanguage] = useState('');
    const { setVote } = useVote();

    const onSubmitForm = (e) => {
        e.preventDefault();
        setVote((prevData) => ({ ...prevData, [language]: prevData[language] + 1 }));
        sendMessage('voted-language', language);
        setLanguage('');
    }

    const onValChange = (e) => {
        setLanguage(e.target.value);
    }

    return (
        <div>
            <p>Which programming language do you like?</p>
            <form onSubmit={onSubmitForm} className="form">
                <input type="radio" value="Javascript" checked={language === 'Javascript'} onChange={onValChange} /> Javascript
                <input type="radio" value="Python" checked={language === 'Python'} onChange={onValChange} /> Python
                <input type="radio" value="Ruby" checked={language === 'Ruby'} onChange={onValChange} /> Ruby
                <input type="radio" value="C" checked={language === 'C'} onChange={onValChange} /> C
                <input type="radio" value="Go" checked={language === 'Go'} onChange={onValChange} /> Go
                <input type="radio" value="Java" checked={language === 'Java'} onChange={onValChange} /> Java
                <button type="submit">Save</button>
            </form>

        </div>
    )
}

export default Question
