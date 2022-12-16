import {Component} from 'react'
import './index.css'

class DenominationItem extends Component {
  render() {
    const {amount, onWithdraw} = this.props
    const withdrawAmount = () => {
      onWithdraw(amount)
    }
    return (
      <li className="amount">
        <button className="button" type="button" onClick={withdrawAmount}>
          {amount}
        </button>
      </li>
    )
  }
}
export default DenominationItem
