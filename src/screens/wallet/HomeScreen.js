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
                        <ImageBackground source={require('../../res/images/card.png')} style={{ height: 130, width: windowWidth - 50 , backgroundColor: 'red', elevation: 10, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ letterSpacing: 1, fontSize: 14,}}>TOTAL BALANCE</Text>
                            <View style={{ flexDirection: 'row', marginTop: 10  }}>
                            <Text>₦</Text>
                            <Text style={{ fontSize: 25, fontWeight: '700', letterSpacing: 2 }}>101</Text>
                            <Text style={{ alignSelf: 'flex-end', fontSize: 15}}>.70</Text>
                            </View>
                        </ImageBackground>

                        {/* <Text style={{ fontSize: 22, fontWeight: '700', color: '#4242DB', marginBottom: 30 }}>MEDI WALLET</Text> */}
                        {/* <Text style={{ zIndex: 100, position: 'absolute', top: 150, left: 40, fontSize: 22, fontWeight: '600' }}>Jimoh Odutola</Text>
                        <Text style={{ zIndex: 100, position: 'absolute', top: 250, left: 40, fontSize: 22, fontWeight: '600' }}>₦25,000</Text>

                        <Button style={{ justifyContent: 'center', width: 130, height: 48, elevation: 10, backgroundColor: 'white', borderRadius: 5, position: 'absolute', top: 300, left: 35 }}>
                            <Icon name="ios-send" />
                            <Text>Fund Wallet</Text>
                        </Button>
                        <Button style={{ justifyContent: 'center', width: 130, height: 48, elevation: 10, backgroundColor: 'white', borderRadius: 5, position: 'absolute', top: 300, right: 35 }}>
                            <Icon name="ios-send" />
                            <Text>Make payment</Text>
                        </Button> */}
                        {/* <View style={{ zIndex: 10, width: 320, height: 190, backgroundColor: '#00000020', elevation: 10 }}> */}
                        {/* </View> */}

                    </View>
                </Content>
            </Container>
        )
    }
}