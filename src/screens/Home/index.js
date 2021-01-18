import React, { useState, useEffect } from "react";
import { ScrollView, View } from "react-native";
import { Container, ViewSpecialties, ResumeRow } from "./styled";
import NewText from "../../Components/Text";
import Button from "../../Components/Button";
import { arrayBasic, arraySpecialties } from "../../Components/array";

const Home = ({ navigation }) => {
  const [infoSpecialties, setinfoSpecialties] = useState(false);
  return (
    <Container>
      <NewText text="Seja Bem-vindo!" size="title1" width={90} mTop={10} />
      <Button
        onPress={() => setinfoSpecialties(false)}
        text="Especialidades"
        mTop={20}
      />
      <Button
        onPress={() => setinfoSpecialties(true)}
        text="Atendimentos Basicos"
        mTop={10}
      />
      <ScrollView>
        <ViewSpecialties>
          {!infoSpecialties && (
            <View>
              {arraySpecialties.map((item) => (
                <ResumeRow>
                  <NewText mTop={5} text={item.name} />
                </ResumeRow>
              ))}
            </View>
          )}
          {infoSpecialties && (
            <View>
              {arrayBasic.map((item) => (
                <ResumeRow>
                  <NewText mTop={5} text={item.name} />
                </ResumeRow>
              ))}
            </View>
          )}
        </ViewSpecialties>
      </ScrollView>
      <Button
        text="Agenda"
        mTop={20}
        onPress={() => navigation.navigate("Schedule")}
      />
    </Container>
  );
};

export default Home;
