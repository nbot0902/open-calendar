import * as group from './group';
import * as event from './event';
import * as session from './session';
import * as user from './user';
import * as auth from './auth';
import * as calendar from './calendar';
import * as schedule from './schedule';
import * as dispatch from './dispatch';

export default {
  ...dispatch,
  ...auth,
  ...user,
  ...group,
  ...event,
  ...calendar,
  ...session,
  ...schedule,
};
