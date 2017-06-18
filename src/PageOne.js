import React, { Component } from 'react';
import { Container, Content, Text, Card, Header, Body, Button, Title, CardItem } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class PageOne extends Component {
  render(){
    return (
      <Container>
        <Header>
          <Body>
            <Title>Page One</Title>
          </Body>
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>This is Page One, Press button to goto page two</Text>
              </Body>
            </CardItem>
          </Card>
          <Button primary onPress={Actions.pageTwo}>
            <Text>Goto Page 2</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
