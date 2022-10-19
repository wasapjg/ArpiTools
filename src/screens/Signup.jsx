import {
  StyleSheet,
  Image,
  Text,
  Pressable,
  TouchableOpacity,
  View, Alert,
} from "react-native";
import React, {useState} from "react";
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
import {FONTS} from "../Constants";
import {isEmpty} from 'lodash'
import {
  validateCodeArpi,
  validateConfirmPassword,
  validateEmail,
  validateName,
  validateAddress,
  validatePassword,
  validatePhone,
  validateRuc,
  validateType
} from "../Utils/Validations";
import api from "../Services/Api";

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
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [ruc, setRuc] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAdress] = useState("");

  const onContinue = () => {
    const codeError = validateCodeArpi(code);
    if (!isEmpty(codeError)) {
      Alert.alert('Error', codeError)
      return;
    } else {
      if (step === 1) {
        setStep(2)
        return;
      }

    }
    const typeError = validateType(type);
    if (!isEmpty(typeError)) {
      Alert.alert('Error', typeError)
      return;
    }
    const nameError = validateName(name);
    if (!isEmpty(nameError)) {
      Alert.alert('Error', nameError)
      return;
    }
    const phoneError = validatePhone(phone);
    if (!isEmpty(phoneError)) {
      Alert.alert('Error', phoneError)
      return;
    } else {
      if (step === 2) {
        setStep(3)
        return;
      }
    }
    const emailError = validateEmail(email);
    if (!isEmpty(emailError)) {
      Alert.alert('Error', emailError)
      return;
    }
    const rucError = validateRuc(ruc);
    if (!isEmpty(rucError)) {
      Alert.alert('Error', rucError)
      return;
    }
    const addressError = validateAddress(address);
    if (!isEmpty(addressError)) {
      Alert.alert('Error', addressError)
      return;
    }
    const passwordError = validatePassword(password);
    if (!isEmpty(passwordError)) {
      Alert.alert('Error', passwordError)
      return;
    }
    const confirmPasswordError = validateConfirmPassword(password, confirmPassword);
    if (!isEmpty(confirmPasswordError)) {
      Alert.alert('Error', confirmPasswordError)
      return;
    }

    api.post('auth/local/register', {
      username: name + ruc,
      fullname: name,
      email: email,
      password: password,
      RUC: ruc,
      address: address,
      arpicode: code,
      distribuitor: true 

    }).then(res => {
      console.log('res', res)
      props.navigation.navigate("Main");
    }).catch(error => {
      Alert.alert('Error', error.response.data.error.message)
      console.error(error.response.data)
    });

  }

  return (
    <Flex bg="#ffffff" h={"100%"} w={"100%"} justify="center" align="center">
      <Box
        bg="#000000"
        h={"200%"}
        w={"170%"}
        style={{transform: [{rotate: "-45deg"}], position: "absolute"}}
      ></Box>
      <Box>
        <Image source={require("../../assets/LogoNombre.png")} alt=""/>
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
              <Input
                style={{color: 'white'}}
                placeholder="Código Arpi"
                fontSize={20}
                keyboardType={'numeric'}
                maxLength={8}
                onChangeText={setCode}
                value={code}
              />
            </FormControl>
            <Button
              mt="2"
              backgroundColor="#4BD1A0"
              size="lg"
              borderRadius={10}
              onPress={onContinue}
            >
              Continuar
            </Button>
            <HStack mt="6" justifyContent="center">
              <Text style={{color: "white"}}>Tenes cuenta?</Text>
              <Pressable
                onPress={() => {
                  props.navigation.navigate("LoginEmail");
                }}
              >
                <Text style={{color: "#4BD1A0"}}> Inicia Sesión</Text>
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
                    ? {backgroundColor: "#4BD1A0"}
                    : {backgroundColor: "transparent"},
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

                <Text style={[FONTS.body3, {color: "#cccccc"}]}>
                  Ferreteria
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setType("constructora")}
                style={[
                  type === "constructora"
                    ? {backgroundColor: "#4BD1A0"}
                    : {backgroundColor: "transparent"},
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
                <Text style={[FONTS.body3, {color: "#cccccc"}]}>
                  Constructora
                </Text>
              </TouchableOpacity>
            </View>
            <VStack space={3} mt="2">
              <FormControl>
                <FormControl.Label>Nombre y Apellido</FormControl.Label>
                <Input
                  style={{color: 'white'}}
                  placeholder="Nombre y Apellido" fontSize={20}
                  onChangeText={setName}
                  value={name}
                />
              </FormControl>
              <FormControl>
                <FormControl.Label>Telefono</FormControl.Label>
                <Input
                  style={{color: 'white'}}
                  placeholder="+59355555555"
                  fontSize={20}
                  onChangeText={setPhone}
                  value={phone}
                  maxLength={13}
                />
              </FormControl>

              <Button
                mt="2"
                backgroundColor="#4BD1A0"
                size="lg"
                borderRadius={10}
                onPress={onContinue}
              >
                Continuar
              </Button>
            </VStack>
          </>
        ) : (
          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Email</FormControl.Label>
              <Input
                style={{color: 'white'}}
                placeholder="Ingresa email"
                fontSize={20}
                onChangeText={setEmail}
                value={email}
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>RUC</FormControl.Label>
              <Input
                style={{color: 'white'}}
                placeholder="Ingresar RUC"
                fontSize={20}
                onChangeText={setRuc}
                value={ruc}
                maxLength={13}
                keyboardType={'numeric'}
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>Dirección</FormControl.Label>
              <Input
                style={{color: 'white'}}
                placeholder="Ingrese su domicilio"
                fontSize={20}
                onChangeText={setAdress}
                value={address}
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>Contraseña</FormControl.Label>
              <Input
                style={{color: 'white'}}
                placeholder="Ingresar contraseña"
                fontSize={20}
                onChangeText={setPassword}
                value={password}
                secureTextEntry
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>Confirmación contraseña</FormControl.Label>
              <Input
                style={{color: 'white'}}
                placeholder="Reingresar contraseña"
                fontSize={20}
                onChangeText={setConfirmPassword}
                value={confirmPassword}
                secureTextEntry
              />
            </FormControl>

            <Button
              mt="2"
              backgroundColor="#4BD1A0"
              size="lg"
              borderRadius={10}
              onPress={() => {
                onContinue();

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
