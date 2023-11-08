import { Fragment, useState } from 'react';
import Button, {
  BUTTON_TYPE_CLASSES,
} from '../../components/button/button.component';
import Option from '../../components/option/option.component';
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
import PaymentOption from '../../components/payment-option/payment-option.component';
import PaymentForm from '../../components/payment-form/payment-form.component';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';

const options = [
  {
    id: '1',
    isChecked: false,
  },
  {
    id: '2',
    isChecked: false,
  },
];

const Payment = () => {
  const [isAddressOpen, setIsAddressOpen] = useState(false);
  const [isPayWithCardOpen, setIsPayWithCardOpen] = useState(false);
  const currentUser = useSelector(selectCurrentUser);

  const handleOpenPayWithCard = () => {
    setIsPayWithCardOpen(!isPayWithCardOpen);
  };

  const handleOpenAddress = () => {
    setIsAddressOpen(!isAddressOpen);
  };

  const [optionsList, setOptionsList] = useState(options);

  const handleOnCheck = (id: string) => {
    const newUpdatedOptions = options.map((option) => {
      return option.id === id
        ? { ...option, isChecked: !option.isChecked }
        : option;
    });
    setOptionsList([...newUpdatedOptions]);
  };

  return (
    <Fragment>
      <PaymentContainer>
        <PaymentInfo>
          <PaymentAddress>
            <h3>Address</h3>
            <p className="name">
              Tên người gửi: {currentUser?.displayName} - SĐT: xxxx.xxxx
            </p>
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
              <Option
                id={optionsList[0].id}
                isChecked={optionsList[0].isChecked}
                handleOnCheck={() => handleOnCheck(optionsList[0].id)}
              >
                <p>đ xx.xxx</p>
                <p>Priority Delivery</p>
                <p>Guaranteed by xxx xxxx</p>
              </Option>
              <Option
                id={optionsList[1].id}
                isChecked={optionsList[1].isChecked}
                handleOnCheck={() => handleOnCheck(optionsList[1].id)}
              >
                <p>đ xx.xxx</p>
                <p>Priority Delivery</p>
                <p>Guaranteed by xxx xxxx</p>
              </Option>
            </OptionsContainer>
          </DeliveryContainer>
        </PaymentInfo>
        <PaymentOption handlePayWithCardOpen={setIsPayWithCardOpen} />
      </PaymentContainer>
      {isAddressOpen && (
        <Modal
          modalTitle="Change address"
          isOpen={isAddressOpen}
          handleOpen={handleOpenAddress}
        >
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
      {isPayWithCardOpen && (
        <PaymentForm
          isOpen={isPayWithCardOpen}
          handleOpen={handleOpenPayWithCard}
        />
      )}
    </Fragment>
  );
};

export default Payment;
