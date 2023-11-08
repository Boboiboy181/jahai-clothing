import { useNavigate } from 'react-router-dom';
import orderSuccessImage from '../../assets/order-success.png';
import Button, {
  BUTTON_TYPE_CLASSES,
} from '../../components/button/button.component';
import { Line, ThankYouContainer } from './thankyou.styles';

const ThankYou = () => {
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate('/');
  };

  return (
    <ThankYouContainer>
      <img src={orderSuccessImage} alt="" />
      <h1>Payment success!</h1>
      <p>Your goods is on the way</p>
      <div>
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>
          Check your order
        </Button>
        <Line></Line>
        <Button onClick={handleContinueShopping}>Continue shopping</Button>
      </div>
    </ThankYouContainer>
  );
};

export default ThankYou;
