import React from 'react'
import { useVote } from '../context/VoteContext'

const Dashboard = () => {

    const { vote } = useVote();

    return (
        <div>
           {JSON.stringify(vote)}
        </div>
    )
}

export default Dashboard
