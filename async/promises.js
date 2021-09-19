let originalName = 'Leo';

function hello(name) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log(`Hi ${name}`);
            resolve(name);
        }, 1000);
    });
}

function speak(name) {
    return new Promise ((resolve, reject) => {
        setTimeout(function() {
            console.log(`Bla bla bla`);
            resolve(name);
        }, 1000);
    })
}

function goodbye(name) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log(`Bye ${name}`);
            resolve() ;
        }, 1000);
    });
}

 hello(originalName)
    .then(speak)
    .then(goodbye)
    .then(() => {
        console.log('Process finished');
    })
    .catch(error => {
        console.error('There is an error');
    })
