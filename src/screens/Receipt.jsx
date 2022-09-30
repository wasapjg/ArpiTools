import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import React, { useState, useContext } from "react";
import MainHeader from "../Components/MainHeader";
import { FONTS } from "../Constants";
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
import {
  FontAwesome,
  Entypo,
  Feather,
  MaterialIcons,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import DocPicker from "../Components/DocPicker";
import ModalReceipt from "../Components/ModalReceipt";
import ProductContext from "../Context/Products/ProductContext";

const Receipt = (props) => {

  const [show, setShow] = useState(false)

  const { totalCart, removeAllCart } = useContext(ProductContext);


  return (
    <>
      <ScrollView style={{ backgroundColor: "#1a1b1a" }}>
      <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={{
            width: "100%",
            backgroundColor: "#4bd1a0",
            flexDirection: "row",
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
            padding: 5
          }}
        >
          <Entypo
            name="chevron-thin-left"
            size={24}
            color="black"
            style={{ position: "absolute", left: 2 }}
          />
          <Text style={[FONTS.h1, { color: "#000000", textAlign: "center" }]}>
            Comprobante
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            marginTop: 50,
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View style={{ flexDirection: "column" }}>
              <Text style={[FONTS.h3, { color: "#cccccc" }]}>Cantidad De</Text>
              <Text style={[FONTS.h3, { color: "#cccccc" }]}>Productos</Text>
            </View>
            <View
              style={{
                backgroundColor: "#cccccc",
                width: 30,
                borderRadius: 5,
                marginHorizontal: 6,
                justifyContent: "center",
                height: 23,
                alignSelf: "center",
              }}
            >
              <Text style={{ textAlign: "center" }}>{totalCart.quantity}</Text>
            </View>
          </View>
          <View
            style={{
              borderColor: "#4bd1a0",
              borderWidth: 2,
              borderRadius: 5,
              paddingHorizontal: 10,
              alignSelf: "center",
              width: "45%",
            }}
          >
            <Text style={[FONTS.h2, { color: "#cccccc" }]}>Total: {totalCart.total}</Text>
          </View>
        </View>
        <FormControl px={10} mt={5}>
          <FormControl.Label>Dirección</FormControl.Label>
          <Input placeholder="Ingrese su direccin de envio" fontSize={20} />
        </FormControl>

        <View style={{ paddingLeft: 40, marginTop: 30, marginBottom: 10 }}>
          <Text style={[FONTS.body3, { color: "#cccccc" }]}>
            Realizar la transferencia al Banco nnnnn
          </Text>
          <Text style={[FONTS.body3, { color: "#cccccc" }]}>
            Numero de cuenta 0000000000
          </Text>
          <Text style={[FONTS.body3, { color: "#cccccc" }]}>
            CI./RUC 1792888069001
          </Text>
        </View>

        <View style={{ paddingLeft: 40, marginTop: 30, marginBottom: 20 }}>
          <Text style={[FONTS.h2, { color: "#cccccc" }]}>
            Subir comprobante de
          </Text>
          <Text style={[FONTS.h2, { color: "#cccccc" }]}>
            pago realizado
          </Text>
        </View>

        <DocPicker />

        <Button
          mt="8"
          mx="2"
          mb="8"
          backgroundColor="#4BD1A0"
          size="lg"
          borderRadius={5}
          w="60%"
          p="1"
          alignSelf={"center"}
          onPress={() => setShow(true)}
          _text={{
            color: '#000000',
            fontSize: 20,
            fontWeight: 'bold'
          }}
        >
          Enviar
        </Button>
      </ScrollView>
      <ModalReceipt 
        visible={show}
        onClose={ () => {setShow(false), props.navigation.navigate('Main'), removeAllCart()} }
      />
    </>
  );
};

export default Receipt;

const styles = StyleSheet.create({});
