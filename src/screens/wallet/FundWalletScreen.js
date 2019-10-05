import React, { Component } from 'react';
import { View, Text, Dimensions, ToastAndroid } from 'react-native';

import { Container, Content, Item, Label, Input, Button } from 'native-base';

import { CreditCardInput } from 'react-native-credit-card-input';

// import Rave from 'react-native-rave';


const windowHeight = Dimensions.get('window').height;

export default class FundWalletScreen extends Component {
    constructor(props) {
        super(props);

        this._onCardInput = this._onCardInput.bind(this);
        this.onSuccess = this.onSuccess.bind(this);
        this.onFailure = this.onFailure.bind(this);
        this.onClose = this.onClose.bind(this);

    }

    _onCardInput() {
        //do something
    }

    onSuccess(res) {

    }

    onFailure(res) {

    }

    onClose(res) {

    }

    render() {
        return (
            <Container>
                <Content>
                    <View style={{ height: windowHeight, paddingHorizontal: 20, paddingTop: 40, justifyContent: 'space-around' }}>
                        <View>
                            <Text style={{ fontSize: 20, fontWeight: '700' }}>Fund</Text>
                            <Text style={{ color: '#4242DB', fontWeight: '700', fontSize: 22 }}>MEDI WALLET</Text>
                        </View>


                        <CreditCardInput
                            autoFocus
                            cardImageFront={require('../../res/images/card.png')}
                            cardImageBack={require('../../res/images/card.png')}
                            labelStyle={{ color: '#4242DB' }}
                            onChange={this._onCardInput} />

                        <View>
                            <Text>Amount</Text>
                            <Item inlineLabel>
                                <Label>Input amount  ₦</Label>
                                <Input keyboardType="numeric" />
                            </Item>
                        </View>
                        <Button 
                            onPress={() => {
                                this.props.navigation.navigate('Home');
                                ToastAndroid.show('Wallet credited successfully', ToastAndroid.SHORT);
                            }}
                        style={{ justifyContent: 'center', borderRadius: 5, backgroundColor: '#4242DB' }}>
                            <Text style={{ color: 'white' }}>Fund Wallet</Text>
                        </Button>

                        {/* <Rave
                            amount="500"
                            country="NG"
                            currency="NGN"
                            email="test@mail.com"
                            firstname="Oluwole"
                            lastname="Adebiyi"
                            publickey="FLWPUBK-**************************-X"
                            encryptionkey="****************"
                            meta={[{ metaname: "color", metavalue: "red" }, { metaname: "storelocation", metavalue: "ikeja" }]}
                            onSuccess={res => this.onSuccess(res)}
                            onFailure={e => this.onFailure(e)}
                            onClose={e => this.onClose(e)}
                        /> */}
                    </View>

                </Content>
            </Container>
        )
    }
}