import React from 'react';
import './ReviewCard.scss';

export default function ReviewCard({ item }) {
    return (
        <div className="review_card">
            <div className="top">
                <div className="author_image">
                    <img src={item.img} alt="" />
                </div>
                <h5 className="title">{item.name}</h5>
                <p className="sub_title"></p>
            </div>
            <p className="details">{item.comment}</p>
            <div className="rating">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </div>
        </div>
    );
}
