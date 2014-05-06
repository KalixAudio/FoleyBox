/*
FoleyBox
Copyright (C) 2014 Liam Anderson

Gruntfile
 */

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    bowerInstall: {
      target: {
        src: 'source/index.htm'
      }
    },
    clean: {
      build: {
        src: ['build']
      }
    },
    less: {
      build: {
        files: {
          'source/css/main.css': 'source/less/main.less'
        },
        options: {
          ieCompat: false,
          paths: ['source/less/*']
        }
      }
    },
    nodewebkit: {
      options: {
        build_dir: 'build',
        mac: true,
        win: true,
        linux32: false,
        linux64: false
      },
      src: ['source/**/*', '!build/**/*']
    },
    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['bowerInstall'],
        options: {
          debounceDelay: 1000
        }
      },
      styles: {
        files: ['source/less/**/*'],
        tasks: ['less']
      },
      livereload: {
        files: ['source/*.htm', 'source/css/**/*', 'source/js/**/*'],
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-bower-install');
  grunt.loadNpmTasks('grunt-node-webkit-builder');

  grunt.registerTask('compile', ['bowerInstall', 'less']);
  grunt.registerTask('build', ['compile', 'nodewebkit']);

};
