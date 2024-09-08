import "../styles/thank.css";

export const Thanks = () => {
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
          <div className="right-middle">
            <div className="right-tag">Thank you!</div>
            <div className="right-tag-detail">
              Thanks for confirming your subscription! We hope you have fun
              using our platform. If you ever need support, please feel free to
              email us at support@loremgaming.com.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
