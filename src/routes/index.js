import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';
import MeetupDetail from '~/pages/MeetupDetail';
import NewMeetup from '~/pages/NewMeetup';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/meetup" component={MeetupDetail} isPrivate />
      <Route path="/new-meetup" component={NewMeetup} isPrivate />
    </Switch>
  );
}
