import React from 'react';
import ProjectCard from './ProjectCard';
import { data } from './ProjectData';
import './Projects.scss';

export default function Projects() {
    return (
        <div id="projects" className="projects">
            <h4 className="head_title">Projects</h4>

            <div className="column_31">
                {data.map((item, index) => (
                    <ProjectCard key={index} item={item} />
                ))}
            </div>
        </div>
    );
}
