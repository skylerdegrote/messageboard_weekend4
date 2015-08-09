module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'client/scripts/app.js',
                dest: 'server/public/assets/scripts/app.min.js'
            },
            build:{
                src: 'client/scripts/secret.js',
                dest: 'server/public/assets/scripts/secret.min.js'
            }
        },
        copy: {
            bootstrap: {
                expand: true,
                cwd: 'node_modules',
                src: [
                    "bootstrap/dist/css/bootstrap.min.css",
                ],
                dest: "server/public/vendors/"
            },
            jquery: {
                expand: true,
                cwd: 'node_modules',
                src: [
                    "jquery/dist/jquery.min.js",
                    "jquery/dist/jquery.min.map"
                ],
                dest: "server/public/vendors/"
            },
            styles: {
                expand: true,
                cwd: "client",
                src: [
                    "styles/styles.css"
                ],
                "dest": "server/public/assets/"
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['copy', 'uglify']);
};