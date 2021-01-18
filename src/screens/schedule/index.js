import React, { useState, useEffect } from "react";
import NewText from "../../Components/Text";
import { Container, ViewCard } from "./styled";
import { useNavigation } from "@react-navigation/native";
import Button from "../../Components/Button";

const Schedule = ({ navigation }) => {
  const { goBack } = useNavigation();
  const [infoCard, setInfoCard] = useState(false);
  return (
    <Container>
      <NewText
        size="title1"
        mTop={35}
        width={90}
        text="Informações sobre consultas e agendamentos"
      />
      <ViewCard>
        <NewText mTop={10} text="De Segunda a Sexta-feira" />
        <NewText mTop={10} text="Agendamento para todas as consultas" />
        <NewText
          mTop={10}
          text="Horário de funcionamento das 9:00-11:30Hrs/13:00-17:30Hrs"
        />
        <NewText
          mTop={10}
          text="Consultas agendadas chegar com 15min de antecedencia"
        />
        <NewText
          mTop={10}
          text="Consultas basicas com agendamento de segunda a sexta"
        />
        <NewText
          mTop={10}
          text="Consultas de especialidades com agendamento de segunda , quarta e sexta"
        />
      </ViewCard>
      <NewText size="title2" mTop={25} width={90} text="Contatos" />
      <ViewCard>
        <NewText mTop={10} text="Fixo:(11)3232-8997 /(11)4152-6321" />
        <NewText mTop={10} text="Whats:(11)98587-1498 /(11)99632-6178" />
        <NewText mTop={10} text="Email:Suasaude@gmail.com" />
      </ViewCard>
      <NewText
        size="title2"
        mTop={25}
        width={90}
        text="Informações adicionais"
      />
      <ViewCard>
        <NewText mTop={10} text="Aceitamos cartões de todas as bandeiras" />
        <NewText
          mTop={10}
          text="Não aceitamos cartão alimentação ou vale-refeições "
        />
        <NewText
          mTop={10}
          text="Não prestamos atendimentos sem agendamento prévio"
        />
      </ViewCard>
      <Button text="Voltar" mTop={20} onPress={() => goBack()} />
      <Button
        text="Inicio"
        mTop={20}
        onPress={() => navigation.navigate("Login")}
      />
    </Container>
  );
};

export default Schedule;
