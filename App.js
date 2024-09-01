import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import CreateScreen from './screens/CreateScreen';
import { Provider } from './context/BlogContext';
import ShowScreen from './screens/ShowScreen';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import EditScreen from './screens/EditScreen';


export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <Provider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerTitleStyle: styles.headerTitle, headerTitle: 'Pocket Book' }}>
            <Stack.Screen name="Home" component={HomeScreen}
              options={({ navigation }) => ({
                headerRight: () => (
                  <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                    <FontAwesome6 name="add" size={24} color="black" />
                  </TouchableOpacity>
                )
              })} />
            <Stack.Screen name="Create" component={CreateScreen} />
            <Stack.Screen name='Show' component={ShowScreen}
              options={({ navigation, route }) => ({
                headerRight: () => ( 
                  <TouchableOpacity onPress={() => navigation.navigate('Edit',
                    { id: route.params.id })}>
                    <FontAwesome6 name="edit" size={24} color="black" />
                  </TouchableOpacity>
                )
              })} />
            <Stack.Screen name='Edit' component={EditScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20,
    fontWeight: '400',
    color: '#333333',

  },
});
