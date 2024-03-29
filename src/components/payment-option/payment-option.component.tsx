import { useState } from 'react';
import Button from '../button/button.component';
import {
  OptionContainer,
  OptionsList,
  OrderSummary,
  PaymentOptionContainer,
  PaymentOptionFooter,
  VoucherContainer,
} from './payment-option.styles';
import Option from '../option/option.component';
import { setCartItems } from '../../store/cart/cart.action';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectCartTotal } from '../../store/cart/cart.selector';
import vnpay from '../../assets/vnpay.png';
import momo from '../../assets/momo.png';
import zalo from '../../assets/zalopay.png';

const options = [
  {
    id: '1',
    name: 'Visa/Mastercard',
    isChecked: false,
  },
  {
    id: '2',
    name: 'VNPAY',
    isChecked: false,
    img: vnpay,
  },
  {
    id: '3',
    name: 'ZALOPAY',
    isChecked: false,
    img: zalo,
  },
  {
    id: '4',
    name: 'MOMO',
    isChecked: false,
    img: momo,
  },
  {
    id: '5',
    name: 'Cash on delivery',
    isChecked: false,
  },
];

const PaymentOption = ({
  handlePayWithCardOpen,
}: {
  handlePayWithCardOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [optionsList, setOptionsList] = useState(options);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartTotal = useSelector(selectCartTotal);

  const handleOnCheck = (id: string) => {
    const newUpdatedOptions = options.map((option) => {
      return option.id === id
        ? { ...option, isChecked: !option.isChecked }
        : option;
    });
    setOptionsList([...newUpdatedOptions]);
  };

  const paymentHandlerMoMo = async () => {
    const result = await fetch('/.netlify/functions/momo-payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: cartTotal * 1000,
        orderID: Math.floor(100000 + Math.random() * 900000),
      }),
    }).then((res) => res.json());
    
    if (result.response.resultCode !== 0) {
      alert('Payment Failed');
      return;
    }

    dispatch(setCartItems([]));
    window.location.href = result.response.shortLink;
  };

  const paymentHandlerZaloPay = async () => {
    const result = await fetch('/.netlify/functions/zalo-payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: cartTotal * 1000,
        orderID: Math.floor(100000 + Math.random() * 900000),
      }),
    }).then((res) => res.json());
    dispatch(setCartItems([]));
    window.location.href = result.response.order_url;
  };

  const paymentVNPAYhandler = async () => {
    const result = await fetch('/.netlify/functions/vnpay-payment').then(
      (res) => res.json(),
    );
    console.log(result);
  };

  const isID = () => {
    const id = optionsList.find((option) => option.isChecked === true)?.id;
    switch (id) {
      case '1':
        handlePayWithCardOpen(true);
        return;
      case '2':
        paymentVNPAYhandler();
        return;
      case '3':
        paymentHandlerZaloPay();
        return;
      case '4':
        paymentHandlerMoMo();
        return;
      case '5':
        dispatch(setCartItems([]));
        navigate('/checkout/payment/thanks');
        return;
      default:
        return;
    }
  };

  return (
    <PaymentOptionContainer>
      <OptionContainer>
        <Button onClick={isID}>PROCEED TO PAYMENT</Button>
        <p>Choose your payment method</p>
        <OptionsList>
          {optionsList.map((option) => (
            <Option
              className={`option option-${option.id}`}
              key={option.id}
              id={option.id}
              isChecked={option.isChecked}
              handleOnCheck={() => handleOnCheck(option.id)}
            >
              {option.img ? (
                <img src={option.img} alt="" />
              ) : (
                <p>{option.name}</p>
              )}
            </Option>
          ))}
        </OptionsList>
        <VoucherContainer>
          <div>
            <p>Voucher</p>
            <p>view available voucher</p>
          </div>
          <div>
            <input
              placeholder="Enter your voucher code here"
              type="text"
              name=""
              id=""
            />
            <div></div>
            <Button>Apply</Button>
          </div>
        </VoucherContainer>
        <PaymentOptionFooter>
          <OrderSummary>
            <p className="summary">Order summary:</p>
            <div className="total">
              <p>Subtotal (x items)</p>
              <p>Total: {cartTotal * 1000} VND</p>
            </div>
            <div className="shipping">
              <p>Shipping fees:</p>
              <p>xxx.xxx.xxx VND</p>
            </div>
          </OrderSummary>
          <p>Address: Ho Chi Minh city, 8 Duong Van Cam street, Thu Duc city</p>
          <p className="working-days">
            Working day: <span>7-14 days after payment</span>
          </p>
          <Button onClick={isID}>PROCEED TO PAYMENT</Button>
        </PaymentOptionFooter>
      </OptionContainer>
    </PaymentOptionContainer>
  );
};

export default PaymentOption;
