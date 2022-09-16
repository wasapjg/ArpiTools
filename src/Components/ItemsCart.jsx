import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";
import React, { useContext, useEffect } from "react";
import { Box, Center, Flex, Spinner } from "native-base";
import { COLORS, FONTS, SIZES } from "../Constants";
import ProductContex from "../Context/Products/ProductContext";
import { useNavigation } from "@react-navigation/native";

const ItemsCart = () => {
  return (
    <View style={{ flexDirection: "row", padding: 3 }}>
      <Image
        source={{}}
        alt="Imagen en carrito"
        style={{ width: 130, height: 130 }}
      />
      <Flex direction="column" ml={5} w={"60%"} justify={"space-around"}>
        <Box>
          <Text style={[FONTS.body2, { color: "#cccccc" }]}>Producto</Text>
        </Box>
        <View>
          <Text style={[FONTS.body3, { color: "#cccccc" }]}>
            $ 100.000
          </Text>
          <View style={{flexDirection: 'row', width: '100%', marginTop: 5, justifyContent: 'center', alignContent: 'center'}}>
            <Text style={[FONTS.h3, {color: '#cccccc'}]}>Cantidad</Text>
            <View style={{ backgroundColor: "#cccccc", width: 30, borderRadius: 5, marginHorizontal: 6, justifyContent: 'center' }}>
              <Text style={{textAlign: 'center'}}>1</Text>
            </View>
            <View style={{borderColor: '#4bd1a0', borderWidth: 2, borderRadius: 5, paddingLeft: 10, flex: 1 }}>
              <Text style={{color: '#cccccc'}}>
                Total
              </Text>
            </View>
          </View>
        </View>
      </Flex>
    </View>
  );
};

export default ItemsCart;

const styles = StyleSheet.create({});
