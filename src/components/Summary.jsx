import { Link } from "react-router-dom";
import "../styles/summary.css";
import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";

export const Summary = () => {
  const { planName, planPrice, onlineService, largerStorage, customProfile } =
    useContext(DataContext);

  const totalPrice = planPrice + onlineService + largerStorage + customProfile;

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
          <div className="left-number-1">4</div>
          <div className="left-details">
            <div className="left-step">STEP 4</div>
            <div className="left-task">SUMMARY</div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="rightBody">
          <div>
            <div className="right-tag">Finishing up</div>
            <div>Double check everything looks OK before confirming.</div>
          </div>
          <div className="right-middle">
            <div className="right-middle-top">
              <div className="right-middle-top-1">
                <div className="middle-data-name">{planName} (Monthly)</div>
                <div className="middle-data-price middle-data-name">
                  ${planPrice}/mo
                </div>
                <div className="middle-data-name-other">Online service</div>
                <div className="middle-data-price middle-data-name-other">
                  +${onlineService}/mo
                </div>
                <div className="middle-data-name-other">Larger storage</div>
                <div className="middle-data-price middle-data-name-other">
                  +${largerStorage}/mo
                </div>
                <div className="middle-data-name-other">
                  Customizable Profile
                </div>
                <div className="middle-data-price middle-data-name-other">
                  +${customProfile}/mo
                </div>
              </div>
            </div>
            <div className="right-middle-bottom">
              <div className="right-middle-top-1">
                <div>Total (per month)</div>
                <div className="middle-data-price middle-data-price-total">
                  ${totalPrice}/mo
                </div>
              </div>
            </div>
          </div>
          <div className="div-btn">
            <Link to={"/addons"}>
              <button className="btn-left">Go Back</button>
            </Link>
            <Link to={"/thanks"}>
              <button className="btn-right">Next Step</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
