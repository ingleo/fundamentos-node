let originalName = 'Leo';

function hello(name, myCallback) {
    setTimeout(function() {
        console.log(`Hi ${name}`);
        myCallback(name);
    }, 1000);
}

function speak(myCallbackThree) {
    setTimeout(function() {
        console.log(`Bla bla bla`);
        myCallbackThree();
    }, 1000);
}

function conversation(name, times, myCallbackFour) {
    if (times >= 0) {
        speak(function(){
            conversation(name, --times, myCallbackFour);
        })
    } else {
        goodbye(name, myCallbackFour);
    }
}

function goodbye(name, myCallbackTwo) {
    setTimeout(function() {
        console.log(`Bye ${name}`);
        myCallbackTwo();
    }, 1000);
}

console.log('Starting process...');
hello(originalName, function(name) {
    conversation(name, 8, function() {
        console.log('Process finished');
    })
});