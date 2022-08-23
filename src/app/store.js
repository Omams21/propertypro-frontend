import { configureStore } from '@reduxjs/toolkit';
import agentReducer from '../slice/signupslice' ;
import propertyReducer from '../slice/propertyslice'; 

export default configureStore({
  reducer: {
    agent: agentReducer,
    property: propertyReducer,
  }
})