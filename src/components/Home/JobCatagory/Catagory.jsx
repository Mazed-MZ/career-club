import React from 'react';
import './Category.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator, faChartSimple, faCodeBranch, faSun } from '@fortawesome/free-solid-svg-icons';

export default function Catagory() {
    return (
        <div className='category-container'>
            <h1>Job Category List</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='category-carts'>
                <div className='category-items'>
                    <div className='category-content'>
                        <span>
                            <FontAwesomeIcon icon={faCalculator} size='lg' style={{ color: 'purple' }} />
                        </span>
                        <h3>Accounts & Finance</h3>
                        <p>30 Jobs Available</p>
                    </div>
                </div>
                <div className='category-items'>
                <div className='category-content'>
                        <span>
                            <FontAwesomeIcon icon={faSun} size='lg' style={{ color: 'purple' }} />
                        </span>
                        <h3>Creative Design</h3>
                        <p>100+ Jobs Available</p>
                    </div>
                </div>
                <div className='category-items'>
                <div className='category-content'>
                        <span>
                            <FontAwesomeIcon icon={faChartSimple} size='lg' style={{ color: 'purple' }} />
                        </span>
                        <h3>Marketing & Sales</h3>
                        <p>150 Jobs Available</p>
                    </div>
                </div>
                <div className='category-items'>
                <div className='category-content'>
                        <span>
                            <FontAwesomeIcon icon={faCodeBranch} size='lg' style={{ color: 'purple' }} />
                        </span>
                        <h3>Engineering Job</h3>
                        <p>224 Jobs Available</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
