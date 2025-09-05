const { execSync } = require('child_process');

console.log("📩 Cloning Github Repositori...")
try {
    execSync('git clone ')
}
console.log("📦 Menjalankan npm install...");
try {
    execSync('npm install', { stdio: 'inherit' });
} catch (e) {
    console.error("❌ Gagal menjalankan npm install");
    process.exit(1);
}

console.log("🔗 Membuat link global dengan npm link...");
try {
    execSync('npm link', { stdio: 'inherit' });
    console.log("✅ Selesai! Sekarang kamu bisa pakai perintah: ach namafile.idz");
} catch (e) {
    console.error("❌ Gagal menjalankan npm link. Coba pakai sudo di Linux/Mac.");
    process.exit(1);
}

