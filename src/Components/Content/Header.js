import React from 'react';
import './Header.scss';

export default function Header() {
    return (
        <div className="header">
            <div className="slider">
                <h4>
                    Discover my Amazing <br /> work space!
                </h4>
                <p className="title">I am a Web Developer</p>

                <a href="#projects" className="explore_btn">
                    Explore Now
                </a>
            </div>
        </div>
    );
}
