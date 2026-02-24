import { all } from 'redux-saga/effects';
import matrixLearningSaga from '../../app/learning-center/matrixLearningSaga';

export default function* rootSaga() {
    yield all([
        matrixLearningSaga(),
        // Add other sagas here as needed
    ]);
}
