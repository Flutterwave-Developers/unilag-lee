import React, { Component } from 'react';
import { View, Text, ImageBackground, Dimensions, Image } from 'react-native';

import { Container, Content, Button, Icon } from 'native-base';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class HospitalScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <View style={{ height: 60, elevation: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', paddingHorizontal: 20 }}>
                    <Text style={{ fontSize: 18, fontWeight: '700', letterSpacing: 1, color: '#4242DB' }}>HOSPITALS</Text>
                </View>
                <Content>
                    <View style={{ alignItems: 'center' }}>

                        <View style={{ flexDirection: 'row', width: '80%', justifyContent: 'space-between', marginBottom: 20, elevation: 10, backgroundColor: 'white', padding: 20 }}>
                            <Image style={{ resizeMode: 'center', height: 100, width: 100 }} source={{ uri: 'https://via.placeholder.com/300x300' }} />

                            <View>
                                <Text style={{ color: 'black', fontWeight: '700', marginBottom: 10, fontSize: 16 }}>Unilag Health Center</Text>
                                <Text>University of Lagos, Akoka</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', width: '80%', justifyContent: 'space-between', marginBottom: 20, elevation: 10, backgroundColor: 'white', padding: 20 }}>
                            <Image style={{ resizeMode: 'center', height: 100, width: 100 }} source={{ uri: 'https://via.placeholder.com/300x300' }} />

                            <View>
                                <Text style={{ color: 'black', fontWeight: '700', marginBottom: 10, fontSize: 16 }}>Unilag Health Center</Text>
                                <Text>University of Lagos, Akoka</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', width: '80%', justifyContent: 'space-between', marginBottom: 20, elevation: 10, backgroundColor: 'white', padding: 20 }}>
                            <Image style={{ resizeMode: 'center', height: 100, width: 100 }} source={{ uri: 'https://via.placeholder.com/300x300' }} />

                            <View>
                                <Text style={{ color: 'black', fontWeight: '700', marginBottom: 10, fontSize: 16 }}>Unilag Health Center</Text>
                                <Text>University of Lagos, Akoka</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', width: '80%', justifyContent: 'space-between', marginBottom: 20, elevation: 10, backgroundColor: 'white', padding: 20 }}>
                            <Image style={{ resizeMode: 'center', height: 100, width: 100 }} source={{ uri: 'https://via.placeholder.com/300x300' }} />

                            <View>
                                <Text style={{ color: 'black', fontWeight: '700', marginBottom: 10, fontSize: 16 }}>Unilag Health Center</Text>
                                <Text>University of Lagos, Akoka</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', width: '80%', justifyContent: 'space-between', marginBottom: 20, elevation: 10, backgroundColor: 'white', padding: 20 }}>
                            <Image style={{ resizeMode: 'center', height: 100, width: 100 }} source={{ uri: 'https://via.placeholder.com/300x300' }} />

                            <View>
                                <Text style={{ color: 'black', fontWeight: '700', marginBottom: 10, fontSize: 16 }}>Unilag Health Center</Text>
                                <Text>University of Lagos, Akoka</Text>
                            </View>
                        </View>

                    </View>

                </Content>
            </Container>
        )
    }
}