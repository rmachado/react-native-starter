import { REPO_SELECTED } from '../actions';

export default function(state=null, action){
  switch (action.type) {
    case REPO_SELECTED:
      return action.payload;
      break;
  }
  return state;
}
