import React, { Component } from 'react';
import { View, Text, ImageBackground, Dimensions } from 'react-native';

import { Container, Content, Button, Icon } from 'native-base';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class WalletScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <View style={{ height: 60, elevation: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', paddingHorizontal: 20 }}>
                    <Text style={{ fontSize: 18, fontWeight: '700', letterSpacing: 1, color: '#4242DB' }}>MEDI WALLET</Text>
                </View>
                <Content>
                    <View style={{ alignItems: 'center' }}>
                        <ImageBackground source={require('../../res/images/card.png')} style={{ height: 200, width: windowWidth - 50, elevation: 10, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontWeight: '600', fontSize: 22, marginBottom: 10 }}>Jimoh Christopher</Text>
                            <Text style={{ letterSpacing: 1, fontSize: 14, }}>TOTAL BALANCE</Text>
                            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                <Text>₦</Text>
                                <Text style={{ fontSize: 25, fontWeight: '700', letterSpacing: 2 }}>101</Text>
                                <Text style={{ alignSelf: 'flex-end', fontSize: 15 }}>.70</Text>
                            </View>
                            {/* <View style={{ marginTop: 15, flexDirection: 'row', width: '95%', justifyContent: 'space-between' }}> */}
                                <Button onPress={() => this.props.navigation.navigate('FundWallet')} style={{ paddingRight: 10, backgroundColor: 'white', marginTop: 20 }}>
                                    <Icon name="ios-wallet" style={{ color: 'black'}} />
                                    <Text>Fund Wallet</Text>
                                </Button>
                               
                            {/* </View> */}
                        </ImageBackground>
                        <View style={{ marginTop: 30 }}>
                            <Text style={{ color: '#4242DB', fontSize: 18, fontWeight: 'bold' }}>History</Text>
                            <View style={{ backgroundColor: 'white', height: 330, marginTop: 20, width: windowWidth - 40, elevation: 5, borderTopRightRadius: 20, borderTopLeftRadius: 20, alignItems: 'center', paddingTop: 20, }}>
                                <View style={{ flexDirection: 'row', width: '80%', justifyContent: 'space-between', marginBottom: 20  }}>
                                    <View>
                                        <Text style={{ color: 'black', fontWeight: '700', marginBottom: 10, fontSize: 16 }}>Malaria Treatment</Text>
                                        <Text>Today 12:00PM</Text>
                                    </View>
                                    <Text style={{ color: '#4242DB'}}>₦2000.00</Text>
                                </View>
                                <View style={{ flexDirection: 'row', width: '80%', justifyContent: 'space-between', marginBottom: 20 }}>
                                    <View>
                                        <Text style={{ color: 'black', fontWeight: '700', marginBottom: 10, fontSize: 16 }}>Pysiotheraphy Session</Text>
                                        <Text>Wednesday 1:00PM</Text>
                                    </View>
                                    <Text style={{ color: '#4242DB'}}>₦2000.00</Text>
                                </View>
                                <View style={{ flexDirection: 'row', width: '80%', justifyContent: 'space-between', marginBottom: 20 }}>
                                    <View>
                                        <Text style={{ color: 'black', fontWeight: '700', marginBottom: 10, fontSize: 16 }}>X-ray</Text>
                                        <Text>12/06/19 7:00PM</Text>
                                    </View>
                                    <Text style={{ color: '#4242DB'}}>₦2000.00</Text>
                                </View>
                                
                            </View>
                        </View>
                    </View>

                </Content>
            </Container>
        )
    }
}