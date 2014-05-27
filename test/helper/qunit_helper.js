var failedTests = [];

module.exports = function (grunt) {
  grunt.event.on('qunit.testDone', function (name, failed, passed, total) {
    if (failed > 0) {
      failedTests.push({name: name, count: failed});
    }
  });

  grunt.event.on('qunit.done', function (failed, passed) {
    grunt.log.ok('Passed: ' + passed);

    if (failed > 0) {
      grunt.log.error('Failed: ' + failed);

      failedTests.forEach(function (test) {
        grunt.log.error(test.name + ' ' + test.count);
      });
    }
  });
};
