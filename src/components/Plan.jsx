import { Link } from "react-router-dom";
import "../styles/plan.css";
import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";

export const Plan = () => {
  const { handlePlanName, handlePlanPrice } = useContext(DataContext);

  return (
    <div className="mainBody">
      <div className="left">
        <div className="left-all-1">
          <div className="left-number">1</div>
          <div className="left-details">
            <div className="left-step">STEP 1</div>
            <div className="left-task">YOUR INFO</div>
          </div>
        </div>
        <div className="left-all">
          <div className="left-number-1">2</div>
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
            <div className="right-tag">Select Your Plan</div>
            <div>You have the option of monthly or yearly billing.</div>
          </div>
          <div className="right-middle">
            <div className="right-total">
              <div
                className="right-data"
                value="Arcade"
                onClick={() => {
                  handlePlanName("Arcade");
                  handlePlanPrice(9);
                  // console.log("Plan Name: ", planName);
                }}
              >
                <input type="radio" value="arcade" />
                <label>
                  <h2>Arcade</h2>
                  <p>$9/mo</p>
                </label>
              </div>
              <div
                className="right-data"
                onClick={() => {
                  handlePlanName("Advanced");
                  handlePlanPrice(12);
                  // console.log("Plan Name: ", planName);
                }}
              >
                <input type="radio" value="advanced" />
                <label>
                  <h2>Advanced</h2>
                  <p>$12/mo</p>
                </label>
              </div>
              <div
                className="right-data"
                onClick={() => {
                  handlePlanName("Pro");
                  handlePlanPrice(15);
                  // console.log("Plan Name: ", planName);
                }}
              >
                <input type="radio" value="pro" />
                <label>
                  <h2>Pro</h2>
                  <p>$15/mo</p>
                </label>
              </div>
            </div>
            <div className="switch-toggle">
              <input className="switch-toggle-checkbox" type="checkbox" />
              <label className="switch-toggle-label">
                <span value="Monthly">Monthly</span>
                <span value="Yearly">Yearly</span>
              </label>
            </div>
          </div>

          <div className="div-btn">
            <Link to={"/"}>
              <button className="btn-left">Go Back</button>
            </Link>
            <Link to={"/addons"}>
              <button className="btn-right">Next Step</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
