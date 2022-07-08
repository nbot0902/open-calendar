import * as app from './app';
import * as group from './group';
import * as event from './event';
import * as myEvent from './my_event';
import * as user from './user';
import * as calendar from './calendar';
import * as schedule from './schedule';
import * as advertisement from './advertisement';

export default {
  ...app,
  ...group,
  ...event,
  ...myEvent,
  ...user,
  ...calendar,
  ...schedule,
  ...advertisement
};
