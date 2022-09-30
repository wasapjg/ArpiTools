import {
  StyleSheet,
  Image,
  Text,
  Pressable,
  TouchableOpacity,
  View,
} from "react-native";
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
import { FONTS } from "../Constants";

// const TriangleCorner = (props) => {
//   return (
//     <>
//       <View style={[styles.triangleCorner, props.style]} />
//       <View style={[styles.triangleCorner, props.style]} />
//     </>
//   );
// };
// const Rectangle = () => {
//   return <View style={styles.rectangle} />;
// };

const Signup = (props) => {
  const [step, setStep] = useState(1);
  const [type, setType] = useState("");

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
        ) : step == 2 ? (
          <>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                width: "80%",
                marginTop: 25,
              }}
            >
              <TouchableOpacity
                onPress={() => setType("ferreteria")}
                style={[
                  type === "ferreteria"
                    ? { backgroundColor: "#4BD1A0" }
                    : { backgroundColor: "transparent" },
                  {
                    justifyContent: "center",
                    alignItems: "center",
                    borderWidth: 2,
                    borderColor: "#4BD1A0",
                    width: "50%",
                    padding: 10,
                    borderBottomLeftRadius: 5,
                    borderTopLeftRadius: 5,
                  },
                ]}
              >
                {/* <View style={{ flexDirection: "row", alignSelf: "center" }}>
                    <Rectangle />
                    <TriangleCorner />
                  </View> */}

                <Text style={[FONTS.body3, { color: "#cccccc" }]}>
                  Ferreteria
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setType("constructora")}
                style={[
                  type === "constructora"
                    ? { backgroundColor: "#4BD1A0" }
                    : { backgroundColor: "transparent" },
                  {
                    justifyContent: "center",
                    alignItems: "center",
                    borderWidth: 2,
                    borderColor: "#4BD1A0",
                    width: "50%",
                    padding: 10,
                    borderBottomRightRadius: 5,
                    borderTopRightRadius: 5,
                  },
                ]}
              >
                <Text style={[FONTS.body3, { color: "#cccccc" }]}>
                  Constructora
                </Text>
              </TouchableOpacity>
            </View>
            <VStack space={3} mt="2">
              <FormControl>
                <FormControl.Label>Nombre y Apellido</FormControl.Label>
                <Input placeholder="Nombre y Apellido" fontSize={20} />
              </FormControl>
              <FormControl>
                <FormControl.Label>Telefono</FormControl.Label>
                <Input placeholder="Ingresar su telefono" fontSize={20} />
              </FormControl>
              <FormControl>
                <FormControl.Label>Email</FormControl.Label>
                <Input placeholder="Ingresar su email" fontSize={20} />
              </FormControl>

              <Button
                mt="2"
                backgroundColor="#4BD1A0"
                size="lg"
                borderRadius={10}
                onPress={() => {
                  setStep(3);
                }}
              >
                Continuar
              </Button>
            </VStack>
          </>
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
              <Input placeholder="Ingresar contraseña" fontSize={20} />
            </FormControl>
            <FormControl>
              <FormControl.Label>Confirmación contraseña</FormControl.Label>
              <Input placeholder="Reingresar contraseña" fontSize={20} />
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

const styles = StyleSheet.create({
  triangleCorner: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderRightWidth: 40,
    borderTopWidth: 40,
    borderRightColor: "#4BD1A0",
    borderTopColor: "transparent",
  },
  rectangle: {
    width: 50 * 2,
    height: 40,
    backgroundColor: "transparent",
    borderColor: "#4BD1A0",
    borderWidth: 2,
    borderRightWidth: 0,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
  },
});
