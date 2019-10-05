import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';

import { Content, Container, Thumbnail } from 'native-base';

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

export default class ProfileScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Content>
                    <View style={{ height: windowHeight, alignItems: 'center', paddingTop: 40 }}>
                        <Thumbnail large source={{ uri: 'https://via.placeholder.com/300x300' }} />
                        <View style={{ backgroundColor: 'red', height: windowHeight - 30, width: windowWidth}}>

                        </View>
                    </View>
                </Content>
            </Container>
        )
    }
}