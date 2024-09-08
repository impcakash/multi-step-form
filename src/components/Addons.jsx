import "../styles/addons.css";
import { Link } from "react-router-dom";
import { DataContext } from "../contexts/DataContext";
import { useContext } from "react";

export const Addons = () => {
  const { handleOnlineService, handleLargerStorage, handleCustomProfile } =
    useContext(DataContext);

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
          <div className="left-number-1">3</div>
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
            <div className="right-tag">Pick add-ons</div>
            <div>Add ons help enhance your gaming experience.</div>
          </div>
          <div className="right-middle">
            <div className="add-ons">
              <div
                className="addon"
                onClick={() => {
                  handleOnlineService(1);
                  // console.log("Online service selected");
                }}
              >
                <input type="checkbox" name="addon" value="online-service" />
                <label>
                  <div className="info">
                    <h2>Online service</h2>
                    <p>Access to multiplayer games</p>
                  </div>
                  <div className="price">+$1/mo</div>
                </label>
              </div>

              <div
                className="addon"
                onClick={() => {
                  handleLargerStorage(2);
                  // console.log("Larger Storage selected");
                }}
              >
                <input type="checkbox" name="addon" value="larger-storage" />
                <label>
                  <div className="info">
                    <h2>Larger storage</h2>
                    <p>Extra 1TB of cloud save</p>
                  </div>
                  <div className="price">+$2/mo</div>
                </label>
              </div>

              <div
                className="addon"
                onClick={() => {
                  handleCustomProfile(2);
                  // console.log("Custom Profile selected");
                }}
              >
                <input
                  type="checkbox"
                  name="addon"
                  value="customizable-profile"
                />
                <label>
                  <div className="info">
                    <h2>Customizable Profile</h2>
                    <p>Custom theme on your profile</p>
                  </div>
                  <div className="price">+$2/mo</div>
                </label>
              </div>
            </div>
          </div>
          <div className="div-btn">
            <Link to={"/plan"}>
              <button className="btn-left">Go Back</button>
            </Link>
            <Link to={"/summary"}>
              <button className="btn-right">Next Step</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
