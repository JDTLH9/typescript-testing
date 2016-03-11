System.config({
    packages: {
        js: {
            format: 'register',
            defaultExtension: 'js'
        }
    }
});
System.import('js/app')
    .then(null, console.error.bind(console));