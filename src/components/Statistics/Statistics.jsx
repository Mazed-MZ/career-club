import React from 'react';
import './Statistics.css';
import { PieChart } from '@mui/x-charts/PieChart';
import { useLoaderData } from 'react-router';
import State from './State';

export default function Statistics() {
    const storedJob = useLoaderData([]);
    console.log(storedJob);
    return (
        <div className='state-container'>
            <h2>Here will be showing Job candidates statistics</h2>
            <div className='state-chart'>
                <PieChart
                    series={[
                        {
                            data: [
                                { id: 0, value: 4, label: 'Google' },
                                { id: 1, value: 7, label: 'Tesla' },
                                { id: 3, value: 3, label: 'Netflix' },
                                { id: 4, value: 4, label: 'Amazon' }
                              ],
                            highlightScope: { faded: 'global', highlighted: 'item' },
                            faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                        },
                    ]}
                    height={500}
                />
            </div>
        </div>
    )
}
