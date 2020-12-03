import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import CharactersView from './CharactersView';

import { BASE_URL, API_KEY } from '../../config/api';

export default function CharactersLogic({ navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [charactersData, setCharactersData] = useState([]);

    const fetchCharacters = () => {
        fetch(BASE_URL + 'characters?ids=all', {
            method: "GET",
            headers: {
                Authorization: 'Bearer ' + API_KEY
            }
        })
            .then((response) => response.json())
            .then((json) => setCharactersData(json))
            .catch((error) => console.error(error))
            .finally(() => {
                setLoading(false);
            });
    }

    useEffect(() => {
        fetchCharacters();
    }, []);

    if (isLoading)
        return (
            <View style={{flex:2 , justifyContent: 'center', backgroundColor: '#707070'}}>
                <ActivityIndicator size='large' color="#2196f3"/>
            </View>
        );
    else {
        return (
            <CharactersView charactersData={charactersData} navigation={navigation}/>
        )
    }
}