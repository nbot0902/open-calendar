import * as event from './event';
import * as user from './user';
import * as group from './group';
import * as session from './session';
import * as service from './service';
import * as advertisement from './advertisement';

export default {
  ...event,
  ...user,
  ...group,
  ...session,
  ...service,
  ...advertisement
};
