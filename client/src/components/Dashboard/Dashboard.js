import React from 'react'
import { useVote } from '../../context/VoteContext'
import { Pie } from 'react-chartjs-2';

const Dashboard = () => {
    const { vote } = useVote();

    const data = {
        labels: ['Javascript', 'Python', 'Ruby', 'C', 'Go', 'Java'],
        datasets: [
            {
                label: '# of Votes',
                data: [vote.Javascript, vote.Python, vote.Ruby, vote.C, vote.Go, vote.Java],
                backgroundColor: [
                    'rgba(224, 36, 1, 1)',
                    'rgba(247, 136, 18, 1)',
                    'rgba(0, 161, 157, 1)',
                    'rgba(255, 119, 119, 1)',
                    'rgba(245, 198, 165, 1)',
                    'rgba(205, 242, 202, 1)',
                ],
                borderColor: [
                    'rgba(224, 36, 1,1)',
                    'rgba(247, 136, 18, 1)',
                    'rgba(0, 161, 157, 1)',
                    'rgba(255, 119, 119, 1)',
                    'rgba(245, 198, 165, 1)',
                    'rgba(205, 242, 202, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };


    return (
        <div className="dashboard">
            <Pie data={data} />
        </div>
    )
}

export default Dashboard
