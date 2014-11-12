module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                options: {
                    noCache: true
                },
                files: {
                    'css/main.css': 'sass/main.sass'
                }
            }
        },

        concat: {

            dist: {
                options: {
                    banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd h:MM:ss TT") %> */\n'
                },
                files: {
                    'css/main.css': ['bower_components/normalize.css/normalize.css','bower_components/bootstrap/dist/css/bootrap.css','bower_components/bootswatch/flatly/bootstrap.css']
                }

            }
        },

        watch: {
            options: {
                livereload: true
            },
            css: {
                files: 'sass/**/*.sass',
                tasks: ['sass', 'autoprefixer', 'concat']

            },
            html: {
                files: '*.html'

            }
        },

        connect: {
            options: {
                port: 9001,
                livereload: 35729,
                // change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    open: true,
                    base: [
                        '.'
                    ]
                }
            }
        },
        /*addd webkit*/
        autoprefixer: {
            single_file: {
                src: 'css/main.css',
                dest: 'css/main.css'
            }
        },

        copy: {
            main: {
                files: [
                    {expand: true, cwd: 'bower_components/modernizr',src: 'modernizr.js',dest: 'js'},
                    {expand: true, cwd: 'bower_components/bootstrap/dist/js',src: 'bootstrap.js',dest: 'js'},
                    {expand: true, cwd: 'bower_components/jquery/dist',src: 'jquery.js',dest: 'js'},
                    {expand: true, cwd: 'bower_components/html5shiv/dist',src: 'html5shiv.js',dest: 'js'},
                    {expand: true, cwd: 'bower_components/respond/src',src: 'respond.js',dest: 'js'},
                    {expand: true, cwd: 'bower_components/mustache',src: 'mustache.js',dest: 'js'}
                ]

            }
        }

    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default',['concat', 'autoprefixer', 'copy', 'watch']);
    grunt.registerTask('server', ['connect', 'default']);
}

