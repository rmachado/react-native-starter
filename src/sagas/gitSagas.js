import { FETCH_REPOS, GET_REPOS } from '../actions';
import { call, put, take } from 'redux-saga/effects';

function fetchData(url) {
  return fetch(url)
  .then(e => e.json())
  .then((response) => {
    // console.log(response);
    return response.slice(0,10);
  })
  .catch((error) => {
    console.error(error,"ERRRRRORRR");
    return [];
  });
}

function* getRepoAsync() {
  try{
    yield take(FETCH_REPOS);
    const response = yield call(fetchData, 'https://api.github.com/repositories');
    yield put({ type: GET_REPOS, payload: response });
  }catch(err){
    console.log(err)
  }
}

export default [ getRepoAsync ];
