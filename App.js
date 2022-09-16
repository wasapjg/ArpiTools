import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from "native-base";

//importación de la pantallas
import LoginEmail from "./src/screens/LoginEmail";
import Signup from "./src/screens/Signup";
import Main from "./src/screens/Main";
import LogoPage from "./src/screens/LogoPage";
import Cart from "./src/screens/Cart";
import DataProviders from "./src/Components/DataProviders";
import ProductState from "./src/Context/Products/ProductState";
import ItemScreen from "./src/screens/ItemScreen";
import Receipt from "./src/screens/Receipt";
import Buys from "./src/screens/Buys";

import { LogBox } from "react-native";
import Favorites from "./src/screens/Favorites";
import MyAccount from "./src/screens/MyAccount";
import PaymentMethod from "./src/screens/PaymentMethod";
import Help from "./src/screens/Help";
import ArpiTools from "./src/screens/ArpiTools";



const Stack = createNativeStackNavigator();

export default function App() {

  // if (__DEV__) {
  //   const ignoreWarns = [
  //     "EventEmitter.removeListener",
  //     "[fuego-swr-keys-from-collection-path]",
  //     "Setting a timer for a long period of time",
  //     "ViewPropTypes will be removed from React Native",
  //     "AsyncStorage has been extracted from react-native",
  //     "exported from 'deprecated-react-native-prop-types'.",
  //     "Non-serializable values were found in the navigation state.",
  //     "VirtualizedLists should never be nested inside plain ScrollViews",
  //   ];
  
  //   const warn = console.warn;
  //   console.warn = (...arg) => {
  //     for (const warning of ignoreWarns) {
  //       if (arg[0].startsWith(warning)) {
  //         return;
  //       }
  //     }
  //     warn(...arg);
  //   };
  
  //   LogBox.ignoreLogs(ignoreWarns);
  // }

  LogBox.ignoreAllLogs()


  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <ProductState>
          <Stack.Navigator>
            <Stack.Screen
              name="LogoPage"
              component={LogoPage}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="LoginEmail"
              component={LoginEmail}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Main"
              component={Main}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Cart"
              component={Cart}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="ItemScreen"
              component={ItemScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Receipt"
              component={Receipt}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Buys"
              component={Buys}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Favorites"
              component={Favorites}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MyAccount"
              component={MyAccount}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="PaymentMethod"
              component={PaymentMethod}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Help"
              component={Help}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="ArpiTools"
              component={ArpiTools}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
          <StatusBar backgroundColor="black" style="light" />
        </ProductState>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
