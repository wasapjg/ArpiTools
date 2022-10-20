import {
  ScrollView,
  BackHandler,
  Alert
} from "react-native";
import React, { useContext, useEffect } from "react";
import MainHeader from "../Components/MainHeader";
import Items from "../Components/Items";
import ProductContext from "../Context/Products/ProductContext";
import Categoris from "../Components/Categoris";
import { useRoute } from "@react-navigation/native";

const Main = (props) => {

  useEffect(() => {
    const backAction = () => {
      Alert.alert("Espera", "Seguro quires salir de la plicación", [
        {
          text: "Cancelar",
          onPress: () => null,
          style: "cancel"
        },
        { text: "Salir", onPress: () => BackHandler.exitApp() }
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  const { selectedProduct } = useContext(ProductContext);

  // const route = useRoute()
  // console.log(route.name)

  // console.log(navigation.state.routeName)
  return (
    <>
      <Categoris />
      <ScrollView style={{backgroundColor: '#1a1b1a'}}>
        <Items onPress={() => {
          props.navigation.navigate('ItemScreen')}}/>
      </ScrollView>
      {/* <ModalMenu 
      isVisible={show}
      onClose={() => {
        setShow(false);
      }}
      /> */}
    </>
  );
};

export default Main;

