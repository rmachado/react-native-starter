import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Container, Content, Text, Card, Header, Left, Right, Body, Button, Title, CardItem,
  Spinner, List, ListItem, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

import {getRepos, repoSelected} from '../actions';

class RepoList extends Component {
  componentWillMount(){
    this.props.getRepos();
  }

  render(){
    const { repos, repoSelected } = this.props;
    let content = null;

    if(repos.length > 0) {
      content = (
        <Content>
          <List
            dataArray={repos}
            renderRow={(item) =>
              <ListItem onPress={() => { Actions.RepoInfo(); repoSelected(item)}}>
                <Text>{item.full_name}</Text>
              </ListItem>
            }/>
       </Content>
      );
    } else {
      content = (
        <Content>
          <Text>Loading your repo List, Please wait</Text>
          <Spinner />
        </Content>
      );
    }

    return (
      <Container>
        <Header androidStatusBarColor='green'>
          <Left>
            <Button transparent onPress={Actions.pop}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Repo List</Title>
          </Body>
          <Right />
        </Header>
        {content}
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    repos: state.repos
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    getRepos: getRepos,
    repoSelected: repoSelected
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RepoList);
