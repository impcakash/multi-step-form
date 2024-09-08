import "../styles/info.css";
import { Link } from "react-router-dom";

export const Info = () => {
  return (
    <div className="mainBody">
      <div className="left">
        <div className="left-all-1">
          <div className="left-number-1">1</div>
          <div className="left-details">
            <div className="left-step">STEP 1</div>
            <div className="left-task">YOUR INFO</div>
          </div>
        </div>
        <div className="left-all">
          <div className="left-number">2</div>
          <div className="left-details">
            <div className="left-step">STEP 2</div>
            <div className="left-task">SELECT PLAN</div>
          </div>
        </div>
        <div className="left-all">
          <div className="left-number">3</div>
          <div className="left-details">
            <div className="left-step">STEP 3</div>
            <div className="left-task">ADD-ONS</div>
          </div>
        </div>
        <div className="left-all">
          <div className="left-number">4</div>
          <div className="left-details">
            <div className="left-step">STEP 4</div>
            <div className="left-task">SUMMARY</div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="rightBody">
          <div>
            <div className="right-tag">Personal Info</div>
            <div>
              Please provides your name, email address, and phone number.
            </div>
          </div>
          <div>
            <form>
              <div className="form-div">
                <div className="form-label">Name</div>
                <input type="text" placeholder="e.g.Stephen King" />
              </div>
              <div className="form-div">
                <div className="form-label">Email Address</div>
                <input type="email" placeholder="e.g.stephenking@lorem.com" />
              </div>
              <div className="form-div">
                <div className="form-label">Phone Number</div>
                <input type="text" placeholder="e.g. +1 234 567 890" />
              </div>
            </form>
          </div>
          <div className="div-btn">
            <div className="div-btn-in">
              <Link to={"/plan"}>
                <button>Next Step</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
