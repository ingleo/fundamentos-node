let originalName = 'Leo';

function hello(name, myCallback) {
    setTimeout(function() {
        console.log(`Hi ${name}`);
        myCallback(name);
    }, 1000);
}

function goodbye(name, myCallbackTwo) {
    setTimeout(function() {
        console.log(`Bye ${name}`);
        myCallbackTwo();
    }, 1000);
}

console.log('Starting process...');
hello(originalName, function(name) {
    goodbye(name, function() {
        console.log('Finishing process');
    })
});