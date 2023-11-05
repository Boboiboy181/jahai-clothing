import { CheckContainer, OptionContainer, OptionDes } from './option.styles';

type OptionProps = {
  id?: string;
  className?: string;
  isChecked: boolean;
  children: React.ReactNode;
  handleOnCheck: () => void;
};

const Option = ({ id, isChecked, children, handleOnCheck, className }: OptionProps) => {
  return (
    <OptionContainer className={className} $option={isChecked}>
      <CheckContainer>
        <input
          id={id}
          type="checkbox"
          onChange={handleOnCheck}
          checked={isChecked}
        />
      </CheckContainer>
      <OptionDes>{children}</OptionDes>
    </OptionContainer>
  );
};

export default Option;
