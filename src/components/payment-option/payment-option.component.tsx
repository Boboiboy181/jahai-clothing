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

const options = [
  {
    id: '1',
    name: 'Visa/Masercard',
    isChecked: false,
  },
  {
    id: '2',
    name: 'VNPAY',
    isChecked: false,
  },
  {
    id: '3',
    name: 'ZALOPAY',
    isChecked: false,
  },
  {
    id: '4',
    name: 'MOMO',
    isChecked: false,
  },
  {
    id: '5',
    name: 'COD',
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
    const result = await fetch('/.netlify/functions/momo-payment').then((res) =>
      res.json(),
    );

    dispatch(setCartItems([]));
    window.location.href = result.response.shortLink;
  };

  const isID = () => {
    const id = optionsList.find((option) => option.isChecked === true)?.id;
    switch (id) {
      case '1':
        handlePayWithCardOpen(true);
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
              <p>{option.name}</p>
            </Option>
          ))}
        </OptionsList>
        <VoucherContainer>
          <div>
            <p>Voucher</p>
            <p>view available voucher</p>
          </div>
          <div>
            <input placeholder='Enter your voucher code here' type="text" name="" id="" />
            <div></div>
            <Button>Apply</Button>
          </div>
        </VoucherContainer>
        <PaymentOptionFooter>
          <OrderSummary>
            <p className="summary">Order summary:</p>
            <div className="total">
              <p>Subtotal (x items)</p>
              <p>Total: {cartTotal} VND</p>
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
