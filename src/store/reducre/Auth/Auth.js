
export const InitialState = {
  token:null,
  userId: null,
  email:null
};

export const Auth = (state = InitialState, action) => {
  switch (action.type) {
    case "Log_In":
      return {...InitialState,token:"BaiHoGyaTuLogin",userId:5906,email:action.payload.username}

    default:
      return state;
  }
};