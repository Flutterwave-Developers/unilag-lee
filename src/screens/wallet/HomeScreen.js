import React, { Component } from 'react';
import { View, Text, Image, Dimensions, ImageBackground } from 'react-native';

import { Content, Container, Button, Icon, Thumbnail } from 'native-base';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <View style={{ flexDirection: 'row', backgroundColor: 'white', height: 70, elevation: 5, alignItems: 'center', paddingHorizontal: 20, justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                        <Thumbnail style={{ marginRight: 10 }} small source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqvN8YSUZYjBDJtbl5ny_Fm5ns3wCOYoseSnYJR_jgQkWP2F5u' }} />
                        <Text style={{ fontSize: 17, letterSpacing: 1 }}>Hi Jimoh</Text>
                    </View>
                    <View>
                        <Text style={{ color: '#4242DB', fontWeight: '700', fontSize: 18 }}>MEDI WALLET</Text>
                    </View>
                </View>
                <Content>
                    <View style={{ height: windowHeight, paddingHorizontal: 20, paddingTop: 20, alignItems: 'center' }}>
                        <ImageBackground source={require('../../res/images/card.png')} style={{ height: 130, width: windowWidth - 50, backgroundColor: 'red', elevation: 10, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ letterSpacing: 1, fontSize: 14, }}>TOTAL BALANCE</Text>
                            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                <Text>₦</Text>
                                <Text style={{ fontSize: 25, fontWeight: '700', letterSpacing: 2 }}>101</Text>
                                <Text style={{ alignSelf: 'flex-end', fontSize: 15 }}>.70</Text>
                            </View>
                        </ImageBackground>

                        <Text style={{ alignSelf: 'flex-start', marginTop: 30, marginBottom: 20, fontSize: 18, color: '#4242DB' }}>Last Transaction</Text>

                        <View style={{borderRadius: 5, elevation: 10, backgroundColor: 'white', width: windowWidth - 50, height: 130, padding: 20, justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                                <View>
                                    <Text style={{ fontWeight: '600', fontSize: 17 }}>Malaria Treatment</Text>
                                    <Text style={{ color: '#00000060'}}>Today 12:00PM</Text>
                                </View>
                                <Text style={{ color: '#4242DB'}}>₦2000.00</Text>
                            </View>

                            <Text style={{ fontSize: 20, color: '#4242DB', letterSpacing: 1}}>Unilag Health Center</Text>
                        </View>



                    </View>
                </Content>
            </Container>
        )
    }
}