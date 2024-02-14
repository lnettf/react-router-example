import { ButtonContainer } from "./Button.style";

export const Button = ({ color, onClick }) => {
  return (
    <ButtonContainer color={color} onClick={onClick}>
      Click!!
    </ButtonContainer>
  );
};
