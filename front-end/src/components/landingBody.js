import React, { Component } from "react";
import "../stylesheets/landingBody.css";
import LandingImg from "../media/LandingImg.svg";
import Landing1 from "../media/Landing1.svg";
import Landing2 from "../media/Landing2.svg";
import Landing3 from "../media/Landing3.svg";
import { Link } from "react-router-dom";

class LandingBody extends Component {
  state = {};
  render() {
    return (
      <div className="LBMainDiv">
        <div className="LBDiv1">
          <div className="LBDiv1Description">
            <div className="LBDiv1Head">
              One Stop for <br />
              Global Academic Activites
            </div>
            <div className="LBDiv1Body">
              Portal which enables the students, faculty, and researchers to
              access information and prepare well in advance and participate
              effectively.
            </div>
            <div className="LBDiv1Button">
              <Link to="/signup">Get Started</Link>
            </div>
          </div>
          <div className="LBDiv1Img">
            <img src={LandingImg} alt="img" />
          </div>
        </div>
        <div className="LBDiv2">
          <div className="LBDiv21">
            <div className="LBDiv21Head">Create Opportunities</div>
            <div className="LBDiv21Body">Create Wonderful Opportunities</div>
            <div className="LBDiv21Button">
              <Link to="/">Create</Link>
            </div>
          </div>
          <div className="LBDiv22">
            <div className="LBDiv22Head">Explore Possibilities</div>
            <div className="LBDiv22Body">
              Explore possibilities like never before.
            </div>
            <div className="LBDiv22Button">
              <Link to="/">Explore</Link>
            </div>
          </div>
        </div>
        <div className="LBDiv3">
          <div className="LBDivHead">
            <span>Unlock the full power of Xplore</span>
          </div>
          <div className="LBMoveDiv31">
            <div className="LBDiv31">
              <div className="LBDiv311">
                <div className="LBDiv311Head">
                  Build Engagement like never before
                </div>
                <div className="LBDiv311Body">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical
                </div>
              </div>
              <div className="LBDiv312">
                <img src={Landing1} alt="img" />
              </div>
            </div>
          </div>
          <div className="LBMoveDiv32">
            <div className="LBDiv32">
              <div className="LBDiv321">
                <div className="LBDiv321Head">
                  Collaborate with your team to achieve success
                </div>
                <div className="LBDiv321Body">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical
                </div>
              </div>
              <div className="LBDiv322">
                <img src={Landing2} alt="img" />
              </div>
            </div>
          </div>
          <div className="LBMoveDiv33">
            <div className="LBDiv33">
              <div className="LBDiv331">
                <div className="LBDiv331Head">
                  Go global with your presentations
                </div>
                <div className="LBDiv331Body">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical
                </div>
              </div>
              <div className="LBDiv332">
                <img src={Landing3} alt="img" />
              </div>
            </div>
          </div>
          <div className="LBDivEnd">
            <span>
              Expand your network by participating in workshops, seminars and
              much more.
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingBody;
