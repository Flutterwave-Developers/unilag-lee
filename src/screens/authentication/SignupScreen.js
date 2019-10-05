import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';

import { Content, Container, Item, Label, Input, Button } from 'native-base';

const windowHeight = Dimensions.get('window').height

export default class SignupScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Content>
                    <View style={{ height: windowHeight, paddingHorizontal: 20, paddingTop: 100, justifyContent: 'space-around' }}>
                        <View style={{ marginBottom: 10 }}>
                            <Text style={{ fontSize: 22, fontWeight: '700' }}>Welcome to</Text>
                            <Text style={{ fontSize: 22, color: '#4242DB', fontWeight: '700', marginBottom: 30 }}>MEDI WALLET</Text>
                            <Text style={{ fontSize: 30, fontWeight: '700', marginBottom: 5 }}>
                                Sign Up
                        </Text>
                            <View style={{ borderBottomColor: 'red', borderBottomWidth: 5, width: 40 }}></View>
                        </View>

                        <View>
                            <Item floatingLabel style={{ marginBottom: 20 }}>
                                <Label>Full name</Label>
                                <Input />
                            </Item>
                            <Item floatingLabel style={{ marginBottom: 20 }}>
                                <Label>Email address</Label>
                                <Input />
                            </Item>
                            <Item floatingLabel style={{ marginBottom: 20 }}>
                                <Label>Password</Label>
                                <Input />
                            </Item>
                            <Item floatingLabel>
                                <Label>Confirm Password</Label>
                                <Input />
                            </Item>
                        </View>
                        <View style={{ alignItems: 'flex-end' }}>
                            <Button transparent>
                                <Text>Forgot Password?</Text>
                            </Button>
                        </View>
                        <Button onPress={() => {
                            this.props.navigation.navigate('Login')
                        }} style={{ justifyContent: 'center', borderRadius: 5 }}>
                            <Text style={{ color: 'white' }}>
                                Sign Up
                            </Text>
                        </Button>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Text>Already have an account? </Text>
                            <Button onPress={() => {
                                this.props.navigation.navigate('Login')
                            }} transparent>
                                <Text style={{ color: '#4242DB' }}>Log In</Text>
                            </Button>
                        </View>
                    </View>
                </Content>
            </Container>
        )
    }
}