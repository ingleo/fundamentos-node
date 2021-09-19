const { exec, spawn } = require('child_process');

exec('ls -la', (err, stdout, sterr) => {
    if (err) {
        console.error(err);
        return false;
    }

    console.log(stdout);
});

let process1 = spawn('ls', ['-la']);

console.log(process1.pid);

process1.stdout.on('data', function (data) {
    console.log(data.toString());
});