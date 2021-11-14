let INIT_STATE = {
  isOpenMenu: false,
};

export default function (state = INIT_STATE, action) {
  switch (action.type) {
    case "OPEN_MENU":
      return { ...state, isOpenMenu: true };
    case "CLOSE_MENU":
      return { ...state, isOpenMenu: false };
    default:
      return state;
  }
}
