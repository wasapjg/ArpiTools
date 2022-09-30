import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { FONTS } from '../Constants'
import MainHeader from '../Components/MainHeader'
import {
  FontAwesome,
  Entypo,
  Feather,
  MaterialIcons,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Button } from 'native-base';

const MyAccount = (props) => {
  return (
    <>
      <View style={{width: '100%', height: '100%', backgroundColor: '#1a1b1a'}}>
      <TouchableOpacity
          onPress={() => props.navigation.navigate('Main')}
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
            Mi Cuenta
          </Text>
        </TouchableOpacity>
        <View style={{justifyContent: 'space-between', height: '65%'}}>
          <View style={{ paddingLeft: 40, marginTop: 30, marginBottom: 10 }}>
            <Text style={[FONTS.body2, { color: "#cccccc", marginBottom: 8 }]}>
              Local:
            </Text>
            <Text style={[FONTS.body2, { color: "#cccccc", marginBottom: 8 }]}>
              Dirección:
            </Text>
            <Text style={[FONTS.body2, { color: "#cccccc", marginBottom: 8 }]}>
              R.U.C:
            </Text>
            <Text style={[FONTS.body2, { color: "#cccccc", marginBottom: 8 }]}>
              Correo electronico:
            </Text>
            <Text style={[FONTS.body2, { color: "#cccccc", marginBottom: 8 }]}>
              Nombre y apellido:
            </Text>
            <Text style={[FONTS.body2, { color: "#cccccc", marginBottom: 8 }]}>
              Telefono de contacto:
            </Text>
            <Text style={[FONTS.body2, { color: "#cccccc", marginBottom: 8 }]}>
              Email:
            </Text>
            <Text style={[FONTS.body2, { color: "#cccccc", marginBottom: 8 }]}>
              Contraseña:
            </Text>
          </View>
  
          <Button
            backgroundColor="#4BD1A0"
            size="lg"
            borderRadius={5}
            w="60%"
            p={1}
            alignSelf={"center"}
            onPress={() => setShow(true)}
            _text={{
              color: '#000000',
              fontSize: 20,
              fontWeight: 'bold'
            }}
          >
            Modificar Datos
          </Button>
        </View>
  
      </View>
    </>
  )
}

export default MyAccount