// Generated on 2014-05-14 using generator-ember 0.8.3
'use strict';
var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({
  port: LIVERELOAD_PORT
});

var mountFolder = function (connect, dir) {
  return connect.static(require('path').resolve(dir));
};
var modRewrite = require('connect-modrewrite'),
  redirectToIndex = modRewrite(['!\\.html|\\.js|\\.svg|\\.css|\\.gif|\\.png(\\?\\d+)?|\\.json$ /index.html [L]']);
var proxySnippet = require('grunt-connect-proxy/lib/utils').proxyRequest;

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
  // show elapsed time at the end
  require('time-grunt')(grunt);
  // load all grunt tasks
  require('load-grunt-tasks')(grunt);

  // configurable paths
  var yeomanConfig = {
    app: 'app',
    dist: 'dist'
  };

  grunt.initConfig({
    yeoman: yeomanConfig,
    watch: {
      emberTemplates: {
        files: '<%= yeoman.app %>/templates/**/*.hbs',
        tasks: ['emberTemplates']
      },
      css: {
        files: '**/*.scss',
        tasks: ['compass']
      },
      neuter: {
        files: ['<%= yeoman.app %>/scripts/{,*/}*.js'],
        tasks: ['neuter']
      },
      livereload: {
        options: {
          middleware: function ( /*connect*/ ) {
            return [redirectToIndex];
          },
          livereload: LIVERELOAD_PORT
        },
        files: [
          '.tmp/scripts/*.js',
          '<%= yeoman.app %>/*.html',
          '{.tmp,<%= yeoman.app %>}/styles/{,*/}*.scss',
          '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      },
      test: {
        tasks: ['copy:tests'],
        options: {
          middleware: function (connect) {
            return [redirectToIndex];
          },
          livereload: LIVERELOAD_PORT
        },
        files: [
          '.tmp/scripts/*.js',
          'test/**/*.{html,js}',
          '<%= yeoman.app %>/*.html',
          '{.tmp,<%= yeoman.app %>}/styles/{,*/}*.scss',
          '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },
    connect: {
      options: {
        port: 9000,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      proxies: [{
        context: '/api',
        host: 'localhost',
        port: 3000,
        https: false,
        changeOrigin: true,
        xforward: false,
        rewrite: {
          '^/api': '/'
        }
      }],
      livereload: {
        options: {
          middleware: function (connect) {
            return [
              proxySnippet,
              redirectToIndex,
              lrSnippet,
              mountFolder(connect, '.tmp'),
              mountFolder(connect, yeomanConfig.app)
            ];
          }
        }
      },
      test: {
        options: {
          port: 9001,
          middleware: function (connect) {
            return [
              proxySnippet,
              redirectToIndex,
              lrSnippet,
              mountFolder(connect, 'test'),
              mountFolder(connect, '.tmp'),
              mountFolder(connect, yeomanConfig.app)
            ];
          }
        }
      },
      dist: {
        options: {
          middleware: function (connect) {
            return [
              mountFolder(connect, yeomanConfig.dist)
            ];
          }
        }
      }
    },
    qunit: {
      urls: {
        options: {
          timeout: 30000,
          urls: [
            'http://localhost:<%= connect.test.options.port %>/test/qunit.html'
          ]
        }
      }
    },
    rails: {
      test: {
        options: {
          environment: 'test'
        }
      }
    },
    open: {
      test: {
        path: 'http://localhost:<%= connect.test.options.port %>/test/qunit.html'
      },
      server: {
        path: 'http://localhost:<%= connect.options.port %>/dashboard/'
      }
    },
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/*',
            '!<%= yeoman.dist %>/.git*'
          ]
        }]
      },
      server: {
        files: [{
          dot: false,
          src: [
            '.sass-cache',
            '<%= yeoman.app %>/styles/**/*.css',
            '.tmp'
          ]
        }]
      },
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        '<%= yeoman.app %>/scripts/{,*/}*.js',
        'test/**/*.js',
        '!test/vendor/{,*/}*.js',
        '!test/helper/gremlins.min.js',
        '!<%= yeoman.app %>/scripts/vendor/*',
        'test/spec/{,*/}*.js'
      ]
    },
    // not used since Uglify task does concat,
    // but still available if needed
    /*concat: {
      dist: {}
    },*/
    // not enabled since usemin task does concat and uglify
    // check index.html to edit your build targets
    // enable this task if you prefer defining your build targets here
    /*uglify: {
      dist: {}
    },*/
    compass: {
      dist: {
        options: { // Target options
          bundleExec: true,
          config: 'compass_config.rb',
          imagesDir: '<%= yeoman.app %>/images/',
          sassDir: '<%= yeoman.app %>/styles/scss/',
          cssDir: '<%= yeoman.app %>/styles/css/'
        },
      }
    },
    rev: {
      dist: {
        files: {
          src: [
            '<%= yeoman.dist %>/scripts/{,*/}*.js',
            '<%= yeoman.dist %>/styles/{,*/}*.css',
            '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp}',
            '<%= yeoman.dist %>/styles/fonts/*'
          ]
        }
      }
    },
    useminPrepare: {
      html: '.tmp/index.html',
      options: {
        dest: '<%= yeoman.dist %>'
      }
    },
    usemin: {
      html: ['<%= yeoman.dist %>/{,*/}*.html'],
      css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
      options: {
        dirs: ['<%= yeoman.dist %>']
      }
    },
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.{png,jpg,jpeg}',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.svg',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },
    cssmin: {
      dist: {
        files: {
          '<%= yeoman.dist %>/styles/main.css': [
            '.tmp/styles/{,*/}*.css',
            '<%= yeoman.app %>/styles/{,*/}*.css'
          ]
        }
      }
    },
    htmlmin: {
      dist: {
        options: {
          /*removeCommentsFromCDATA: true,
          // https://github.com/yeoman/grunt-usemin/issues/44
          //collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeOptionalTags: true*/
        },
        files: [{
          expand: true,
          cwd: '.tmp',
          src: '*.html',
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    replace: {
      app: {
        options: {
          variables: {
            ember: 'bower_components/ember/ember.js',
            ember_data: 'bower_components/ember-data/ember-data.js',
            base_href: '/'
          }
        },
        files: [{
          src: '<%= yeoman.app %>/index.html',
          dest: '.tmp/index.html'
        }]
      },
      dist: {
        options: {
          variables: {
            ember: 'bower_components/ember/ember.prod.js',
            ember_data: 'bower_components/ember-data/ember-data.prod.js',
            base_href: 'http://ohtu.venuu.fi/'
          }
        },
        files: [{
          src: '<%= yeoman.app %>/index.html',
          dest: '.tmp/index.html'
        }]
      }
    },
    // Put files not handled in other tasks here
    copy: {
      tests: {
        files: [{
          expand: true,
          flatten: false,
          dest: '.tmp/',
          src: [
            'test/**'
          ]
        }]
      },
      fonts: {
        files: [{
          expand: true,
          flatten: true,
          filter: 'isFile',
          cwd: '<%= yeoman.app %>/bower_components/',
          dest: '<%= yeoman.app %>/styles/fonts/',
          src: [
            'bootstrap-sass/dist/fonts/**', // Bootstrap
            'fontawesome/fonts/**' // Font-Awesome
          ]
        }]
      },
      styles: {
        files: [{
          expand: true,
          flatten: true,
          filter: 'isFile',
          cwd: '<%= yeoman.app %>/bower_components/',
          dest: '<%= yeoman.app %>/styles/vendor/',
          src: [
            'chosen-build/chosen.css'
          ]
        }]
      },
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.dist %>',
          src: [
            '*.{ico,txt}',
            'images/{,*/}*.{webp,gif}',
            'styles/fonts/*',
            'styles/vendor/chosen.css'
          ]
        }]
      }
    },
    concurrent: {
      server: [
        'emberTemplates',
      ],
      test: [
        'emberTemplates'
      ],
      dist: [
        'emberTemplates',
        //'imagemin',
        'svgmin',
        'htmlmin'
      ]
    },
    emberTemplates: {
      options: {
        templateName: function (sourceFile) {
          var templatePath = yeomanConfig.app + '/templates/';
          return sourceFile.replace(templatePath, '');
        }
      },
      dist: {
        files: {
          '.tmp/scripts/compiled-templates.js': '<%= yeoman.app %>/templates/{,*/}*.hbs'
        }
      }
    },
    neuter: {
      app: {
        options: {
          filepathTransform: function (filepath) {
            return yeomanConfig.app + '/' + filepath;
          }
        },
        src: '<%= yeoman.app %>/scripts/app.js',
        dest: '.tmp/scripts/combined-scripts.js'
      }
    }
  });

  require('./test/helper/qunit_helper')(grunt);

  grunt.registerTask('backendDir', function (target) {
    grunt.file.setBase('backend/');
  });

  grunt.registerTask('dirUp', function (target) {
    grunt.file.setBase('../');
  });

  grunt.registerTask('backendStart', function (target) {
    target = target ||  'server';
    grunt.task.run(['backendDir', 'rails:' + target + ':start', 'dirUp']);
  });

  grunt.registerTask('serve', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['backendStart', 'build', 'open', 'connect:dist:keepalive']);
    }

    if (target === 'test') {
      return grunt.task.run([
        'backendStart:test',
        'clean:server',
        'replace:app',
        'compass',
        'copy:tests',
        'concurrent:test',
        'neuter:app',
        'copy:fonts',
        'configureProxies',
        'connect:test',
        'open:test',
        'watch'
      ]);
    }

    grunt.task.run([
      'backendStart',
      'clean:server',
      'replace:app',
      'compass',
      'concurrent:server',
      'neuter:app',
      'copy:fonts',
      'copy:styles',
      'configureProxies',
      'connect:livereload',
      'open:server',
      'watch'
    ]);
  });

  grunt.registerTask('test', [
    'backendStart',
    'clean:server',
    'replace:app',
    'copy:tests',
    'compass',
    'concurrent:test',
    'neuter:app',
    'configureProxies',
    'connect:test',
    'qunit',
    'jshint'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'replace:dist',
    'compass',
    'useminPrepare',
    'concurrent:dist',
    'neuter:app',
    'concat',
    'cssmin',
    'uglify',
    'copy',
    //'rev',
    'usemin'
  ]);

  grunt.registerTask('default', [
    'jshint',
    'test',
    'build'
  ]);
};
