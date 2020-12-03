import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { ActivityIndicator, View } from 'react-native';
import CharacterView from './CharacterView';

import { BASE_URL } from '../../config/api';

export default function CharacterLogic({ route, navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [characterTitle, setCharacterTitle] = useState([]);
    const [guild, setGuild] = useState([]);
    const characterData = route.params.character;

    useFocusEffect(
        React.useCallback(() => {

            const fetchTitle = async () => {
                await fetch(BASE_URL + `titles/${characterData.title}`, {
                    method: "GET",
                })
                    .then((response) => response.json())
                    .then((json) => setCharacterTitle(json))
                    .catch((error) => console.error(error))
            }

            const fetchGuild = async () => {
                await fetch(BASE_URL + `guild/${characterData.guild}`, {
                    method: "GET",
                })
                    .then((response) => response.json())
                    .then((json) => setGuild(json))
                    .catch((error) => console.error(error))
                    .finally(() => {
                        setLoading(false);
                    });
            }

            fetchTitle();
            fetchGuild();


            return () => {
                setLoading(false);
            };
        }, [route])
    );

    if (isLoading)
        return (
            <View style={{ flex: 2, justifyContent: 'center', backgroundColor: '#707070' }}>
                <ActivityIndicator size='large' color="#2196f3" />
            </View>
        );
    else {
        return (
            <CharacterView title={characterTitle.name} navigation={navigation} characterData={characterData} guild={guild} />
        )
    }
}