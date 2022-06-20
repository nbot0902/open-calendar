import * as firebase from './firebase';
import * as date from './date';
import * as check from './check';
import * as resize from './resize';

export default {
  ...firebase,
  ...date,
  ...check,
  ...resize
};
