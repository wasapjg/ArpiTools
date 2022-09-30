import {
  ScrollView,
} from "react-native";
import React, { useContext } from "react";
import MainHeader from "../Components/MainHeader";
import Items from "../Components/Items";
import ProductContext from "../Context/Products/ProductContext";

const Main = (props) => {

  const { selectedProduct } = useContext(ProductContext);


  return (
    <>
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

