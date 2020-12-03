import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import IHeader from '../../components/header/Header';

export default function AccountView(props) {

    return (
        <View style={{ flex: 1 }}>
            <IHeader navigation={props.navigation} title='Account' />
            <AccountData accountData={props.accountData} characterNum={props.characterNum}/>
        </View >
    );
}

const AccountData = (props) => {

    return(
        <ScrollView style={{ flex:2, padding: 35, backgroundColor:'#707070' }}>
            <View style={{flex:2, alignItems:'center', justifyContent: 'center'}}>
                <Text style={{fontWeight: 'bold', fontSize: 18, marginBottom: 20}}>Account Details</Text>
            </View>

            <View style={{ flex:2, flexDirection:'row', borderWidth:2, marginBottom: 5, padding:10, alignItems:'center', justifyContent:'center' , backgroundColor:'grey'}}>
                <Text style={{fontWeight:'bold'}}>Account name: </Text>
                <Text>{props.accountData.name}</Text>
            </View>

            <View style={{ flex:2, flexDirection:'row', borderWidth:2, marginBottom: 5, padding:10, alignItems:'center', justifyContent:'center' , backgroundColor:'grey'}}>
                <Text style={{fontWeight:'bold'}}>Created at: </Text>
                <Text>{new Date(props.accountData.created).toDateString()}</Text>
            </View>

            <View style={{ flex:2, flexDirection:'row', borderWidth:2, marginBottom: 5, padding:10, alignItems:'center', justifyContent:'center' , backgroundColor:'grey'}}>
                <Text style={{fontWeight:'bold'}}>WvW Rank: </Text>
                <Text>{props.accountData.wvw_rank}</Text>
            </View>

            <View style={{ flex:2, flexDirection:'row', borderWidth:2, marginBottom: 5, padding:10, alignItems:'center', justifyContent:'center' , backgroundColor:'grey'}}>
                <Text style={{fontWeight:'bold'}}>Fractal Level: </Text>
                <Text>{props.accountData.fractal_level}</Text>
            </View>

            <View style={{ flex:2, flexDirection:'row', borderWidth:2, marginBottom: 5, padding:10, alignItems:'center', justifyContent:'center' , backgroundColor:'grey'}}>
                <Text style={{fontWeight:'bold'}}>Characters: </Text>
                <Text>{props.characterNum}</Text>
            </View>
         </ScrollView>
    )
}