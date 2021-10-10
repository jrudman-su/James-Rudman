const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const convert = (dir, outDir) => {
  fs.readdir(dir, (err, files) => {
    files.forEach((file) => {
      const fileParts = file.split('.');
      if (fileParts[1] === 'webp') return;

      const filePath = path.join(dir, file);
      const outputPath = path.join(outDir, `${fileParts[0]}.webp`);
      console.log({ filePath, outputPath });
      sharp(filePath)
        .webp({ lossless: true })
        .toFile(outputPath)
        .then(function (info) {
          console.log(info);
        })
        .catch(function (err) {
          console.log(err);
        });
    });
  });
};

convert('assets/icons', 'assets/icons');
