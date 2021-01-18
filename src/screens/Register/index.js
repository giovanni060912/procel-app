import React, { useState, useEffect } from "react";
import { Button, View, TextInput, Text } from "react-native";
import { Container, Input, TextWan } from "./styled";
import ButtonPrimary from "../../Components/Button";
import NewText from "../../Components/Text";
import Navigation from "../../Components/navigation";

const Register = ({ navigation }) => {
  const requestAlth = [{ name: "12345678900", password: "123456" }];

  const [document, setDocument] = useState("");
  const [valid, setValid] = useState("");
  const handleLogin = () => {
    (requestAlth[0].name === document && requestAlth[0].password) === valid
      ? navigation.navigate("Home")
      : null;
  };

  return (
    <Container>
      <NewText width={90} size="title1" text="SUS" />
      <Input
        onChangeText={(text) => {
          text.length > 10 ? setDocument(text) : null;
        }}
        placeholder="SUS"
        mTop={15}
        mBottom={20}
        keyboardType="numeric"
      />

      <NewText width={90} size="title2" text="Senha" />
      <Input
        onChangeText={(text) => setValid(text)}
        placeholder="Senha"
        mTop={15}
        mBottom={80}
        secureTextEntry={true}
        keyboardType="numeric"
        textContentType={"password"}
        maxLength={6}
      />
      <ButtonPrimary
        onPress={() => {
          handleLogin();
        }}
        text="Próximo"
        mTop={50}
      />
    </Container>
  );
};

export default Register;
