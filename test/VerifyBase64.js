const base64String = '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'; // Cole a string base64 aqui

const buffer = Buffer.from(base64String, 'base64');

import fs from 'fs'

console.log(buffer)
fs.writeFileSync('image.jpg', buffer);

console.log('Imagem decodificada e salva como image.jpg');
