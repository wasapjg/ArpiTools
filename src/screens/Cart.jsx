import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useRef, useState } from "react";
import MainHeader from "../Components/MainHeader";
import ItemsCart from "../Components/ItemsCart";
import { Button } from "native-base";
import { FONTS, SIZES } from "../Constants";
import { FontAwesome, Entypo } from "@expo/vector-icons";

const Cart = ( props ) => {
  const scrollView = useRef();

  const [scrollEnd, setScrollEnd] = useState(false)

  const isCloseToBottom = ({
    layoutMeasurement,
    contentOffset,
    contentSize,
  }) => {
    const paddingToBottom = 20;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };

  return (
    <>
      <MainHeader cart={true} />
      <ScrollView
        style={{ backgroundColor: "#1a1b1a" }}
        ref={scrollView}
        onScroll={({ nativeEvent }) => {
          if (isCloseToBottom(nativeEvent)) {
            setScrollEnd(true)
            // enableSomeButton();
          }
          else{setScrollEnd(false)}
        }}
      >
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
            Carrito
          </Text>
        </TouchableOpacity>
        <ItemsCart />
        <ItemsCart />
        <ItemsCart />
        <ItemsCart />
        <ItemsCart />
        <ItemsCart />
        <ItemsCart />
        <ItemsCart />
        <ItemsCart />
        <ItemsCart />
        <ItemsCart />
      </ScrollView>
      <View style={{ position: "relative" }}>
        {scrollEnd ? (
          <></>
        ) : (
          <Button
            style={{
              position: "absolute",
              top: -60,
              width: SIZES.width,
              backgroundColor: "#1a1b1a55",
              height: 60,
              alignItems: "flex-end",
            }}
            onPress={() => scrollView.current.scrollToEnd({ animated: true })}
          >
            <FontAwesome name="angle-double-down" size={24} color="white" />
          </Button>
        )}
        <View style={{ backgroundColor: "#1a1b1a" }}>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              marginTop: 5,
              justifyContent: "space-around",
              alignContent: "center",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <View style={{ flexDirection: "column" }}>
                <Text style={[FONTS.h3, { color: "#cccccc" }]}>
                  Cantidad De
                </Text>
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
                <Text style={{ textAlign: "center" }}>1</Text>
              </View>
            </View>
            <View
              style={{
                borderColor: "#4bd1a0",
                borderWidth: 2,
                borderRadius: 5,
                paddingHorizontal: 10,
                alignSelf: "center",
              }}
            >
              <Text style={[FONTS.h2, { color: "#cccccc" }]}>Total</Text>
            </View>
          </View>
          <Button
            mt="3"
            mx="2"
            mb="8"
            backgroundColor="#4BD1A0"
            size="35"
            borderRadius={5}
            w="60%"
            p="1"
            alignSelf={"center"}
            onPress={() => props.navigation.navigate('Receipt')}
            _text={{
              color: '#000000',
              fontSize: 20,
              fontWeight: 'bold'
            }}
          >
            Comprar
          </Button>
        </View>
      </View>
    </>
  );
};

export default Cart;

const styles = StyleSheet.create({});
