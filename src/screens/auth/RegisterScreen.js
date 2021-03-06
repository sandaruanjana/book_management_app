/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import Animation from 'lottie-react-native';

import {
  Container,
  Content,
  Text,
  Input,
  Form,
  Item,
  Button,
  Label,
} from 'native-base';

import anim from '../../assets/images/auth/book.json';

export default class loginScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.animation.play();
  }

  render() {
    return (
      <Container>
        <Content style={{marginTop: 10}}>
          <Animation
            ref={(animation) => {
              this.animation = animation;
            }}
            style={{
              width: null,
              height: 250,
              left: 25,
            }}
            loop={true}
            source={anim}
          />
          <Text
            style={{
              fontWeight: 'normal',
              fontSize: 20,
              color: '#0a60ff',
              marginLeft: 20,
              marginBottom: 20,
            }}>
            Register
          </Text>

          <Form style={styles.form}>
            <Item floatingLabel style={{margin: 15}}>
              <Label>Email</Label>
              <Input />
            </Item>
            <Item floatingLabel style={{margin: 15}}>
              <Label>Password</Label>
              <Input secureTextEntry={true} />
            </Item>
          </Form>

          <Button
            style={{
              width: '91.5%',
              justifyContent: 'center',
              margin: 15,
              marginTop: 40,
            }}>
            <Text>Create a Account</Text>
          </Button>
          <Button
            bordered
            style={{
              width: '91.5%',
              justifyContent: 'center',
              margin: 15,
            }}
            onPress={() => {
              this.props.navigation.navigate('Login');
            }}>
            <Text>Alredy Have a Account ? Login</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  loginImage: {
    width: null,
    resizeMode: 'contain',
    height: 250,
  },
});
