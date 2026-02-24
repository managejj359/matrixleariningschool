import { call, put, takeLatest } from 'redux-saga/effects';
import axiosInstance from '../../lib/axiosInstance';
import {
    fetchActiveWhatsAppNumber,
    fetchActiveWhatsAppNumberSuccess,
    fetchActiveWhatsAppNumberFailure,
    trackWhatsAppClick,
    trackWhatsAppClickSuccess,
    trackWhatsAppClickFailure,
} from './matrixLearningSlice';
import { WhatsAppNumber } from './types';
import { PayloadAction } from '@reduxjs/toolkit';

function* fetchActiveWhatsAppNumberSaga(): Generator<any, void, any> {
    try {
        const response = yield call(axiosInstance.get, '/whatsapp-numbers/active');
        yield put(fetchActiveWhatsAppNumberSuccess(response.data?.data as WhatsAppNumber));
    } catch (error: any) {
        yield put(fetchActiveWhatsAppNumberFailure(error.message || 'Failed to fetch WhatsApp number'));
    }
}

function* trackWhatsAppClickSaga(action: PayloadAction<string>): Generator<any, void, any> {
    try {
        yield call(axiosInstance.patch, `/whatsapp-numbers/${action.payload}/click`);
        yield put(trackWhatsAppClickSuccess());
    } catch (error: any) {
        yield put(trackWhatsAppClickFailure(error.message || 'Failed to track click'));
    }
}

export default function* matrixLearningSaga() {
    yield takeLatest(fetchActiveWhatsAppNumber.type, fetchActiveWhatsAppNumberSaga);
    yield takeLatest(trackWhatsAppClick.type, trackWhatsAppClickSaga);
}
