import { useState } from 'react';
import { sendMessage } from '../../socketApi';
import { useVote } from '../../context/VoteContext'
import './Question.css'

const Question = () => {
    const { setVote, vote } = useVote();
    const [language, setLanguage] = useState('');
    const totalVote = vote.Javascript + vote.Python + vote.Ruby + vote.C + vote.Go + vote.Java;

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
            <p className="text">Which programming language do you like?</p>
            <form onSubmit={onSubmitForm} className="form">
                <label class="control control-radio">
                    <input type="radio" value="Javascript" checked={language === 'Javascript'} onChange={onValChange} /> Javascript
                    <div class="control_indicator"></div>
                </label>
                <label class="control control-radio">
                    <input type="radio" value="Python" checked={language === 'Python'} onChange={onValChange} /> Python
                    <div class="control_indicator"></div>
                </label>
                <label class="control control-radio">
                    <input type="radio" value="Ruby" checked={language === 'Ruby'} onChange={onValChange} /> Ruby
                    <div class="control_indicator"></div>
                </label>
                <label class="control control-radio">
                    <input type="radio" value="C" checked={language === 'C'} onChange={onValChange} /> C
                    <div class="control_indicator"></div>
                </label>
                <label class="control control-radio">
                    <input type="radio" value="Go" checked={language === 'Go'} onChange={onValChange} /> Go
                    <div class="control_indicator"></div>
                </label>
                <label class="control control-radio">
                    <input type="radio" value="Java" checked={language === 'Java'} onChange={onValChange} /> Java
                    <div class="control_indicator"></div>
                </label>
                <button className="button" type="submit">Vote</button>
            </form>
            <p className="text">Total Votes : {totalVote}</p>
        </div >
    )
}

export default Question
