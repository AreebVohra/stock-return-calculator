import React, { Component } from 'react'
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialPrice: 0,
      endingPrice: 0,
      dividend: 0,
      result: 0
    }
  }

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = parseFloat(event.target.value);
    if (isNaN(val)) {
      this.setState({ [nam]: 0 });
    } else {
      this.setState({ [nam]: val });
    }
  }

  componentDidUpdate = () => {
    let p0 = this.state.initialPrice.toFixed(2);
    let p1 = this.state.endingPrice.toFixed(2);
    let dv = this.state.dividend.toFixed(2);

    let final = ((parseFloat(p1) - parseFloat(p0)) + parseFloat(dv)) / parseFloat(p0);

    const re = final * 100;

    document.getElementById("result").innerHTML = re.toFixed(3) + '%';
  }

  render() {
    return (
      <div className="App">
        <h2>Total Stock Return Calculator</h2>
        <div className="table-1">
          <table>
            <tbody>
              <tr>
                <td>Initial Share Price (P<sub>0</sub>)</td>
                <td></td>
                <td><input type="text" name="initialPrice" placeholder={'0.00'} onBlur={this.myChangeHandler} /></td>
              </tr>
              <tr>
                <td>Ending Share Price (P<sub>1</sub>)</td>
                <td></td>
                <td><input type="text" name="endingPrice" placeholder={'0.00'} onBlur={this.myChangeHandler} /></td>
              </tr>
              <tr>
                <td>Dividend (D)</td>
                <td></td>
                <td><input type="text" name="dividend" placeholder={'0.00'} onBlur={this.myChangeHandler} /></td>
              </tr>
              <tr>
                <td></td>
                <td>=</td>
                <td><div style={{ backgroundColor: '#fff', color: '#000', padding: 5 }} id="result">0.000%</div></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="table-2">
          <table>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td>${this.state.endingPrice.toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
                <td>-</td>
                <td>${this.state.initialPrice.toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
                <td>+</td>
                <td>${this.state.dividend.toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
                <td></td>
              </tr>
              <tr>
                <td>=</td>
                <td colSpan="7"><hr color="#000" /></td>
              </tr>
              <tr>
                <td colSpan="3"></td>
                <td colSpan="3">${this.state.initialPrice.toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
                <td colSpan="2"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
