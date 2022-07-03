import * as firebase from './firebase';
import * as date from './date';
import * as check from './check';
import * as resize from './resize';
import * as event from './event';

export default {
  ...firebase,
  ...date,
  ...check,
  ...resize,
  ...event
};
