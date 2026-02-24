import { combineReducers } from '@reduxjs/toolkit';
import matrixLearningReducer from '../../app/learning-center/matrixLearningSlice';

const rootReducer = combineReducers({
    matrixLearning: matrixLearningReducer,
    // Add other reducers here as needed
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
