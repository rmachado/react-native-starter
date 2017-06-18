import React, { Component } from 'react';
import { Container, Content, Text, Card, Header, Left, Right, Body, Button, Title, CardItem } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Welcome extends Component {
  render(){
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Welcome</Title>
          </Body>
          <Right />
        </Header>
        <Content contentContainerStyle={styles.content}>
          <Card>
            <CardItem>
              <Body>
                <Text>Welcome to Candy Land Folks ;)</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Text>Press Button to fetch Github Repos</Text>
            </CardItem>
          </Card>
          <Button dark block onPress={Actions.RepoList} style={styles.button}>
            <Text>Fetch Github Repos</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles ={
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
    paddingHorizontal: 10
  },
  button: {
    marginTop: 40
  }
};
