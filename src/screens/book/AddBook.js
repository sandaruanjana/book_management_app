/* eslint-disable react-native/no-inline-styles */
import React from 'react';

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

import {Formik} from 'formik';

export default function AddBook(props) {
  return (
    <Container>
      <Content style={{marginTop: 50}}>
        <Text
          style={{
            fontWeight: 'normal',
            fontSize: 20,
            color: '#0a60ff',
            marginLeft: 20,
            marginBottom: 20,
          }}>
          Add a new book
        </Text>

        <Formik
          initialValues={{phoneNumber: '', password: ''}}
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
            <Form>
              <Item floatingLabel style={{margin: 15}}>
                <Label>ISBN</Label>
                <Input value={values.ISBN} />
              </Item>
              {errors.ISBN && (
                <Label style={{fontSize: 10, color: 'red', marginLeft: 17}}>
                  {errors.ISBN}
                </Label>
              )}
              <Item floatingLabel style={{margin: 15}}>
                <Label>Author</Label>
                <Input value={values.Author} />
              </Item>
              {errors.Author && (
                <Label style={{fontSize: 10, color: 'red', marginLeft: 17}}>
                  {errors.Author}
                </Label>
              )}
              <Item floatingLabel style={{margin: 15}}>
                <Label>Publisher</Label>
                <Input value={values.Publisher} />
              </Item>
              {errors.Publisher && (
                <Label style={{fontSize: 10, color: 'red', marginLeft: 17}}>
                  {errors.Publisher}
                </Label>
              )}
              <Item floatingLabel style={{margin: 15}}>
                <Label>Price</Label>
                <Input value={values.Price} />
              </Item>
              {errors.Publisher && (
                <Label style={{fontSize: 10, color: 'red', marginLeft: 17}}>
                  {errors.Price}
                </Label>
              )}
              <Button
                style={{
                  width: '91.5%',
                  justifyContent: 'center',
                  margin: 15,
                  marginTop: 40,
                }}
                onPress={handleSubmit}
                disabled={!isValid}>
                <Text>Add Book</Text>
              </Button>
            </Form>
          )}
        </Formik>
      </Content>
    </Container>
  );
}
