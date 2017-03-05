// Jasmine unit tests

require('!!script-loader!reflect-metadata/Reflect.js');

require('zone.js/dist/zone');
require('zone.js/dist/long-stack-trace-zone');
require('zone.js/dist/async-test');
require('zone.js/dist/fake-async-test');
require('zone.js/dist/sync-test');
require('zone.js/dist/proxy');
require('zone.js/dist/jasmine-patch');

require('./posts/posts.component.spec.js');
require('./staticpage/staticpage.component.spec.js');
require('./releases/releases.component.spec.js');
