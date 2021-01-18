import React from "react";
import { ButtonPrimary } from "./styled";
import PropTypes from "prop-types";
import NewText from "../Text";

const Button = ({ text, mTop, onPress }) => {
  return (
    <ButtonPrimary mTop={mTop} onPress={onPress}>
      <NewText style={{ color: "#ffff" }} text={text} />
    </ButtonPrimary>
  );
};
Button.propTypes = {
  mTop: PropTypes.number,
};

export default Button;
