import { StyleSheet, View } from "react-native";
import React from "react";
import { useNavigation } from '@react-navigation/native';
import { Box, Flex } from "native-base";

const LogoPage = () => {

  const navigation = useNavigation()
  
  setTimeout(() => {
    navigation.navigate('LoginEmail')
  }, 1000);

  return (
    <Flex justify="center" align="center" bg="#010101" w={"100%"} h={"100%"}>
      <View style={{position: 'relative'}}>
        <Box style={styles.triangle}></Box>
        <Box style={styles.mid}></Box>
      </View>
    </Flex>
  );
};

export default LogoPage;

const styles = StyleSheet.create({
  triangle: {
    borderBottomColor: "white",
    borderTopColor: "transparent",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderTopWidth: 0,
    borderLeftWidth: 100,
    borderRightWidth: 100,
    borderBottomWidth: 200,
  },
  mid:{
    backgroundColor: '#010101',
    width: 50,
    height: 200,
    position: 'absolute',
    left: 50,
    bottom: -35,
    transform: [{ rotate: "-27deg" }],
  },
});
