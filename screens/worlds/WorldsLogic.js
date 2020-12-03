import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { BASE_URL } from '../../config/api';
import WorldsView from './WorldsView';

export default function WorldsLogic({ navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [worldsData, setWorldsData] = useState([]);

    const fetchWorlds = () => {
        fetch(BASE_URL + 'worlds?ids=all', {
            method: "GET",
        })
            .then((response) => response.json())
            .then((json) => setWorldsData(json))
            .catch((error) => console.error(error))
            .finally(() => {
                setLoading(false);
            });
    }

    useEffect(() => {
        fetchWorlds();
    }, []);

    if (isLoading)
        return (
            <View style={{flex:2 , justifyContent: 'center', backgroundColor: '#707070'}}>
                <ActivityIndicator size='large' color="#2196f3"/>
            </View>
        );
    else {
        return (
            <WorldsView worldsData={worldsData} navigation={navigation}/>
        )
    }
}