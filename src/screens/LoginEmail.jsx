import {
  StyleSheet,
  Text,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  Center,
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
  HStack,
  Flex,
} from "native-base";
import { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { postUser } from "../Action/postUser";

const LoginEmail = (props) => {
  const [forgot, setForgot] = useState(false);

  return (
    <Flex bg="#ffffff" h={"100%"} w={"100%"} justify="center" align="center">
      <Box
        bg="#000000"
        h={"200%"}
        w={"170%"}
        style={{ transform: [{ rotate: "-45deg" }], position: "absolute" }}
      ></Box>
      <Box style={{position: 'relative'}}>
        {forgot ? (
          <TouchableOpacity
          style={{ position: "absolute", top: -30, left: 0 }}
          onPress={() =>setForgot(false)}
        >
          <FontAwesome5 name="arrow-left" size={24} color={"white"} />
        </TouchableOpacity>
        ) : (
          <></>
        )}
        <Image source={require("../../assets/LogoNombre.png")} alt="" />
        <Heading
          size="xl"
          fontWeight="800"
          color= {forgot ? '#cccccc' : '#ffffff'}
          _dark={{
            color: "warmGray.50",
          }}
          alignSelf="center"
        >
          {forgot ? "Olvidé mi contraseña" : "Inicia sesión"}
        </Heading>
        {forgot ? (
          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Email</FormControl.Label>
              <Input placeholder="Ingresa tu Email" />
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
            <HStack mt="6" justifyContent="center">
              <Text style={{ color: "white" }}>No tienes una cuenta?</Text>
              <Pressable
                onPress={() => {
                  props.navigation.navigate("Signup");
                }}
              >
                <Text style={{ color: "#4BD1A0" }}> Registrate Aqui</Text>
              </Pressable>
            </HStack>
          </VStack>
        ) : (
          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Email</FormControl.Label>
              <Input placeholder="Ingresa tu Email" />
            </FormControl>
            <FormControl>
              <FormControl.Label>Contraseña</FormControl.Label>
              <Input type="password" placeholder="Ingresa tu Contraseña" />
            </FormControl>
            <Button
              mt="2"
              backgroundColor="#4BD1A0"
              size="lg"
              borderRadius={10}
              onPress={async () => {
                await postUser(),
                props.navigation.navigate("Main");
              }}
            >
              Continuar
            </Button>
            <HStack mt="6" justifyContent="center">
              <Text style={{ color: "white" }}>Soy un nuevo usuario.</Text>
              <Pressable
                onPress={() => {
                  props.navigation.navigate("Signup");
                }}
              >
                <Text style={{ color: "#4BD1A0" }}> Registrate Aqui</Text>
              </Pressable>
            </HStack>
            <Pressable
              onPress={() => {
                setForgot(true);
              }}
            >
              <Text style={{ color: "#4BD1A0", alignSelf: "center" }}>
                {" "}
                Olvidé mi Contraseña
              </Text>
            </Pressable>
          </VStack>
        )}
      </Box>

      {/* <Header arrow title='Iniciar Sesión' /> */}
      {/* <Center w="100%" h="90%">
        <Box safeArea p="2" py="8" w="90%" maxW="290">
          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Email</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl>
              <FormControl.Label>Contraseña</FormControl.Label>
              <Input type="password" />
              <Link
                _text={{
                  fontSize: "xs",
                  fontWeight: "500",
                  color: COLORS.primary_alpha_750,
                }}
                alignSelf="flex-end"
                mt="1"
              >
                Olvidaste tu contraseña?
              </Link>
            </FormControl>
            <Button mt="2" backgroundColor={COLORS.primary} onPress={() => {props.navigation.navigate('Main')}}>
              Ingresar
            </Button>
            <HStack mt="6" justifyContent="center">
              <Text
                fontSize="sm"
                color="coolGray.600"
                _dark={{
                  color: "warmGray.200",
                }}
              >
                Soy un nuevo usuario.{" "}
              </Text>
              <Link
                _text={{
                  color: COLORS.primary_alpha_750,
                  fontWeight: "medium",
                  fontSize: "sm",
                }}
                onPress={() => {props.navigation.navigate('Signup')}}
              >
                Registrarse
              </Link>
            </HStack>
          </VStack>
        </Box>
      </Center> */}
    </Flex>
  );
};

export default LoginEmail;

const styles = StyleSheet.create({});
