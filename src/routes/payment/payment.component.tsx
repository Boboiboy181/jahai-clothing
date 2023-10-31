import { useState } from 'react';
import Button, {
  BUTTON_TYPE_CLASSES,
} from '../../components/button/button.component';
import Option from '../../components/option/option.component';
import PaymentForm from '../../components/payment-form/payment-form.component';
import {
  DeliveryContainer,
  OptionsContainer,
  PaymentAddress,
  PaymentContainer,
  PaymentInfo,
} from './payment.styles';

const Payment = () => {
  const [option, setOption] = useState(true);

  const handleOnCheck = () => {
    setOption(!option);
  };

  return (
    <PaymentContainer>
      <PaymentInfo>
        <PaymentAddress>
          <h3>Address</h3>
          <p className='name'>Tên người gửi: Nguyễn Văn A - SĐT: xxxx.xxxx</p>
          <p className='address'>Số nhà, tên đường, phường, quận, huyện/ thành phố, tỉnh</p>
          <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Change</Button>
        </PaymentAddress>
        <DeliveryContainer>
          <h3>Choose your delivery option</h3>
          <OptionsContainer>
            <Option option={option} handleOnCheck={handleOnCheck} />
            <Option option={!option} handleOnCheck={handleOnCheck} />
          </OptionsContainer>
        </DeliveryContainer>
      </PaymentInfo>
      <PaymentForm />
    </PaymentContainer>
  );
};

export default Payment;
