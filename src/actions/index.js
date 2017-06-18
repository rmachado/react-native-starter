
export const FETCH_REPOS = 'FETCH_REPOS';
export const GET_REPOS = 'GET_REPOS';
export const REPO_SELECTED = 'REPO_SELECTED';


export function getRepos() {
  return {
    type: FETCH_REPOS
  };
}


export function repoSelected(repo){
  return {
    type: REPO_SELECTED,
    payload: repo
  };
}
