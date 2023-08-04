import PaymentForm from "../../components/payment-form/payment-form.component";
import { PaymentContainer } from "./payment.styles";

const Payment = () => {
  return (
    <PaymentContainer>
      <h1>Payment Information</h1>
      <PaymentForm />
    </PaymentContainer>
  );
}

export default Payment;