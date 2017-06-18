import { GET_REPOS } from '../actions';

let gitRepos= [];

export default function(state=gitRepos, action){
  switch (action.type) {
    case GET_REPOS: {
      gitRepos = action.payload;
      return gitRepos;
    }
    break;
  }
  return gitRepos;
}
