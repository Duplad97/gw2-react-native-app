import React from 'react';
import { Button, View, Text, ScrollView } from 'react-native';

export default function CharacterView(props) {

    const characterData = props.characterData;

    return (
        <ScrollView style={{ flex: 1, padding: 25, backgroundColor:'#707070'}}>
            <View style={{flex:2, alignItems:'center', marginBottom: 20, marginTop: 50 }}>

                <Text style={{fontWeight: 'bold', fontSize: 23, marginBottom: 20}}>{characterData.name}</Text>

                <View style={{ flex:2, width: 300, flexDirection:'row', borderWidth:2, marginBottom: 5, padding:10, alignItems:'center', justifyContent:'center' , backgroundColor:'grey'}}>

                    <Text style={{fontWeight:'bold'}}>Level: </Text>
                    <Text>{characterData.level}</Text>
                    
                </View>

                <View style={{ flex:2, width: 300, flexDirection:'row', borderWidth:2, marginBottom: 5, padding:10, alignItems:'center', justifyContent:'center' , backgroundColor:'grey'}}>

                    <Text style={{fontWeight:'bold'}}>Race: </Text>
                    <Text>{characterData.race}</Text>
                    
                </View>

                <View style={{ flex:2, width: 300, flexDirection:'row', borderWidth:2, marginBottom: 5, padding:10, alignItems:'center', justifyContent:'center' , backgroundColor:'grey'}}>

                    <Text style={{fontWeight:'bold'}}>Profession: </Text>
                    <Text>{characterData.profession}</Text>
                    
                </View>

                <View style={{ flex:2, width: 300, flexDirection:'row', borderWidth:2, marginBottom: 5, padding:10, alignItems:'center', justifyContent:'center' , backgroundColor:'grey'}}>

                    <Text style={{fontWeight:'bold'}}>Title: </Text>
                    {!props.title ? <Text>No title</Text> :
                    <Text>{props.title}</Text>}

                </View>

                <View style={{ flex:2, width: 300, flexDirection:'row', borderWidth:2, marginBottom: 5, padding:10, alignItems:'center', justifyContent:'center' , backgroundColor:'grey'}}>

                    <Text style={{fontWeight:'bold'}}>Representing: </Text>
                    <Text>{props.guild.name} - [{props.guild.tag}]</Text>
                    
                </View>

                <View style={{ flex:2, width: 300, borderWidth:2, marginBottom: 5, padding:10, alignItems:'center', justifyContent:'center' , backgroundColor:'grey'}}>

                    <Text style={{fontWeight:'bold'}}>Crafting </Text>
                    {characterData.crafting.length > 0 ? characterData.crafting.map(discipline => {
                        return(
                            <Text key={discipline.discipline}>{discipline.discipline} - Rating: {discipline.rating}</Text>
                        )
                    })
                    :
                    <Text>No crafting discipline</Text>}
                
                </View>

                <View style={{ flex:2, width: 300, flexDirection:'row', borderWidth:2, marginBottom: 5, padding:10, alignItems:'center', justifyContent:'center' , backgroundColor:'grey'}}>

                    <Text style={{fontWeight:'bold'}}>Birthday: </Text>
                    <Text>{new Date(characterData.created).toDateString()}</Text>
                    
                </View>

                <View style={{ flex:2, width: 300, flexDirection:'row', borderWidth:2, marginBottom: 5, padding:10, alignItems:'center', justifyContent:'center' , backgroundColor:'grey'}}>

                    <Text style={{fontWeight:'bold'}}>Deaths: </Text>
                    <Text>{characterData.deaths}</Text>
                    
                </View>

                <View style={{width: 150, marginTop: 30}}>
                    <Button onPress={() => props.navigation.goBack()} title="Back"  />
                </View>

            </View>
            
        </ScrollView >
    );
}