import React from 'react';
import { Header, Button, Icon } from 'react-native-elements';

export default function IHeader(props) {

    let iconName = 'menu'
    if(props.title==='Account') iconName = "person";
    else if(props.title==='Characters') iconName = "supervisor-account";
    else if(props.title==='Worlds') iconName = "public";
    else if(props.title==='Informations') iconName = "info";

    return (
        <Header
            centerComponent={{ text: props.title, style: {fontSize: 18, color: '#fff' } }}
            rightComponent={<Icon type="material" name={iconName} size={30} color='white' />}
            leftComponent={<Button title='' icon={{
                name: "menu",
                size: 30,
                color: "white"
            }} onPress={() => props.navigation.openDrawer()}></Button>}
        >
            
        </Header>
    );
}