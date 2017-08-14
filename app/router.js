import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  // List of orgs
  this.route('orgs', {});

  // Individual org
  this.route('org', {path: 'org/:id'}, function() {
    // list of repos
    this.route('repos', {});
    // individual repos
    this.route('repo', {path: ':repoid'}, function() {
      this.route('contributors', {});
      this.route('issues', {});
    });
  });
  this.route('notfound', {path: '*path'})
});

export default Router;
