export function createMeetupRequest(title, description, date, location) {
  return {
    type: '@meetup/CREATE_MEETUP_REQUEST',
    payload: { title, description, date, location },
  };
}

export function createMeetupSuccess(profile) {
  return {
    type: '@meetup/CREATE_MEETUP_SUCCESS',
    payload: { profile },
  };
}

export function createMeetupFailure() {
  return {
    type: '@meetup/CREATE_MEETUP_FAILURE',
  };
}
