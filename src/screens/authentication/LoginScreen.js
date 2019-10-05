import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';

import { Content, Container, Item, Label, Input, Button } from 'native-base';

const windowHeight = Dimensions.get('window').height

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Content>
                    <View style={{ height: windowHeight, paddingHorizontal: 20, paddingTop: 100, justifyContent: 'space-around' }}>
                        <View>
                            <Text style={{ fontSize: 22, fontWeight: '700'}}>Welcome to</Text>
                            <Text style={{ fontSize: 22, color: '#4242DB', fontWeight: '700', marginBottom: 30 }}>MEDI WALLET</Text>
                            <Text style={{ fontSize: 30, fontWeight: '700', marginBottom: 5 }}>
                                Log In
                            </Text>
                            <View style={{ borderBottomColor: 'red', borderBottomWidth: 5, width: 40 }}></View>
                        </View>

                        <View>
                            <Item floatingLabel style={{ marginBottom: 20}}>
                                <Label>Email address</Label>
                                <Input />
                            </Item>
                            <Item floatingLabel>
                                <Label>Password</Label>
                                <Input />
                            </Item>
                        </View>
                        <View style={{ alignItems: 'flex-end' }}>
                            <Button transparent>
                                <Text>Forgot Password?</Text>
                            </Button>
                        </View>
                        <Button onPress={() => {
                            this.props.navigation.navigate('App')
                        }} style={{ justifyContent: 'center', borderRadius: 5 }}>
                            <Text style={{ color: 'white' }}>
                                Log In
                            </Text>
                        </Button>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Text>Don't have an account? </Text>
                            <Button onPress={() => this.props.navigation.navigate('Signup')} transparent>
                                <Text style={{ color: '#4242DB' }}>Sign Up</Text>
                            </Button>
                        </View>
                    </View>
                </Content>
            </Container>
        )
    }
}