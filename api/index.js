import * as group from './group';
import * as event from './event';
import * as myEvent from './my_event';
import * as session from './session';
import * as user from './user';
import * as auth from './auth';
import * as calendar from './calendar';
import * as schedule from './schedule';
import * as dispatch from './dispatch';
import * as support from './support';
import * as advertisement from './advertisement';

export default {
  ...dispatch,
  ...support,
  ...auth,
  ...user,
  ...group,
  ...event,
  ...myEvent,
  ...calendar,
  ...session,
  ...schedule,
  ...advertisement
};
