import { StyleSheet, View, StatusBar, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Input, Icon } from "native-base";
import { Entypo, Ionicons, FontAwesome } from "@expo/vector-icons";
import ModalMenu from "./ModalMenu";
import { useNavigation } from "@react-navigation/native";

const MainHeader = (props) => {
  const [show, setShow] = useState(false);
  const navigation = useNavigation();

  return (
    <View>
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
            InputLeftElement={
              <Icon
                ml="2"
                size="4"
                color="gray.400"
                as={<Ionicons name="search" size={24} color="black" />}
              />
            }
          />
          <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
            {props.cart == true ? (
              <Ionicons name="cart" size={24} color="#4BD1A0" />
            ) : (
              <Ionicons name="cart-outline" size={24} color="#4BD1A0" />
            )}
          </TouchableOpacity>
        </View>
      </View>
      <ModalMenu
        visible={show}
        onClose={() => {
          setShow(false);
        }}
      />
    </View>
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
