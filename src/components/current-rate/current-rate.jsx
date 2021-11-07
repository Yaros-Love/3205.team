import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { LANGUAGES } from "../../const/const";

const CurrentRate = ({ currentLanguage, currentRate }) => {
  const [currentCharCode, setNewCharCode] = useState(currentLanguage.CharCode);
console.log(currentRate);
  return (
    <React.Fragment>
      <main>
        <h1>Current Rate</h1>
        <div>
          <label> Base currency
            <select 
              value={currentCharCode}
              onChange={(event) => {
                setNewCharCode(event.target.value);
              }}>
              <option >{LANGUAGES.ru.CharCode}</option>
              <option >{LANGUAGES.en.CharCode}</option>
            </select>
          </label>
          <label>
            {currentCharCode === 'RUB' ? 'USD' : 'RUB'}
            <input 
              type="text" 
              value={currentCharCode === 'RUB' ? (1/currentRate).toFixed(2) : currentRate.toFixed(2)} 
              disabled/>
          </label>
        </div>
        <button>
          <Link to="/">to converter</Link>
        </button>
      </main>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    currentRate: state.currentRate,
  }
};

export default connect(mapStateToProps, null)(CurrentRate);