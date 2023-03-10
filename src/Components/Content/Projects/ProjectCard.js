import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.scss';

export default function ProjectCard({ item }) {
    return (
        <div className="project_card">
            {/* <div className="cover-div"></div> */}
            <div className="pro_image">
                <img src={item.imageUrl} alt="" />
            </div>
            <div className="details">
                <h4 className="title">{item.title}</h4>
                <div className="desc">{item.desc}</div>
                <Link to={`/${item.id}`} className="live_link ">
                    See More <i class="fa-solid fa-angle-right"></i>
                </Link>
            </div>
        </div>
    );
}
