module.exports = function(grunt){
  grunt.initConfig({
    protractor_webdriver: {
        t1: {
            options:{
                path: 'node_modules/protractor/bin/',
                command: 'webdriver-manager start'
            	  }
            }	
    	}, 
    protractor: {
          options:{
            configFile: "node_modules/protractor/example/conf.js", // Default config file
            keepAlive: true, // If false, the grunt process stops when the test fails.
            noColor: false, // If true, protractor will not use colors in its output.
            args: {// Arguments passed to the command}
        	},
          t2: {
            options:{
                configFile: "conf.js", // Target-specific config file
                args: {} // Target-specific arguments
                   }
              } 
          }
     });
	
  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-protractor_webdriver');
  grunt.loadNpmTasks('grunt-contrib-protractor');
	grunt.registerTask('default', ['protractor_webdriver','protractor']);  
});
