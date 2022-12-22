import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { PhotoListComponent } from '../PhotoListComponent/PhotoListComponent';
import SinglePhotoComponent from '../SinglePhotoComponent/SinglePhotoComponent';
const Stack = createNativeStackNavigator();

export function NavigationComponent() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="PhotoGallery"
          component={PhotoListComponent}
          options={{ title: 'Photo Gallery' }}
        />
        <Stack.Screen
          name="SinglePhoto"
          component={SinglePhotoComponent}
          options={{ title: 'Single Photo' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
