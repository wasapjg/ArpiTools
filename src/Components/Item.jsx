import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  FlatList,
  Pressable,
} from "react-native";
import React, { useContext, useEffect } from "react";
import { Box, Button } from "native-base";
import { COLORS, FONTS, SIZES } from "../Constants";
import ProductContex from "../Context/Products/ProductContext";
import { useRef } from "react";
import { useState } from "react";
import ModalFlatImages from "./ModalFlatImages";
import MainHeader from "./MainHeader";
import { Feather } from "@expo/vector-icons";

const viewConfigRef = { viewAreaCoveragePercentThreshold: 95 };

const Item = () => {
  const { selectedProduct, addToCart, cartArray } = useContext(ProductContex);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [show, setShow] = useState(false);
  const [price, setPrice] = useState(1)

  let flatListRef = useRef();
  const onViewRef = useRef(({ changed }) => {
    if (changed[0].isViewable) {
      setCurrentIndex(changed[0].index);
    }
  });

  return (
    <>
      <MainHeader />
      <View style={{ height: SIZES.height, backgroundColor: '#1a1b1a' }}>
        <View style={{ paddingHorizontal: 10 }}>
          <View
            style={{
              backgroundColor: "#ffffff66",
              position: "absolute",
              zIndex: 100,
              right: 15,
              top: 10,
              width: 40,
              height: 20,
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ textAlign: "center" }}>
              {currentIndex + 1} / {selectedProduct.images.length}
            </Text>
          </View>

          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={selectedProduct.images}
            keyExtractor={(item, index) => index.toString()}
            pagingEnabled
            ref={(ref) => {
              flatListRef.current = ref;
            }}
            viewabilityConfig={viewConfigRef}
            onViewableItemsChanged={onViewRef.current}
            renderItem={({ item, index }) => (
              <TouchableOpacity onPress={() => setShow(true)}>
                <Image
                  source={{ uri: item }} /* Use item to set the image source */
                  key={index} /* Important to set a key for list items,
                               but it's wrong to use indexes as keys, see below */
                  style={{
                    width: SIZES.width - 20,
                    height: 250,
                    resizeMode: "cover",
                  }}
                />
              </TouchableOpacity>
            )}
          />
        </View>

          <View>
            <Text
              style={[
                FONTS.h2,
                { margin: 10, color: "#cccccc", marginTop: 20, marginBottom: 40 },
              ]}
            >
              {selectedProduct.title}
            </Text>
            <Text style={{ color: "#cccccc", marginLeft: 10 }}>
              {selectedProduct.description}
            </Text>
          </View>

          
          <View style={{justifyContent: 'flex-end', flex: 0.8}}>
            <TouchableOpacity style={{margin: 10}}>
              <Text style={{ color: "#4BD1A0" }}>
                Descargar ficha tecnica en PDF{" "}
                <Feather name="download" size={24} color="#4BD1A0" />
              </Text>
            </TouchableOpacity>
            <Text style={[FONTS.body2, { color: "#cccccc", marginLeft: 10}]}>$ {selectedProduct.price}</Text>
            <View style={{flexDirection: 'row', padding: 10, alignItems: 'center'}}>
              <Text style={[FONTS.body2, { color: "#cccccc",marginRight: 10, marginLeft: 20 }]}>Cantidad</Text>
              <View
                style={{ backgroundColor: "#cccccc", flexDirection: "row", width: 60, alignItems: 'center', justifyContent: 'space-around', marginRight: 'auto', borderRadius: 10 }}
              >
                <TouchableOpacity disabled={price === 1 ? true : false} onPress={() => setPrice(price - 1)}>
                  <Text style={{fontSize: 30, color: price === 1 ? '#aaaaaa' : '#000000'}}>-</Text>
                </TouchableOpacity>
                <Text>{price}</Text>
                <TouchableOpacity onPress={() => setPrice(price + 1)}>
                  <Text style={{fontSize: 30}}>+</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  borderColor: "#4BD1A0",
                  borderWidth: 2,
                  borderRadius: 5,
                  padding: 10,
                  marginRight: 20
                }}
              >
                <Text style={[FONTS.h2, { color: "#cccccc", textAlign: 'center' }]}>${selectedProduct.price * price}</Text>
              </View>
            </View>
            <Button
              mt="2"
              mx='2'
              backgroundColor="#4BD1A0"
              size="35"
              borderRadius={5}
              w='60%'
              p='1'
              alignSelf={'center'}
              onPress={async() => { await addToCart(), console.log(cartArray);}}
            >
              Agregar al Carrito
            </Button>
          </View>

        <ModalFlatImages
          visible={show}
          onClose={() => {
            setShow(false);
          }}
        />
      </View>
    </>
  );
};

export default Item;

const styles = StyleSheet.create({});
