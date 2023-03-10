import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './Home.scss';
import Sidebar from './Sidebar/Sidebar';

export default function Home() {
    const [overly, setOverly] = useState(true);

    const handleOverly = () => {
        setOverly(false);
    };

    const handleSidebar = () => {
        setOverly(!overly);
    };

    console.log(overly);

    return (
        <div className="home container">
            {overly ? <div onClick={handleOverly} className="overly_container"></div> : ''}
            <div
                style={{
                    transition: '0.5s all',
                }}
                className={`left ${overly && 'overly'}`}
            >
                <div
                    style={{
                        left: `${overly ? '250px' : '20px'} `,
                        transition: '0.6s all',
                        transform: `${overly ? 'rotate(90deg)' : 'rotate(-90deg)'} `,
                    }}
                    onClick={handleSidebar}
                    className="menu_icon"
                >
                    <i class="fa-solid fa-circle-chevron-down"></i>
                </div>
                <Sidebar />
            </div>
            <div className="right">
                <Outlet />
            </div>
        </div>
    );
}
