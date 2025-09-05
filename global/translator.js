const fs = require('fs');

function translateIdzFile(filePath) {
    const code = fs.readFileSync(filePath, 'utf-8');

    let translate = code
        // katakan "teks"
        .replace(/katakan\s+(.+)/g, 'console.log($1)')
        // katakan ekspresi (lebih fleksibel, support koma, spasi, dsb.)
        .replace(/katakan\s+([a-zA-Z0-9_+\-*/%(),\s]+)/g, 'console.log($1)')

        // jika(...) → if(...)
        .replace(/jika\s*\((.+)\)/g, 'if ($1)')
        // jikatidak → else
        .replace(/\bjikatidak\b/g, 'else')

        // bawaan: → default:
        .replace(/bawaan\s*:/g, 'default:')

        // let variabel
        .replace(/\bliterali\b/g, 'let')
        // const variabel
        .replace(/konstanta\s+(\w+)\s*=\s*(.+)/g, 'const $1 = $2')

        // return
        .replace(/\bbalikin\b/g, 'return')

        // ulang(init; kondisi; step) → for(...)
        .replace(/ulang\s*\((.+)\)/g, 'for ($1)')
        // selama(kondisi) → while(kondisi)
        .replace(/selama\s*\((.+)\)/g, 'while ($1)')
        // untuk x di arr → for (let x of arr)
        .replace(/untuk\s+(\w+)\s+di\s+(\w+)/g, 'for (let $1 of $2)')

        // boolean
        .replace(/\bbenar\b/g, 'true')
        .replace(/\bsalah\b/g, 'false')

        // komentar (# ...)
        .replace(/#.+/g, '')

        // switch-case
        .replace(/pilih\s*\((.+)\)/g, 'switch ($1)')
        .replace(/\bkasus\b/g, 'case')
        .replace(/\bberhenti\b/g, 'break')

        // require
        .replace(/ambil\s+"([^"]+)"/g, 'require("$1")')
        .replace(/ambil\s+'([^']+)'/g, 'require("$1")')

        // try-catch
        .replace(/\bcoba\b/g, 'try')
        .replace(/tangkap\s*\((.+)\)/g, 'catch ($1)')

        // fungsi async
        .replace(/fungsi\s+(\w+)\s*\(([^)]*)\)\s*async/g, 'async function $1($2)')
        // fungsi biasa
        .replace(/fungsi\s+(\w+)\s*\(([^)]*)\)/g, 'function $1($2)')

        // await
        .replace(/\btunggu\b/g, 'await')

        // sabar(ms) { ... } → setTimeout(() => { ... }, ms)
        .replace(/sabar\s*\((\d+)\)\s*{([^}]*)}/g, 'setTimeout(() => { $2 }, $1)')
        // dan → &&
        .replace(/\bdan\b/g, '&&')
        // atau → ||
        .replace(/\batau\b/g, '||')
        // tidak → !
        .replace(/\btidak\b/g, '!')
        // lebihbesardari → >
        .replace(/\blebihbesardari\b/g, '>')
        // lebihkecildari → <
        .replace(/\blebihkecildari\b/g, '<')
        // sama → ===
        .replace(/\bsama\b/g, '===')

        // acak(min, max) → Math.floor(Math.random() * (max - min + 1)) + min
        .replace(/acak\s*\(\s*(\d+)\s*,\s*(\d+)\s*\)/g,
            'Math.floor(Math.random() * ($2 - $1 + 1)) + $1')

        // panjang variabel → variabel.length
        .replace(/panjang\s+(\w+)/g, '$1.length')

        // baca "file" → fs.readFileSync("file", "utf-8")
        .replace(/baca\s+"([^"]+)"/g, 'fs.readFileSync("$1", "utf-8")')
        .replace(/baca\s+'([^']+)'/g, 'fs.readFileSync("$1", "utf-8")')

        // tulis "file", data → fs.writeFileSync("file", data)
        .replace(/tulis\s+"([^"]+)"\s*,\s*(.+)/g, 'fs.writeFileSync("$1", $2)')
        .replace(/tulis\s+'([^']+)'\s*,\s*(.+)/g, 'fs.writeFileSync("$1", $2)')


    return translate;
}

module.exports = { translateIdzFile };
