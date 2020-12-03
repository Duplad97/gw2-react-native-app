import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import AccountView from './AccountView';
import { BASE_URL, API_KEY } from '../../config/api';

export default function AccountLogic({ navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [accountData, setAccountData] = useState([]);
    const [characterData, setCharacterData] = useState([]);

    const fetchAccount = () => {
        fetch(BASE_URL + 'account', {
            method: "GET",
            headers: {
                Authorization: 'Bearer ' + API_KEY
            }
        })
            .then((response) => response.json())
            .then((json) => setAccountData(json))
            .catch((error) => console.error(error))
    }

    const fetchCharacters = () => {
        fetch(BASE_URL + 'characters', {
            method: "GET",
            headers: {
                Authorization: 'Bearer ' + API_KEY
            }
        })
            .then((response) => response.json())
            .then((json) => setCharacterData(json))
            .catch((error) => console.error(error))
            .finally(() => {
                setLoading(false)
            })
    }

    useEffect(() => {
        fetchAccount();
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
            <AccountView accountData={accountData} characterNum={characterData.length} navigation={navigation}/>
        )
    }
}