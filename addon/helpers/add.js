import Ember from 'ember';

export function add(params/*, hash*/) {
  return params.reduce((a, b) => a + b);
}

export default Ember.Helper.helper(add);
