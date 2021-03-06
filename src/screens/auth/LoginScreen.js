/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Image} from 'react-native';

import {
  Container,
  Content,
  Text,
  Input,
  Form,
  Item,
  Button,
  Label,
  Icon,
} from 'native-base';

import {Formik} from 'formik';
// import * as yup from 'yup';

const LoginScreen = (props) => {
  // const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  // const loginValidationSchema = yup.object().shape({
  //   phoneNumber: yup
  //     .string()
  //     .max(10)
  //     .matches(phoneRegExp, 'Please enter valid phone number')
  //     .required('Phone number is required'),
  //   password: yup
  //     .string()
  //     .min(3, ({min}) => `Password must be at least ${min} characters`)
  //     .required('Password is required'),
  // });

  return (
    <Container>
      <Content style={{marginTop: 10}}>
        <Image
          style={styles.loginImage}
          source={require('../../assets/images/auth/bb.jpg')}
        />
        <Text
          style={{
            fontWeight: 'normal',
            fontSize: 20,
            color: '#0a60ff',
            marginLeft: 20,
            marginBottom: 20,
            top: 15,
          }}>
          Welcome Back!
        </Text>

        <Formik
          initialValues={{Email: '', password: ''}}
          // validationSchema={loginValidationSchema}
          onSubmit={async (values) => {
            props.navigation.navigate('Home');
          }}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            isValid,
          }) => (
            <Form style={styles.form}>
              <Item floatingLabel style={{margin: 15}}>
                <Label>Email</Label>
                <Input value={values.Email} />
              </Item>
              {errors.Email && (
                <Label style={{fontSize: 10, color: 'red', marginLeft: 17}}>
                  {errors.Email}
                </Label>
              )}
              <Item floatingLabel style={{margin: 15}}>
                <Label>Password</Label>
                <Input
                  secureTextEntry={true}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                />
              </Item>
              {errors.password && (
                <Label style={{fontSize: 10, color: 'red', marginLeft: 17}}>
                  {errors.password}
                </Label>
              )}
              <Button
                style={{
                  width: '91.5%',
                  justifyContent: 'center',
                  margin: 15,
                  marginTop: 30,
                }}
                onPress={handleSubmit}
                disabled={!isValid}>
                <Text>Login</Text>
              </Button>
              <Text
                style={{
                  alignSelf: 'center',
                  fontWeight: 'bold',
                  marginTop: 25,
                }}>
                OR CONNECT WITH
              </Text>
              <Button
                bordered
                rounded
                style={{
                  width: '91.5%',
                  justifyContent: 'center',
                  margin: 15,
                  marginTop: 15,
                  backgroundColor: '#3b5998',
                  borderColor: 'white',
                }}
                onPress={handleSubmit}
                disabled={!isValid}>
                <Icon
                  name="logo-facebook"
                  style={{fontSize: 20, color: 'white'}}
                />
                <Text style={{color: 'white'}}>Login in with Facebook</Text>
              </Button>
              <Button
                bordered
                rounded
                style={{
                  width: '91.5%',
                  justifyContent: 'center',
                  margin: 15,
                  marginTop: 0,
                  backgroundColor: '#dc4a3d',
                  borderColor: 'white',
                }}
                onPress={handleSubmit}
                disabled={!isValid}>
                <Icon
                  name="logo-google"
                  style={{fontSize: 20, color: 'white'}}
                />
                <Text style={{color: 'white'}}>Login in with Google</Text>
              </Button>
            </Form>
          )}
        </Formik>

        <Text style={{alignSelf: 'center', marginTop: '10%'}}>
          Don't have an account?&nbsp;
          <Text
            style={{color: '#3F51B5'}}
            onPress={() => props.navigation.navigate('Register')}>
            Sign Up
          </Text>
        </Text>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  loginImage: {
    width: null,
    resizeMode: 'contain',
    height: 250,
  },
});

export default LoginScreen;
