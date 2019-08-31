import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import { createMeetupFailure } from './actions';
import history from '~/services/history';

export function* signUp({ payload }) {
  try {
    const { title, description, date, location } = payload;

    yield call(api.post, 'meetups', {
      title,
      description,
      date,
      location,
    });

    history.push('/dashboard');
  } catch (err) {
    toast.error('Falha no cadastro, verifique seus dados!');

    yield put(createMeetupFailure());
  }
}

export default all([takeLatest('@meetup/CREATE_MEETUP_REQUEST', signUp)]);
