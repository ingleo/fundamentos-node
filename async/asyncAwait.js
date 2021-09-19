let originalName = 'Leo';

async function hello(name) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log(`Hi ${name}`);
            resolve(name);
        }, 1000);
    });
}

async function speak(name) {
    return new Promise ((resolve, reject) => {
        setTimeout(function() {
            console.log(`Bla bla bla`);
            resolve(name);
        }, 1000);
    })
}

async function goodbye(name) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log(`Bye ${name}`);
            resolve() ;
        }, 1000);
    });
}

async function main() {
    let resultName =  await hello(originalName);
    await speak();
    await speak();
    await speak();
    await goodbye(resultName);
}

main();