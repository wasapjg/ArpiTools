import { StyleSheet, Text, View, BackHandler } from "react-native";
import React, {useEffect} from "react";
import Item from "../Components/Item";
import CarouselImage from "../Components/CarouselImage";

const ItemScreen = (props) => {
  useEffect(() => {
    const backAction = () => {props.navigation.navigate('Main') 
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);
  return (
    <View>
      <Item />
    </View>
  );
};

export default ItemScreen;

const styles = StyleSheet.create({});
