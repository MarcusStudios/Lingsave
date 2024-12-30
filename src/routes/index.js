import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "../pages/welcome";
import Home from "../pages/home";
import Maos from "../pages/maos";
import Rosto from "../pages/rosto";
import Tronco from "../pages/tronco";
import Bracos from "../pages/bracos";
import Corpo from "../pages/corpo";
import Pes from "../pages/pes";
import Boca from "../pages/boca";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Maos"
        component={Maos}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Rosto"
        component={Rosto}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Tronco"
        component={Tronco}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Bracos"
        component={Bracos}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Corpo"
        component={Corpo}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Pes"
        component={Pes}
        options={{ headerShown: false }}
      />
            <Stack.Screen
        name="Boca"
        component={Boca}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
