import { StyleSheet, View, StatusBar, TouchableOpacity, Text, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { Input, Icon } from "native-base";
import { Entypo, Ionicons, FontAwesome } from "@expo/vector-icons";
import ModalMenu from "./ModalMenu";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import ProductContext from "../Context/Products/ProductContext";

const MainHeader = (props) => {
  const [show, setShow] = useState(false);
  const navigation = useNavigation();

  const { productArray, serchProduct, constProductArray, value, serchValue } = useContext(ProductContext)

  const filterSearch = (text) => {
    const newData = constProductArray.filter((item) => {
      const itemData = item.title.toUpperCase()
      const textData = text.toUpperCase()
      return itemData.indexOf(textData) > -1
    })
    serchProduct(newData)
  }

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <View style={styles.top}>
          <TouchableOpacity onPress={() => setShow(true)}>
            <Entypo name="menu" size={24} color="white" />
          </TouchableOpacity>
          <Input
            placeholder="Buscar"
            variant="filled"
            width="80%"
            borderRadius="10"
            py="1"
            px="2"
            backgroundColor={"black"}
            color={"#cccccc"}
            _input={{
              onSubmitEditing:() => navigation.navigate('Main') 
            }}
            onChangeText={(text) => filterSearch(text)}
            InputLeftElement={
              <Icon
                ml="2"
                size="4"
                color="gray.400"
                as={<Ionicons name="search" size={24} color="black" />}
              />
            }
          />
          <TouchableOpacity onPress={() => navigation.navigate("Cart")} style={{position: 'relative'}}>
            {props.cart == true ? (
              <Ionicons name="cart" size={24} color="#4BD1A0" />
            ) : (
              <Ionicons name="cart-outline" size={24} color="#4BD1A0" />
            )}
            {/* {totalCart.total > 0 ? (
              <View style={{backgroundColor: '#4BD1A0', borderRadius: 50, height: 'auto', width: 'auto', padding: 4}}>
                <Text style={{color: '#cccccc'}}>${totalCart.total}</Text>
              </View>
            ): (
              <></>
            )} */}
          </TouchableOpacity>
        </View>
      </View>
      <ModalMenu
        visible={show}
        onClose={() => {
          setShow(false);
        }}
      />
    </SafeAreaView>
  );
};

export default MainHeader;

const styles = StyleSheet.create({
  header: {
    marginTop: StatusBar.currentHeight,
    backgroundColor: "black",
    // height: 78
  },
  top: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    color: "black",
    marginLeft: 10,
  },
});
