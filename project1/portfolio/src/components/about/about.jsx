import "./about.css"
import eng from '../../img/noodles.jpg'
const About = () => {
    return(
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={eng} alt="" className="a-image"/>
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                </p>
                <p className="a-desc">quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div className="a-award">
                    <img src={eng} alt="" className="a-award-image"/>
                    <div className="a-award-texts">
                    <h4 className="a-award-title">construction manager of the semester</h4>
                    <p className="a-award-desc">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                    dolore eu fugiat nulla pariatur.
                    </p>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default About