const bcrypt = require('bcrypt');

const passwd = '12345segura!';

bcrypt.hash(passwd, 5, function (err, hash) {
    console.log(hash);

    bcrypt.compare(passwd, hash, function (err, res) {
        console.log(err);
        console.log(res);
    });
});