import { useState } from "react";
import { calculateInvestmentResults, formatter } from "./util/investment"




function App() {

  const [tableValue, setTableValue] = useState([]);

  function handleChange() {
    const value = {initialInvestment:12300, 
      annualInvestment:15000, 
      expectedReturn:500, 
      duration:100};
      setTableValue(calculateInvestmentResults(value)) 
    console.log(tableValue);
  }

  return (
    <>
      <div id="main-container">
        <div id="header">
          <img src="investment-calculator-logo.png" />
          <h1>React Investment Calculator</h1>
        </div>
        <div id="user-input">
          <div className="input-group">
            <div>
              <label>Initial Investment</label>
              <input type="text" onChange={handleChange}/>
            </div>
            <div>
              <label>Annual Investment</label>
              <input type="text" onChange={handleChange} />
            </div>
          </div>
          <div className="input-group">
            <div>
              <label>Expected Return</label>
              <input type="text" onChange={handleChange} />
            </div>
            <div>
              <label>Duration</label>
              <input type="text" onChange={handleChange} />
            </div>
          </div>
        </div>
        <div id="result">
          <table>
            <thead>
              <tr>
                <th scope="col">Year</th>
                <th scope="col">Investment Value</th>
                <th scope="col">Interest(Year)</th>
                <th scope="col">Total Interest</th>
                <th scope="col">Invested Capital</th>
              </tr>
            </thead>
            <tbody>              
              {tableValue.map((row)=><tr>
                <td>{row["year"]}</td>
                <td>{row["interest"]}</td>
                <td>{row["annualInvestment"]}</td>
                <td>{row["valueEndOfYear"]}</td>
                <td>{row["valueEndOfYear"]}</td>                         
                </tr> )}
            </tbody>
          </table>
        </div>
      </div>      
    </>
  );
}

export default App
