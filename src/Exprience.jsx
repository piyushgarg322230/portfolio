import React from 'react';
import { userData } from './userData';

const Exprience = () => {
    return (
        <section id="experience" >

            <div>
                <h2 className="section-title" data-animation="fade-in">Where I've Worked</h2>
                <div className="experience-timeline">
                    {userData.experienceData.map((job) => (
                        <div key={job.id} className="timeline-item" data-animation={job.animation}>
                            <div className="timeline-content">
                                <h3>{job.title} <span>@ {job.company}</span></h3>
                                <p className="timeline-date">{job.date}</p>
                                <ul>
                                    {job.tasks.map((task, index) => (
                                        <li key={index}>{task}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}

export default Exprience;