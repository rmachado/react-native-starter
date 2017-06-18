import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Content, Header, Left, Right, Body, Title, Text, Button, List, ListItem, Icon} from 'native-base';
import { Actions } from 'react-native-router-flux';


class RepoInfo extends Component{
  render(){
    const { activeRepo } = this.props;

    return(
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={Actions.pop}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Repo Info</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <List>
            <ListItem><Text>{activeRepo.full_name}</Text></ListItem>
            <ListItem><Text>{activeRepo.description}</Text></ListItem>
            <ListItem><Text>{activeRepo.id}</Text></ListItem>
            <ListItem><Text>{activeRepo.owner.login}</Text></ListItem>
            <ListItem><Text>{activeRepo.url}</Text></ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

function mapStateToProps(state){
  return{
    activeRepo : state.activeRepo
  };
}

export default connect(mapStateToProps)(RepoInfo);
