// Generated on 2014-11-01 using generator-angular 0.9.8
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// '<%= yeoman.test %>/spec/**/*.js'
// use this if you want to recursively match all subfolders:
// '<%= yeoman.test %>/spec/**/*.js'

module.exports = function(grunt) {

	// DEFINE CONFIG VARIABLES
	var LIVERELOAD_PORT = 35728, HOSTNAME = 'localhost', CONNECT_PORT = 9098, TEST_PORT = 9099;

	// Load grunt tasks automatically
	require('load-grunt-tasks')(grunt);

	// Time how long tasks take. Can help when optimizing build times
	require('time-grunt')(grunt);

	// Configurable paths for the application
	var appConfig = {
		frontend : 'src/frontend',
		app : 'src/frontend/app',
		dist : 'src/frontend/dist',
		temp : 'src/frontend/.temp',
		test : 'src/frontend/test',
		bowerComponents : 'src/frontend/bower_components',
		templates : 'src/templates',
		static : 'src/static'

	};

	// Define the configuration for all the tasks
	grunt.initConfig({

		// Project settings
		yeoman : appConfig,

		// Make sure code styles are up to par and there are no obvious mistakes
		jshint : {
			options : {
				jshintrc : '.jshintrc',
				reporter : require('jshint-stylish')
			},
			all : {
				src : [
					'Gruntfile.js',
					'<%= yeoman.app %>/scripts/**/*.js'
				]
			},
			test : {
				options : {
					jshintrc : '<%= yeoman.test %>/.jshintrc'
				},
				src : [
					'<%= yeoman.test %>/spec/**/*.js'
				]
			}
		},

		// Empties folders to start fresh
		clean : {
			dist : {
				files : [
					{
						dot : true,
						src : [
							'<%= yeoman.temp %>',
							'<%= yeoman.frontend %>/.sass-cache',
							'<%= yeoman.dist %>/**/*',
							'!<%= yeoman.dist %>/.git*'
						]
					}
				]
			},
			deploy : [
				'<%= yeoman.templates %>/*',
				'<%= yeoman.static %>/*'
			],
			server : [
				'<%= yeoman.temp %>',
				'<%= yeoman.frontend %>/.sass-cache',
				'<%= yeoman.dist %>'
			]
		},

		// Include your sources into your HTML files automatically.
		includeSource : {
			options : {
				basePath : '<%= yeoman.app %>',
				baseUrl : ''
			},
			dist : {
				files : {
					'<%= yeoman.temp %>/index.html' : '<%= yeoman.app %>/index.html',
					'<%= yeoman.app %>/index.html' : '<%= yeoman.app %>/index.html'
				}
			},
			server : {
				files : {
					'<%= yeoman.temp %>/index.html' : '<%= yeoman.app %>/index.html'
				}
			}
		},

		// Automatically inject Bower components into the app
		wiredep : {
			app : {
				src : [
					'<%= yeoman.app %>/index.html'
				],
				ignorePath : /\.\.\//,
			},
			sass : {
				src : [
					'<%= yeoman.app %>/styles/**/*.{scss,sass}'
				],
				ignorePath : '<%= yeoman.bowerComponents %>'
			},

		},

		// Compiles Sass to CSS and generates necessary files if requested
		compass : {
			options : {
				sassDir : '<%= yeoman.app %>/styles',
				cssDir : '<%= yeoman.temp %>/styles',
				generatedImagesDir : '<%= yeoman.temp %>/images/generated',
				imagesDir : '<%= yeoman.app %>/images',
				javascriptsDir : '<%= yeoman.app %>/scripts',
				fontsDir : '<%= yeoman.app %>/styles/fonts',
				importPath : '<%= yeoman.bowerComponents %>',
				cacheDir : '<%= yeoman.frontend %>/.sass-cache',
				httpImagesPath : '/images',
				httpGeneratedImagesPath : '/images/generated',
				httpFontsPath : '/styles/fonts',
				relativeAssets : false,
				assetCacheBuster : false,
				raw : 'Sass::Script::Number.precision = 10\n'
			},
			dist : {
				options : {
					generatedImagesDir : '<%= yeoman.dist %>/images/generated'
				}
			},
			server : {
				options : {
					debugInfo : true
				}
			}
		},

		// Reads HTML for usemin blocks to enable smart builds that automatically
		// concat, minify and revision files. Creates configurations in memory so
		// additional tasks can operate on them
		useminPrepare : {
			html : '<%= yeoman.app %>/index.html',
			options : {
				root : '<%= yeoman.frontend %>',
				dest : '<%= yeoman.dist %>',
				staging : '<%= yeoman.temp %>',
				flow : {
					html : {
						steps : {
							js : [
								'concat'
							// 'uglifyjs'
							],
							css : [
								'concat'
							// 'cssmin'
							],
							jsDevel : [
								'concat'
							],
							cssDevel : [
								'concat'
							],

						},
						post : {}
					}
				}
			}
		},

		// Performs rewrites based on filerev and the useminPrepare configuration
		usemin : {
			html : [
				'<%= yeoman.dist %>/**/*.html'
			],
			css : [
				'<%= yeoman.dist %>/styles/**/*.css'
			],
			options : {
				assetsDirs : [
					'<%= yeoman.dist %>',
					'<%= yeoman.dist %>/images'
				],
				blockReplacements : {
					jsDevel : function(block) {
						return '<script src="{% static ' + "'" + block.dest + "'" + ' %}"></script>';
					},
					cssDevel : function(block) {
						return '<link rel="stylesheet" href="{% static ' + "'" + block.dest + "'" + ' %}">';
					}
				}
			}
		},

		bridge : {
			dist : {
				options : {
					pattern : '{% static \'{path}\' %}',
					html : '<%= yeoman.dist %>/index.html',
					dest : '<%= yeoman.dist %>/index.html'
				}
			}
		},

		imagemin : {
			dist : {
				files : [
					{
						expand : true,
						cwd : '<%= yeoman.app %>/images',
						src : '**/*.{png,jpg,jpeg,gif}',
						dest : '<%= yeoman.dist %>/images'
					}
				]
			}
		},

		svgmin : {
			dist : {
				files : [
					{
						expand : true,
						cwd : '<%= yeoman.app %>/images',
						src : '**/*.svg',
						dest : '<%= yeoman.dist %>/images'
					}
				]
			}
		},

		htmlmin : {
			dist : {
				options : {
					collapseWhitespace : true,
					conservativeCollapse : true,
					collapseBooleanAttributes : true,
					removeCommentsFromCDATA : true,
					removeOptionalTags : false
				},
				files : [
					{
						expand : true,
						cwd : '<%= yeoman.dist %>',
						src : [
							'*.html',
							'views/**/*.html'
						],
						dest : '<%= yeoman.dist %>'
					}
				]
			}
		},

		// ng-annotate tries to make the code safe for minification automatically
		// by using the Angular long form for dependency injection.
		ngAnnotate : {
			dist : {
				files : [
					{
						expand : true,
						cwd : '<%= yeoman.temp %>/concat/scripts',
						src : [
							'*.js',
							'!oldieshim.js'
						],
						dest : '<%= yeoman.temp %>/concat/scripts'
					}
				]
			}
		},

		// Copies remaining files to places other tasks can use
		copy : {
			dist : {
				files : [
					{
						expand : true,
						dot : true,
						cwd : '<%= yeoman.app %>',
						dest : '<%= yeoman.dist %>',
						src : [
							'*.{ico,png,txt}',
							'.htaccess',
							'*.html',
							'views/*.html',
							'images/**/*.{webp}',
							'fonts/*',
							'locales/**/*.json'
						]
					},
					{
						expand : true,
						cwd : '<%= yeoman.temp %>/images',
						dest : '<%= yeoman.dist %>/images',
						src : [
							'generated/*'
						]
					},
					{
						expand : true,
						flatten : true,
						filter : 'isFile',
						cwd : '.',
						src : '<%= yeoman.bowerComponents %>/bootstrap-sass-official/assets/fonts/bootstrap/**',
						dest : '<%= yeoman.dist %>/fonts/bootstrap/'
					},
					{
						expand : true,
						flatten : true,
						filter : 'isFile',
						cwd : '.',
						src : '<%= yeoman.bowerComponents %>/font-awesome/fonts/**',
						dest : '<%= yeoman.dist %>/fonts/'
					}
				]
			},
			deploy : {
				files : [
					{
						expand : true,
						dot : true,
						cwd : '<%= yeoman.dist %>',
						dest : '<%= yeoman.templates %>',
						src : [
							'*.html'
						]
					},
					{
						expand : true,
						dot : true,
						cwd : '<%= yeoman.dist %>',
						dest : '<%= yeoman.static %>',
						src : [
							'views/*.html',
							'locales/**/*.json',
							'styles/**',
							'scripts/**',
							'*.{ico,png,txt}',
							'*.{ico,png,txt}',
							'images/**/*.{webp}',
							'fonts/**'
						]
					},
					{
						expand : true,
						cwd : '<%= yeoman.dist %>/images',
						dest : '<%= yeoman.static %>/images',
						src : [
							'generated/*'
						]
					}
				]
			}
		},

		// Renames files for browser caching purposes
		filerev : {
			dist : {
				src : [
					'<%= yeoman.dist %>/scripts/**/*.js',
					'<%= yeoman.dist %>/styles/**/*.css',
					'<%= yeoman.dist %>/images/**/*.{png,jpg,jpeg,gif,webp,svg}',
					'<%= yeoman.dist %>/styles/fonts/*'
				]
			}
		},

		// Run some tasks in parallel to speed up the build process
		concurrent : {
			dist : [
				'compass:dist',
				'imagemin',
				'svgmin'
			],
			server : [
				'compass:server'
			],
			test : [
				'compass'
			]
		},

		// Replace Google CDN references
		cdnify : {
			dist : {
				html : [
					'<%= yeoman.dist %>/*.html'
				]
			}
		},

		// Add vendor prefixed styles
		autoprefixer : {
			options : {
				browsers : [
					'last 1 version'
				]
			},
			dist : {
				files : [
					{
						expand : true,
						cwd : '<%= yeoman.temp %>/styles/',
						src : '**/*.css',
						dest : '<%= yeoman.temp %>/styles/'
					}
				]
			}
		},

		// Watches files for changes and runs tasks based on the changed files
		watch : {
			options : {
				livereload : true
			},
			bower : {
				files : [
					'bower.json'
				],
				tasks : [
					'wiredep'
				]
			},
			gruntfile : {
				files : [
					'Gruntfile.js'
				]
			},
			js : {
				files : [
					'<%= yeoman.app %>/scripts/**/*.js'
				],
				tasks : [
					'includeSource:dist',
					'newer:jshint:all',
					'concat'
				]
			},
			jsTest : {
				files : [
					'<%= yeoman.test %>/spec/**/*.js'
				],
				tasks : [
					'newer:jshint:test',
					'karma'
				]
			},
			bridge : {
				files : [
					'<%= yeoman.app %>/**/*.html'
				],
				tasks : [
					'clean:dist',
					'includeSource:dist',
					'wiredep',
					'useminPrepare',
					'concurrent:dist',
					'autoprefixer',
					'concat',
					'ngAnnotate',
					'copy:dist',
					'cdnify',
					'filerev',
					'usemin',
					'bridge:dist',
					'deploy'
				]
			},
			compass : {
				files : [
					'<%= yeoman.app %>/styles/**/*.{scss,sass}'
				],
				tasks : [
					'compass:dist',
					'autoprefixer'
				]
			},

		},

		// Test settings
		karma : {
			unit : {
				configFile : '<%= yeoman.test %>/karma.conf.js',
				singleRun : true
			}
		}

	});

	grunt.registerTask('serve', 'Compile then start a connect web server', function(target) {
		if (target === 'dist') {
			return grunt.task.run([
				'build',
				'connect:dist:keepalive'
			]);
		}

		grunt.task.run([
			'clean:server',
			'includeSource:server',
			'wiredep',
			'concurrent:server',
			'autoprefixer',
			'connect:livereload',
			'watch'
		]);
	});

	grunt.registerTask('test', [
		'clean:server',
		'concurrent:test',
		'autoprefixer',
		'connect:test',
		'karma'
	]);

	grunt.registerTask('deploy', [
		'clean:deploy',
		'copy:deploy'
	]);

	grunt.registerTask('build', [
		'newer:jshint',
		'clean:dist',
		'includeSource:dist',
		'wiredep',
		'useminPrepare',
		'concurrent:dist',
		'autoprefixer',
		'concat',
		'ngAnnotate',
		'copy:dist',
		'cdnify',
		'cssmin',
		'uglify',
		'filerev',
		'usemin',
		'htmlmin',
	]);

	grunt.registerTask('design', [
		// 'newer:jshint',
		'clean:dist',
		'includeSource:dist',
		'wiredep',
		'useminPrepare',
		'concurrent:dist',
		'autoprefixer',
		'concat',
		'ngAnnotate',
		'copy:dist',
		'cdnify',
		'filerev',
		'usemin',
		'bridge:dist',
		'deploy',
		'watch'
	]);

	grunt.registerTask('default', [
		'design'
	]);
};