import { View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import RootNavigation from "./src/screens/navigation/RootNavigation";

const App = () => {
  return (
    <Container>
      <StatusBar style="auto" />
      <RootNavigation />
    </Container>
  );
};

export default App;

const Container = styled(View)`
  flex: 1;
`;
