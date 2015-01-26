Package.describe({
  name: 'ostrio:neo4jreactivity',
  summary: 'Meteor.js Neo4j database pseudo-reactivity layer',
  version: '0.5.0',
  git: 'https://github.com/VeliovGroup/ostrio-Neo4jreactivity.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles(['ostrio:neo4jreactivity_driver.js', 'ostrio:neo4jreactivity_collection.js', 'ostrio:neo4jreactivity_methods.js']);
  api.use('underscore', ['client', 'server']);
  api.use('tracker', 'client');
  api.use('session', 'client');
  api.use('reactive-var', 'client');
  api.use('sha', ['client', 'server']);
  api.use('ostrio:neo4jdriver@0.2.7');
  api.use('meteorhacks:npm@1.2.2');
});

Npm.depends({
  neo4j: '1.1.1',
  fibers: '1.0.2'
});