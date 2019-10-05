import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Content, Container } from 'native-base';

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Content>
                    <View>
                        <Text>
                            Log In
                        </Text>
                    </View>

                </Content>
            </Container>
        )
    }
}