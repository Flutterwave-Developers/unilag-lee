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
                    <View style={{ height: windowHeight, }}>
                        <Image style={{ resizeMode: 'center', width: 400, height: 400, marginBottom: 50 }} source={{ uri: 'https://via.placeholder.com/1000x1000' }} />
                        <Button style={{ marginBottom: 10, elevation: 0, width: windowWidth - 100, borderRadius: 0, borderTopRightRadius: 7, justifyContent: 'flex-end', paddingRight: 20 }}>
                            <Text style={{ color: 'white' }}>Sign Up</Text>
                        </Button>
                        <Button style={{ elevation: 0, width: windowWidth - 100, borderRadius: 0, borderBottomRightRadius: 7, backgroundColor: 'transparent', borderColor: 'grey', borderWidth: 1, justifyContent: 'flex-end', paddingRight: 20 }}>
                            <Text>Sign In</Text>
                        </Button>
                        <View style={{ flexDirection: 'row', marginTop: 50, alignItems: 'center', alignSelf: 'center'  }}>
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