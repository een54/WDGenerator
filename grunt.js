module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    },
    'http-server': {
 
        'dev': {
 
            // the server root directory 
            root: 'F:/WebDesignGenerator/',
 
            // the server port 
            // can also be written as a function, e.g. 
            // port: function() { return 8282; } 
            port: 8282,
            
 
            // the host ip address 
            // If specified to, for example, "127.0.0.1" the server will  
            // only be available on that ip. 
            // Specify "0.0.0.0" to be available everywhere 
            host: "127.0.0.1",
 
            cache: 120,
            showDir : true,
            autoIndex: true,
 
            // server default file extension 
            ext: "html",
 
            // run in parallel with other tasks 
            runInBackground: true
 
        }
 
    }
  });
 
grunt.loadNpmTasks('grunt-http-server');
 

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint']);

};