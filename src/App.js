import React, { Component } from 'react'
import './stock-return-calc-app.css'

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

    document.getElementById(event.target.name).value = val.toFixed(2);
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
      <div className="stock-return-calc-app">
        <div className="table-1">
          <table>
            <tbody>
              <tr>
                <td className="stock-return-calc-td">Initial Share Price (P<sub>0</sub>)</td>
                <td className="stock-return-calc-td"></td>
                <td className="stock-return-calc-td"><input className="stock-return-calc-input" type="text" name="initialPrice" id="initialPrice" placeholder={'0.00'} onBlur={this.myChangeHandler} /></td>
              </tr>
              <tr>
                <td className="stock-return-calc-td">Ending Share Price (P<sub>1</sub>)</td>
                <td className="stock-return-calc-td"></td>
                <td className="stock-return-calc-td"><input className="stock-return-calc-input" type="text" name="endingPrice" id="endingPrice" placeholder={'0.00'} onBlur={this.myChangeHandler} /></td>
              </tr>
              <tr>
                <td className="stock-return-calc-td">Dividend (D)</td>
                <td className="stock-return-calc-td"></td>
                <td className="stock-return-calc-td"><input className="stock-return-calc-input" type="text" name="dividend" id="dividend" placeholder={'0.00'} onBlur={this.myChangeHandler} /></td>
              </tr>
              <tr>
                <td className="stock-return-calc-td"></td>
                <td className="stock-return-calc-td">=</td>
                <td className="stock-return-calc-td"><div style={{ backgroundColor: '#fff', color: '#000', padding: 5 }} id="result">0.000%</div></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="table-2">
          <table>
            <tbody>
              <tr>
                <td className="stock-return-calc-td"></td>
                <td className="stock-return-calc-td"></td>
                <td className="stock-return-calc-td">${this.state.endingPrice.toFixed(2)}</td>
                <td className="stock-return-calc-td">-</td>
                <td className="stock-return-calc-td">${this.state.initialPrice.toFixed(2)}</td>
                <td className="stock-return-calc-td">+</td>
                <td className="stock-return-calc-td">${this.state.dividend.toFixed(2)}</td>
                <td className="stock-return-calc-td"></td>
              </tr>
              <tr>
                <td className="stock-return-calc-td">=</td>
                <td className="stock-return-calc-td" colSpan="7"><hr color="#000" /></td>
              </tr>
              <tr>
                <td className="stock-return-calc-td" colSpan="3"></td>
                <td className="stock-return-calc-td" colSpan="3">${this.state.initialPrice.toFixed(2)}</td>
                <td className="stock-return-calc-td" colSpan="2"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
