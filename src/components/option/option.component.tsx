import { CheckContainer, OptionContainer, OptionDes } from './option.styles';

type OptionProps = {
  option: boolean;
  handleOnCheck: () => void;
};

const Option = ({ option, handleOnCheck }: OptionProps) => {
  return (
    <OptionContainer $option={option}>
      <CheckContainer>
        <input type="checkbox" onChange={handleOnCheck} checked={option} />
        <p>đ xx.xxx</p>
      </CheckContainer>
      <OptionDes>
        <p>Priority Delivery</p>
        <p>
          Guaranteed by xxx xxxx
        </p>
      </OptionDes>
    </OptionContainer>
  );
};

export default Option;
