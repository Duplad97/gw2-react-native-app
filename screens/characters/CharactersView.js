import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SearchBar } from 'react-native-elements';
import IHeader from '../../components/header/Header';

export default function CharactersView(props) {

    return (
        <View style={{ flex: 1 }}>
            <IHeader navigation={props.navigation} title='Characters' />
            <CharactersData navigation={props.navigation} charactersData={props.charactersData}/>
        </View >
    );
}

const CharactersData = (props) => {

    const [search, setSearch] = useState('');
    const [characters, setCharacters] = useState(props.charactersData);

    const updateSearch = value => {
        if(value) {
            const filteredCharacters = [];
            for (let char of props.charactersData) {
                if (char.name.toLowerCase().includes(value.toLowerCase())) {
                    filteredCharacters.push(char);
                }
            }
            setCharacters(filteredCharacters);
            setSearch(value);
        }
        else {
            setCharacters(props.charactersData);
            setSearch('');
        }
    }

    return(
        <ScrollView style={{ flex:2, padding: 25, backgroundColor:'#707070' }}>

            <View style={{flex:2, alignItems:'center', justifyContent: 'center'}}>
                <Text style={{fontWeight: 'bold', fontSize: 18, marginBottom: 20}}>Characters on the account</Text>
            </View>

            <View style={{flex:2, marginBottom:10}}>
                <SearchBar placeholder="Search" round={true} fontSize={16}     containerStyle={{backgroundColor: '#707070'}}
                        onChangeText={value => updateSearch(value)}
                        onClear={() => updateSearch('')}
                        value={search} />
            </View>

            {characters.map((character) => {
                return(
                    <View onStartShouldSetResponder={() => props.navigation.navigate('Character', {character: character})} key={character.name} style={{flex:2, borderWidth: 2, borderRadius: 10, padding: 7, marginBottom: 10, backgroundColor: 'grey'}}>

                        <View style={{flex:2, flexDirection: 'row'}}>
                            <Text style={{fontWeight: 'bold'}}>Name: </Text>
                            <Text>{character.name}</Text>
                        </View>

                        <View style={{flex:2, flexDirection: 'row'}}>
                            <Text style={{fontWeight: 'bold'}}>Level: </Text>
                            <Text>{character.level}</Text>
                        </View>

                        <View style={{flex:2, flexDirection: 'row'}}>
                            <Text style={{fontWeight: 'bold'}}>Race: </Text>
                            <Text>{character.race}</Text>
                        </View>

                        <View style={{flex:2, flexDirection: 'row'}}>
                            <Text style={{fontWeight: 'bold'}}>Profession: </Text>
                            <Text>{character.profession}</Text>
                        </View>
                    </View>
                )
            })}
            
         </ScrollView>
    )
}