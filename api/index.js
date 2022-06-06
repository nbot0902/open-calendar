import * as group from './group';
import * as event from './event';
import * as user from './user';
import * as calendar from './calendar';

export default {
  ...user,
  ...group,
  ...event,
  ...calendar
};
