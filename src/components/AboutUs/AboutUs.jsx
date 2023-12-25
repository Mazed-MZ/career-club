import React from 'react';
import './AboutUs.css';
import founder from '../../../public/images/user.png';

export default function AboutUs() {
    return (
        <div className='about-container'>
            <div className='about-header'>
                <h1 style={{ paddingTop: 200, textAlign: 'center' }}>About Us</h1>
                <div className='about-header-info'>
                    <div className='about-header-logo'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWNASt50W1KrN707n1pipa2eS-j4vWM7Vf8A&usqp=CAU" alt="" />
                    </div>
                    <div className='about-description'>
                        <h1>
                            <span style={{ color: '#7E90FE' }}>At Career Club, our mission is to help our members find <br /> a role that is meaningful to them</span></h1>
                        <p>By taking a more empathetic approach, we offer personalized coaching, weekly community meetings, and optional counseling.

                            Our job search approach is based on sales and marketing principles that focus on nailing one’s personal brand, effective networking, and crushing it in interviews.

                            By supporting  people during a trying time and giving them a proven process to follow that really works, the result is finding fulfilling work in less time.</p>
                    </div>
                </div>
            </div>
            <div className='about-featurs'>
                <h1>A more human-centric approach</h1>
                <div className='about-feature-info'>
                    <div className='about-feature-description'>
                        <div className='about-feature-details'>
                            <span style={{ color: 'violet' }}>ENCOURAGEMENT</span>
                            <p>- literally means (to give heart to) so our hope is that the tools we offer genuinely give you the heart to know that you will land in a new, fulfilling role.</p>
                        </div>
                        <div className='about-feature-details'>
                            <span style={{ color: 'violet' }}>EMPOWERMENT</span>
                            <p>- is sharing a proven process that anybody can do to help them improve the effectiveness of their job search activities. Our online course, Making Your Own Weather™, is based on my personal job hunting experience as well as that of hundreds of other job seekers.</p>
                        </div>
                        <div className='about-feature-details'>
                            <span style={{ color: 'violet' }}>ENABLEMENT</span>
                            <p>- is creating tools that accelerate the job search process. In the case of Career Club, this has taken the form of our Opportunity & Networking Enablement platform, Career Club One™.</p>
                        </div>
                    </div>
                    <div className='about-feature-logo'>
                        <img src="https://www.setuppost.com/wp-content/uploads/2022/09/top-10-job-interview-tips-jobseekers.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className='about-founder'>
                <div className='about-founder-details'>
                    <div className='about-founder-image'>
                        <img src={founder} alt="" />
                    </div>
                    <div className='about-founder-info'>
                        <h1 style={{ color: 'violet' }}>Meet Bob Goodwin, Founder of Career Club</h1>
                        <p>Like you, I have faced the unwanted circumstance of having to find a new job. I discovered that many of the sales and marketing principles I had learned in my career directly applied to selling myself to my future employer. Beyond that though, I also observed that a job search is an emotionally draining process for many given the high level of rejection, the hurt they may be feeling from having lost a job, the separation from colleagues, the profound brokenness of the job search process (for candidates and employers) and the financial stress a loss of income causes. As a result, Career Club was founded to help people who are in job transition learn how to GET A CAREER THAT MATTERS.</p>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div>

                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    )
}
