import {configureStore} from "@reduxjs/toolkit";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "@redux-devtools/core";
// import { Platform } from "react-native";

import authReducer from "./reducers/authReducer";

// const composeEnhancers = composeWithDevTools({
//   // enable redux devtools only in development mode
//   name: Platform.OS === "ios" ? "iOS App" : "Android App",
//   realtime: true,
//   port: 8000,
// });

export const store = configureStore({
  reducer: {
    auth: authReducer
  },
  // middleware: [thunk],
  // composeEnhancers,
});
