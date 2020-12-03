import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import InformationsView from './InformationsView';

import { BASE_URL, API_KEY } from '../../config/api';

export default function InformationsLogic({ navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [tokenData, setTokenData] = useState([]);

    const fetchTokenInfo = () => {
        fetch(BASE_URL + 'tokeninfo', {
            method: "GET",
            headers: {
                Authorization: 'Bearer ' + API_KEY
            }
        })
            .then((response) => response.json())
            .then((json) => setTokenData(json))
            .catch((error) => console.error(error))
            .finally(() => {
                setLoading(false);
            })
    }

    useEffect(() => {
        fetchTokenInfo();
    }, []);

    if (isLoading)
        return (
            <View style={{flex:2 , justifyContent: 'center', backgroundColor: '#707070'}}>
                <ActivityIndicator size='large' color="#2196f3"/>
            </View>
        );
    else {
        return (
            <InformationsView tokenData={tokenData} navigation={navigation}/>
        )
    }
}