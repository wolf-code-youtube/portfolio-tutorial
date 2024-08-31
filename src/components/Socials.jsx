import React from 'react';
import wolf from '../img/forest.jpeg';
import linkedin from '../img/socials/linkedin.png';
import x from '../img/socials/x.jpg';
import github from '../img/socials/github.png';
import leetcode from '../img/socials/leetcode.png';
import insta from '../img/socials/instagram.png';

const Socials = () => {
    return (
        <div className='pb-48' id="socials">
            <div className='font-thin text-6xl text-center pb-36'>
                Socials
            </div>
            <div class="central-image">
                <img src={wolf} height={100} width={100} alt="Central Image" />
            </div>
            <div clasName="revolving-elements">
                <div className="element" id="element1"><a href="https://www.x.com/" target="_blank"><img src={x} /></a></div>
                <div className="element" id="element2"><a href="https://www.x.com/" target="_blank"><img src={leetcode} /></a></div>
                <div className="element" id="element3"><a href="https://www.x.com/" target="_blank"><img src={linkedin} /></a></div>
                <div className="element" id="element4"><a href="https://www.x.com/" target="_blank"><img src={github} /></a></div>
                <div className="element" id="element5"><a href="https://www.x.com/" target="_blank"><img src={insta} /></a></div>
            </div>
        </div>
    );
}

export default Socials;
