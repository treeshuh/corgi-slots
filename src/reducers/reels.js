// reels reducer
export default function reelsReducer(state = {}, action) {
  console.log(state, action);
  switch (action.type) {
    case 'RECEIVE_REELS':
      return {
        ...state,
        reels: action.reels
      };
      break;

    // initial state
    default:
      return state;
  }
}