import {INIT, LOADING, DETAIL} from '../constants';

export function init() {
  return function(dispatch){
    dispatch({
      type: LOADING,
      payload: true
    });
    // $.get('https://api.github.com/repositories').then(function(data){
    //   dispatch({
    //     type: INIT,
    //     payload:{
    //       repositories: data
    //     }
    //   });
    //   dispatch({
    //     type: LOADING,
    //     payload: false
    //   });
    // });
  }

};