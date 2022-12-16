import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  }

  onWithdraw = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    return (
      <div className="container">
        <div className="mainCon">
          <div className="nameCon">
            <h1 className="nameIcon">S</h1>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="balanceCon">
            <p className="balanceHeading">Your Balance</p>
            <div>
              <p className="balance">{balance}</p>
              <p className="rupees">in Rupees</p>
            </div>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="choose">CHOOSE SUM (IN RUPEES)</p>
          <ul className="listCon">
            {denominationsList.map(each => (
              <DenominationItem
                amount={each.value}
                key={each.id}
                onWithdraw={this.onWithdraw}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
