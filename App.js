import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./src/components/Home";
import { Checkin } from "./src/components/Checkin";
import { Info } from "./src/components/Info";

const Stack = createNativeStackNavigator();

export default function App() {
  const [bookingData, setBookingData] = useState({});

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{ title: "Home" }}>
          {(props) => <Home {...props} setBookingData={setBookingData} />}
        </Stack.Screen>

        <Stack.Screen name="Checkin" options={{ title: "Checkin" }}>
          {(props) => <Checkin {...props} bookingData={bookingData} />}
        </Stack.Screen>

        <Stack.Screen name="Info" component={Info} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
