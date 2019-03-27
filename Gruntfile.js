module.exports = function(grunt){
  grunt.initConfig({
    eslint:{
      options:{
        configFile:'.eslintrc.json'
      },
      target:['./10-timer-button/main.js','./11-password-visual/main.js','./12-range/main.js','./13-progress/main.js']
    },
    csslint:{
      options:{
        csslintrc:'.csslintrc'
      },
      src:['./10-timer-button/layout.css','./11-password-visual/layout.css','./12-range/layout.css','./13-progress/layout.css']
    },
    htmlhint:{
      options:{
        htmlhintrc:'.htmlhintrc',
      },
      src:['./10-timer-button/index.html','./11-password-visual/index.html','./12-range/index.html','./13-progress/index.html']
    },
    htmlmin: {
      options: {
        collapseWhitespace: true,
        preserveLineBreaks: false                           
      },
      files: {
        'dist/10.html':'./10-timer-button/index.html',
        'dist/11.html':'./12-range/index.html',                             
        'dist/12.html':'./13-progress/index.html'
      }                   
    },
    cssmin: {
      'dist/release.css':['./10-timer-button/layout.css','./11-password-visual/layout.css','./12-range/layout.css','./12-range/layout.css']        
    },
    uglify: {
      release:{
        files: {
          'dist/bundle.min.js': 'dist/bundle.js',                   
        }                   
      }                
    }
  });

  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-htmlhint');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('lint', ['htmlhint', 'csslint', 'eslint']);
  grunt.registerTask('release', ['uglify','cssmin', 'htmlmin']);

};
