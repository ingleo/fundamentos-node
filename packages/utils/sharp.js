const sharp = require('sharp');

sharp('imagesample.png')
    .resize(80)
    .toFile('resized.png');
