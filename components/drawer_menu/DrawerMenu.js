import * as React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, Image } from 'react-native';
import { Icon } from 'react-native-elements'

import WorldsLogic from '../../screens/worlds/WorldsLogic';
import AccountLogic from '../../screens/account/AccountLogic';
import CharactersLogic from '../../screens/characters/CharactersLogic';
import CharacterLogic from '../../screens/character/CharacterLogic';
import InformationsLogic from '../../screens/informations/InformationsLogic';

import logo from '../../assets/logo_horizontal.png';

const Drawer = createDrawerNavigator();
const RootStack = createStackNavigator();

function DrawerContent({ navigation, state }) {
    const activeScreen = state.index;

    return (
        <DrawerContentScrollView>

            <View style={{ alignItems: 'center', marginTop: 15, marginBottom: 15 }}>
                <Image source={logo} style={{ width: 250, height: 35 }} />
            </View>

            <DrawerItem style={{ justifyContent: 'center' }}
                label={(focused) => <Text style={!(activeScreen === 0) ? { color: 'black', fontSize: 18, fontWeight: 'bold' } : { color: 'white', fontSize: 18, fontWeight: 'bold' }} >Account</Text>}
                onPress={() => navigation.navigate('Account')}

                icon={() => <Icon type="material" name="person" size={30} color={activeScreen === 0 ? 'white' : 'black'} />}

                inactiveBackgroundColor='grey'

                activeBackgroundColor="#2196f3"

                focused={activeScreen === 0}
            />

            <DrawerItem style={{ justifyContent: 'center' }}
                label={() => <Text style={!(activeScreen === 1) ? { color: 'black', fontSize: 18, fontWeight: 'bold' } : { color: 'white', fontSize: 18, fontWeight: 'bold' }}>Characters</Text>}
                onPress={() => navigation.navigate('Characters')}

                icon={() => <Icon type="material" name="supervisor-account" size={30} color={activeScreen === 1 ? 'white' : 'black'} />}

                inactiveBackgroundColor='grey'

                activeBackgroundColor="#2196f3"

                focused={activeScreen === 1}
            />

            <DrawerItem style={{ justifyContent: 'center' }}
                label={() => <Text style={!(activeScreen === 2) ? { color: 'black', fontSize: 18, fontWeight: 'bold' } : { color: 'white', fontSize: 18, fontWeight: 'bold' }}>Worlds</Text>}
                onPress={() => navigation.navigate('Worlds')}

                icon={() => <Icon type="material" name="public" size={30} color={activeScreen === 2 ? 'white' : 'black'} />}

                inactiveBackgroundColor='grey'

                activeBackgroundColor="#2196f3"

                focused={activeScreen === 2}
            />

            <DrawerItem style={{ justifyContent: 'center' }}
                label={(focused) => <Text style={!(activeScreen === 3) ? { color: 'black', fontSize: 18, fontWeight: 'bold' } : { color: 'white', fontSize: 18, fontWeight: 'bold' }} >API Key</Text>}
                onPress={() => navigation.navigate('Informations')}

                icon={() => <Icon type="material" name="info" size={30} color={activeScreen === 3 ? 'white' : 'black'} />}

                inactiveBackgroundColor='grey'

                activeBackgroundColor="#2196f3"

                focused={activeScreen === 3}
            />
        </DrawerContentScrollView>
    );
}

function DrawerMenu(props) {
    return (
        <Drawer.Navigator initialRouteName="Account" drawerStyle={{
            backgroundColor: '#707070'
        }} drawerContent={(props) => <DrawerContent {...props} />}>
            <Drawer.Screen name="Account" component={AccountLogic} />
            <Drawer.Screen name="Characters" component={CharactersLogic} />
            <Drawer.Screen name="Worlds" component={WorldsLogic} />
            <Drawer.Screen name="Informations" component={InformationsLogic} />
        </Drawer.Navigator>
    );
}

export default function RootStackScreen() {
    return (
        <NavigationContainer>
            <RootStack.Navigator>
                <RootStack.Screen
                    name="Drawer"
                    component={DrawerMenu}
                    options={{ headerShown: false }}
                />
                {<RootStack.Screen name="Character" component={CharacterLogic} options={{ headerShown: false }} />}
            </RootStack.Navigator>
        </NavigationContainer>
    );
}