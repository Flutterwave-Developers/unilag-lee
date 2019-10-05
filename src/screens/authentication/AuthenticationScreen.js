import React, { Component } from 'react';
import { View, Text, Dimensions, Image } from 'react-native';

import { Container, Content, Button, Footer } from 'native-base';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default class AuthenticationScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Content>
                    <View style={{ height: windowHeight, justifyContent: 'space-around', paddingTop: 50 }}>
                        <Text style={{ color: "#4242DB", fontWeight: '700', alignSelf: 'center', fontSize: 20, marginBottom: 20,  }}>MEDI WALLET</Text>
                        <Image style={{ resizeMode: 'contain', width: 300, height: 300, alignSelf: 'center', marginBottom: 40 }} source={require('../../res/images/background.png')} />
                        <View>
                            <Button style={{ marginBottom: 10, elevation: 0, width: windowWidth - 100, borderRadius: 0, borderTopRightRadius: 7, justifyContent: 'flex-end', paddingRight: 20, backgroundColor: '#4242DB' }}>
                                <Text style={{ color: 'white' }}>Sign Up</Text>
                            </Button>
                            <Button style={{ elevation: 1, width: windowWidth - 100, borderRadius: 0, borderBottomRightRadius: 7, backgroundColor: 'transparent', borderColor: 'grey', borderWidth: 1, justifyContent: 'flex-end', paddingRight: 20 }}>
                                <Text>Sign In</Text>
                            </Button>
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 50, alignItems: 'center', alignSelf: 'center' }}>
                            <Text style={{ letterSpacing: 1, }}>Not sure yet? </Text>
                            <Button transparent>
                                <Text style={{ color: '#4242DB', letterSpacing: 1 }}>
                                    Let's take a look
                                </Text>
                            </Button>
                        </View>
                    </View>

                </Content>

            </Container>
        )
    }
}