process.on('exit', () => {
    console.log('Process finished');
});

process.on('beforeExit', () => {
    console.log('The process is going to finish');
});

process.on('uncaughtException', (err, origin) => {
    console.error('We forgot to catch an exception');
    console.error(err.message);
});

notFunction();