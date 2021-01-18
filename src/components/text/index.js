import React from "react";
import { TextNew } from "./styled";
import PropTypes from "prop-types";

const NewText = ({ text, mTop, onPress, size, width, align }) => {
  return (
    <TextNew
      mTop={mTop}
      onPress={onPress}
      size={size}
      width={width}
      align={align}
    >
      {text}
    </TextNew>
  );
};
NewText.propTypes = {
  color: PropTypes.string,
};
export default NewText;
