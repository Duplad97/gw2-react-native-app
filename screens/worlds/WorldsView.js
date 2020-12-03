import * as React from 'react';
import { View, ScrollView, Dimensions, Text } from 'react-native';
import { TabView } from 'react-native-tab-view';
import IHeader from '../../components/header/Header';

const EuropeRoute = props => (
    <ScrollView style={{ flex: 2, padding: 25, backgroundColor: '#707070'}} >
        <View style={{flex: 2, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 14}}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>Name</Text>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>Population</Text>
        </View>
        {props.worlds.map((world) => {
            if(world.id.toString()[0] === '2') {
                return (
                    <View key={world.id} style={{flex:2, flexDirection:'row', justifyContent:'space-between', marginBottom: 7}}>
                        <Text style={{fontSize: 16}}>{world.name}</Text>
                        <Text style={(world.population === 'Full' &&{color: 'red',fontSize:16}) || (world.population === 'VeryHigh' && {color:'orange',fontSize:16}) || (world.population === 'High' && {color:'yellow',fontSize:16}) || {color:'lightgreen',fontSize:16}}>{world.population}</Text>
                    </View>
                )
            }
        })}
    </ScrollView>
);

const AmericaRoute = props => (
    <ScrollView style={{ flex: 2, padding: 25, backgroundColor: '#707070'}} >
        <View style={{flex: 2, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 14}}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>Name</Text>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>Population</Text>
        </View>
        {props.worlds.map((world) => {
            if(world.id.toString()[0] === '1') {
                return (
                    <View key={world.id} style={{flex:2, flexDirection:'row', justifyContent:'space-between', marginBottom: 7}}>
                        <Text style={{fontSize: 16}}>{world.name}</Text>
                        <Text style={(world.population === 'Full' &&{color: 'red',fontSize:16}) || (world.population === 'VeryHigh' && {color:'orange',fontSize:16}) || (world.population === 'High' && {color:'yellow',fontSize:16}) || {color:'lightgreen',fontSize:16}}>{world.population}</Text>
                    </View>
                )
            }
        })}
    </ScrollView>
);

const initialLayout = { width: Dimensions.get('window').width };

export default function WorldsView(props) {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'europe', title: 'Europe' },
        { key: 'america', title: 'America' },
    ]);

    const renderScene = ({ route }) => {
        switch (route.key) {
          case 'europe':
            return <EuropeRoute worlds={props.worldsData} />;
          case 'america':
            return <AmericaRoute worlds={props.worldsData} />;
          default:
            return null;
        }
      };

    return (
        <View style={{flex: 1}}>
            <IHeader navigation={props.navigation} title="Worlds" />
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={initialLayout}
            />
        </View>
    );
}