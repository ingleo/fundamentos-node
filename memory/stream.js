const fs = require("fs");
const stream = require("stream");
const util = require("util");

let data = "";


let readableStream = fs.createReadStream(__dirname + '/input.txt');
readableStream.setEncoding('UTF8');

readableStream.on('data', function (chunk) {
    console.log(chunk);
    data += chunk;
});

readableStream.on('end', function () {
    //console.log('>>>\n');
});


process.stdout.write('Hi\n');
process.stdout.write('Whats\n');
process.stdout.write('Up\n');
process.stdout.write('>>>\n');


const Transform1 = stream.Transform;

function Upper() {
  Transform1.call(this);
}
util.inherits(Upper, Transform1);

Upper.prototype._transform = function (chunk, codif, cb) {
  chunkUpper = chunk.toString().toUpperCase();
  this.push(chunkUpper);
  cb();
};

let upperFinal = new Upper();

readableStream
    .pipe(upperFinal)
    .pipe(process.stdout);
