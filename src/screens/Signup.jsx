import { StyleSheet, Image, Text, Pressable } from "react-native";
import React, { useState } from "react";
import {
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
  HStack,
  Flex,
} from "native-base";

const Signup = (props) => {
  const [step, setStep] = useState(1);

  return (
    <Flex bg="#ffffff" h={"100%"} w={"100%"} justify="center" align="center">
      <Box
        bg="#000000"
        h={"200%"}
        w={"170%"}
        style={{ transform: [{ rotate: "-45deg" }], position: "absolute" }}
      ></Box>
      <Box>
        <Image source={require("../../assets/LogoNombre.png")} alt="" />
        <Heading
          size="xl"
          fontWeight="800"
          color="#cccccc"
          _dark={{
            color: "warmGray.50",
          }}
          alignSelf="center"
        >
          Registro
        </Heading>
        {step == 1 ? (
          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Codigo de vendedor</FormControl.Label>
              <Input placeholder="Código Arpi" fontSize={20} />
            </FormControl>
            <Button
              mt="2"
              backgroundColor="#4BD1A0"
              size="lg"
              borderRadius={10}
              onPress={() => {
                setStep(2);
              }}
            >
              Continuar
            </Button>
            <HStack mt="6" justifyContent="center">
              <Text style={{ color: "white" }}>Tenes cuenta?</Text>
              <Pressable
                onPress={() => {
                  props.navigation.navigate("LoginEmail");
                }}
              >
                <Text style={{ color: "#4BD1A0" }}> Inicia Sesión</Text>
              </Pressable>
            </HStack>
          </VStack>
        ) : (
          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Email</FormControl.Label>
              <Input placeholder="Ingresa email" fontSize={20} />
            </FormControl>
            <FormControl>
              <FormControl.Label>RUC</FormControl.Label>
              <Input placeholder="Ingresar RUC" fontSize={20} />
            </FormControl>
            <FormControl>
              <FormControl.Label>Contraseña</FormControl.Label>
              <Input
                placeholder="Ingresar contraseña"
              
                fontSize={20}
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>Confirmación contraseña</FormControl.Label>
              <Input
                placeholder="Reingresar contraseña"
              
                fontSize={20}
              />
            </FormControl>
            <Button
              mt="2"
              backgroundColor="#4BD1A0"
              size="lg"
              borderRadius={10}
              onPress={() => {
                props.navigation.navigate("Main");
              }}
            >
              Continuar
            </Button>
          </VStack>
        )}
      </Box>
    </Flex>
  );
};

export default Signup;

const styles = StyleSheet.create({});
