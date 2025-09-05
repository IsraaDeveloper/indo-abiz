const { translateIdzFile } = require('./translator');
const path = require('path');
const fs = require('fs');

const args = process.argv.slice(2); 
let filePath;

if (args.length > 0) {
    filePath = args[0];
} else {
    filePath = path.join(__dirname, 'examples', 'test.idz');
}

// ✅ cek apakah file ada
if (!fs.existsSync(filePath)) {
    console.error(`File "${filePath}" tidak ditemukan.`);
    process.exit(1);
}

// ✅ cek apakah ekstensi file .idz
if (path.extname(filePath) !== '.idz') {
    console.error('Error: Hanya file dengan ekstensi .idz yang bisa dijalankan!');
    process.exit(1);
}

try {
    const translated = translateIdzFile(filePath);
    eval(translated);
} catch (err) {
    console.error('Error saat eksekusi:', err.message);
}
