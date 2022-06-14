import * as app from './app';
import * as group from './group';
import * as event from './event';
import * as user from './user';
import * as calendar from './calendar';
import * as schedule from './schedule';

export default {
  ...app,
  ...group,
  ...event,
  ...user,
  ...calendar,
  ...schedule,
};
