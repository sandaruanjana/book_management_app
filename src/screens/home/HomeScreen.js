/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from 'react-native-table-component';

import {Text, Button, Container, Content} from 'native-base';

export default function HomeScreen(props) {
  const [table, setTable] = useState({
    tableHead: ['Head', 'Head2', 'Head3', 'Head4'],
    tableData: [
      ['1', '2', '3', '4'],
      ['a', 'b', 'c', 'd'],
      ['1', '2', '3', '456\n789'],
      ['a', 'b', 'c', 'd'],
    ],
  });

  return (
    <Container>
      <Content style={styles.container}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row
            data={table.tableHead}
            style={styles.head}
            textStyle={styles.text}
          />
          <Rows data={table.tableData} textStyle={styles.text} />
        </Table>
        <Button
          style={{
            width: '91.5%',
            justifyContent: 'center',
            margin: 15,
            marginTop: 40,
          }}
          onPress={() => {
            props.navigation.navigate('AddBook');
          }}>
          <Text>Add Book</Text>
        </Button>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'},
  head: {height: 40, backgroundColor: '#f1f8ff'},
  text: {margin: 6},
});
