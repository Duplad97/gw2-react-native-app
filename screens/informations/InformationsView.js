import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, Button } from 'react-native';
import IHeader from '../../components/header/Header';

export default function InformationsView(props) {

    return (
        <View style={{ flex: 1 }}>
            <IHeader navigation={props.navigation} title='Informations' />
            <TokenData tokenData={props.tokenData} />
        </View >
    );
}

const TokenData = (props) => {

    const [secured, setSecured] = useState(true);

    const showID = () => {
        if(secured) {
            setSecured(false);

            setTimeout(() => {
                setSecured(true);
            }, 3000)
        }
    }

    return(
        <ScrollView style={{ flex:2, padding: 20, backgroundColor:'#707070' }}>

            <View style={{flex:2, alignItems:'center', justifyContent: 'center'}}>
                <Text style={{fontWeight: 'bold', fontSize: 18, marginBottom: 20}}>API Key information</Text>
            </View>

            <View style={{ flex:2, flexDirection:'row', borderWidth:2, marginBottom: 5, padding:10, alignItems:'center', justifyContent:'center' , backgroundColor:'grey'}}>
                <Text style={{fontWeight:'bold'}}>ID: </Text>
                <TextInput width={290} fontSize={12} borderWidth={1} editable={false}  value={props.tokenData.id} secureTextEntry={secured} />
            </View>

            <View style={{ flex:2, width: 320, borderWidth:2, marginBottom: 5, padding:10, alignItems:'center', justifyContent:'center' , backgroundColor:'grey'}}>

                <Text style={{fontWeight:'bold', fontSize: 16}}>Permissions </Text>
                    {props.tokenData.permissions.length > 0 ? props.tokenData.permissions.map(permission => {
                        return(
                            <Text key={permission}>{permission}</Text>
                        )
                    })
                    :
                    <Text>No permission granted</Text>}
                
                </View>

                <View style={{ marginTop: 30, alignItems: 'center', justifyContent: 'center'}}>
                    <Button onPress={() => showID()} title="Show ID"  />
                </View>

         </ScrollView>
    )
}