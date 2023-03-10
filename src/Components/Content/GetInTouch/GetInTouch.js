import React, { useRef } from 'react';
import './GetInTouch.scss';
import emailjs from '@emailjs/browser';

export default function GetInTouch() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_2v9ofuj', 'template_bewvdoq', form.current, 'G06tkdxUkos9t_Qo5')
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <div id="contact" className="get_in_touch">
            <h4 className="head_title">Get In Touch</h4>

            <form ref={form} onSubmit={sendEmail} className="contact_me">
                <div className="input">
                    <div className="icon">
                        <i className="fa-solid fa-user"></i>
                    </div>
                    <input type="text" name="name" placeholder="Enter you Name..." />
                </div>
                <div className="input">
                    <div className="icon">
                        <i class="fa-solid fa-at"></i>
                    </div>
                    <input type="text" name="email" placeholder="Enter you Email..." />
                </div>
                <div className="input textarea">
                    <div className="icon">
                        <i class="fa-regular fa-envelope"></i>
                    </div>
                    <textarea name="message" id="" placeholder="Write you Message"></textarea>
                </div>

                <button type="submit" className="send_btn">
                    send message
                </button>
            </form>
        </div>
    );
}
