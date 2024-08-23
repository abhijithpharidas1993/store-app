import { useLocation } from 'react-router-dom';
import './TransactionStatus.css'

const TransationStatus = () => {
    const location = useLocation();
    const {item , trasactionId}= location.state;
  return (
    <div className='sucess-message'>Your purchase of {item.name} is sucessful. Your credit card is charged ${item.actual_price} with transaction id {trasactionId} </div>
  )
}

export default TransationStatus