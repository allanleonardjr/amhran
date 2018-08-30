import React from 'react';
import './Submissions.css';

const Submissions = () => {
    return(
    <div>
        <form className="mainy pure-form pure-form-stacked" method="POST" action="https://formspree.io/info@amhran.ie">
            <input className="formElement" name="track" placeholder="Song name and artist" type="text"/>
            <input className="formElement" name="link" placeholder="Link (Soundcloud/Bandcamp preferred)" type="text"/>
            <input className="formElement" name="artistSocial" placeholder="Artist's social media name" type="text"/>
            <input className="formElement" name="email" placeholder="Your email" type="email"/>
            <textarea className="formElement" name="message" placeholder="Extra details/requests"></textarea>
            <button className="formElement pure-button pure-button-primary" type="submit">Send</button>
        </form>
    </div>
);
}

export default Submissions;