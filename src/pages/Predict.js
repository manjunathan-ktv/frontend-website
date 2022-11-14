import React from 'react';
import './Admissions.css';
import './courses.css';
import i1 from './img4.png'
import './PrepGuide.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
function Predict() {
    return (
        <div>
            <div className="topic">
                <img src={i1} width="18%" height="18%" alt="fireSpot" />
                <h1>Harvard University</h1>
            </div>
            <div className="ad1"><h3>Term-Time Research<br></br>__________________</h3></div>
            <div className="ad2">During the academic year, you can conduct research for credit, as determined by the director of undergraduate study in each department.
                Students can also receive funding from one of many sources. Additionally, many faculty members across academic departments hire students directly to serve as research assistants.
            </div>
            <div className="ad1"><h3>Harvard College Research Program<br></br>________________________________</h3></div>
            <div className="ad2">The Harvard College Research Program (HCRP) provides term-time and summer grants for students conducting independent research in collaboration with a faculty mentor.
            </div>
            <div className="ad1"><h3>Faculty Aide Program<br></br>____________________</h3></div>
            <div className="ad2">The Faculty Aide Program (FAP) provides half of a student's total wages when working for an approved faculty member as a research assistant.
            </div>
            <div className="ad1"><h3>Mellon Mays Undergraduate Fellowship Program<br></br>_____________________________________________</h3></div>
            <div className="ad2">The Mellon Mays Undergraduate Fellowship Program (MMUF) provides a term-time stipend, as well as the option for summer research funds, to a group of approximately 20 juniors and seniors, selected in the spring of their sophomore years.
            </div>
            <div className="ad3">
                <div className="ad1"><h3>Faculty Engagement<br></br>____________________</h3></div>
                <div className="ad4">
                    <div><h2>130+</h2>
                        <h5>Freshman Seminars</h5>
                    </div>
                    <div><h2>400+</h2>
                        <h5>First-year Advisers</h5>
                    </div>
                    <div><h2>7:1</h2>
                        <h5>Student to faculty ratio</h5>
                    </div>
                    <div><h2>12</h2>
                        <h5>Median course size</h5>
                    </div>
                </div>
            </div>
            <div className="si">
                <div className="singleCol social-media-icons-white d-flex justify-content-center">
                    <a href="https://www.facebook.com/Harvard/">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="https://twitter.com/Harvard?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="https://www.instagram.com/harvard/?hl=en">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://www.linkedin.com/school/harvard-university/">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Predict;