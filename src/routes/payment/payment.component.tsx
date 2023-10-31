import { Fragment, useState } from 'react';
import Button, {
  BUTTON_TYPE_CLASSES,
} from '../../components/button/button.component';
import Option from '../../components/option/option.component';
import PaymentForm from '../../components/payment-form/payment-form.component';
import {
  DeliveryContainer,
  Line,
  OptionsContainer,
  PaymentAddress,
  PaymentContainer,
  PaymentInfo,
  SetDefault,
  TypeOfAddress,
} from './payment.styles';
import Modal from '../../components/modal/modal.component';
import FormInput from '../../components/form-input/form-input.component';

const Payment = () => {
  const [option, setOption] = useState(true);
  const [isAddressOpen, setIsAddressOpen] = useState(false);

  const handleOpenAddress = () => {
    setIsAddressOpen(!isAddressOpen);
  };

  const handleOnCheck = () => {
    setOption(!option);
  };

  return (
    <Fragment>
      <PaymentContainer>
        <PaymentInfo>
          <PaymentAddress>
            <h3>Address</h3>
            <p className="name">Tên người gửi: Nguyễn Văn A - SĐT: xxxx.xxxx</p>
            <p className="address">
              Số nhà, tên đường, phường, quận, huyện/ thành phố, tỉnh
            </p>
            <Button
              onClick={handleOpenAddress}
              buttonType={BUTTON_TYPE_CLASSES.inverted}
            >
              Change
            </Button>
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
      {isAddressOpen && (
        <Modal isOpen={isAddressOpen} handleOpen={handleOpenAddress}>
          <FormInput label="Full name" />
          <FormInput label="Phone number" />
          <FormInput label="Address" />
          <FormInput label="Detailed address" />
          <TypeOfAddress>
            <p>Type of address: </p>
            <div>
              <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Home</Button>
              <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Work</Button>
            </div>
          </TypeOfAddress>
          <SetDefault>
            <input type="checkbox" name="" id="" />
            <p>Set this to default address for other orders? </p>
          </SetDefault>
          <Line></Line>
        </Modal>
      )}
    </Fragment>
  );
};

export default Payment;
