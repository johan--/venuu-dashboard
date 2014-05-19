var passedTests = [];
var failedTests = [];
var fails = 0;

module.exports = function (grunt) {
  grunt.event.on('qunit.testDone', function (name, failed, passed, total) {
    if (failed > 0) {
      failedTests[name] = 'failed: ' + failed;
    }
    if (passed > 0) {
      passedTests[name] = 'passed: ' + passed;
    }
  });


  grunt.event.on('qunit.done', function (failed, passed) {
    grunt.log.ok('Passed: ' + passed);
    if (failed > 0) {
      grunt.log.error('Failed: ' + failed);
    }
    fails = failed;
  });

  grunt.registerTask('qunitTests', 'Test to see if qunit task actually worked.', function () {
    var assert = require('assert');

    try {
      assert.equal(fails === 0, true, 'All tests should pass.');
    } catch (err) {
      grunt.log.subhead(fails + ' tests failed');
      for (var key in failedTests) {
        grunt.log.error(key + ' ' + failedTests[key]);
      }
      throw new Error(err.message);
    }
  });
};