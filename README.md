# Indo Abiz Language

Bahasa pemrograman custom berbasis **Node.js** dengan ekstensi file `.idz`.
Contoh: `examples/test.idz`

---

## 🚀 Fitur Bahasa

| Sintaks `.idz`               | JavaScript yang dihasilkan                      |
| ---------------------------- | ---------------------------------               |
| `katakan "teks"`             | `console.log("teks")`                           |
| `katakan variabel`           | `console.log(variabel)`                         |
| `jika(kondisi)`              | `if (kondisi)`                                  |
| `jikatidak`                  | `else`                                          |
| `bawaan:`                    | `default:`                                      |
| `literali nama = nilai`      | `let nama = nilai`                              |
| `konstanta nama = nilai`     | `const nama = nilai`                            |
| `balikin`                    | `return`                                        |
| `ulang(init; kondisi; step)` | `for (init; kondisi; step)`                     |
| `selama(kondisi)`            | `while (kondisi)`                               |
| `untuk item di array`        | `for (let item of array)`                       |
| `benar`                      | `true`                                          |
| `salah`                      | `false`                                         |
| `pilih(expr)`                | `switch(expr)`                                  |
| `kasus`                      | `case`                                          |
| `berhenti`                   | `break`                                         |
| `ambil "modul"`              | `require("modul")`                              |
| `coba`                       | `try`                                           |
| `tangkap(err)`               | `catch (err)`                                   |
| `fungsi nama(...) async`     | `async function nama(...)`                      |
| `fungsi nama(...)`           | `function nama(...)`                            |
| `tunggu`                     | `await`                                         |
| `sabar(1000) { ... }`        | `setTimeout(() => { ... }, 1000)`               |
| `x dan y`                    | `x && y`                                        |
| `x atau y`                   |                                                 |
| `tidak x`                    | `!x`                                            |
| `a lebihbesardari b`         | `a > b`                                         |
| `a lebihkecildari b`         | `a < b`                                         |
| `a sama b`                   | `a === b`                                       |
| `acak(1, 100)`               | `Math.floor(Math.random() * (100 - 1 + 1)) + 1` |
| `panjang arr`                | `arr.length`                                    |
| `baca "file.txt"`            | `fs.readFileSync("file.txt", "utf-8")`          |
| `tulis "file.txt", data`     | `fs.writeFileSync("file.txt", data)`            |


Komentar menggunakan `# ...`

---

## 📦 Instalasi

## 🚀 Auto Install
### 1. Clone Repository
```sh
git clone https://github.com/IsraaDeveloper/indo-abiz.git
cd indo-abiz
```
### 2. Jalankan Auto Installer
```
node ./global/installer.js
```

## 🎯 Manual Install
### 1. Clone Repository

```sh
git clone https://github.com/IsraaDeveloper/indo-abiz.git
cd indo-abiz
```

### 2. Install Dependency

```sh
npm install
```

### 3. Global Command (`idz`)

Agar bisa dipanggil langsung dengan perintah `idz`, jalankan:

```sh
npm link
```

Jika di **Linux/Mac** butuh akses root:

```sh
sudo npm link
```

---

## ▶️ Cara Menjalankan File `.idz`

### Default (tanpa argumen)

```sh
ach
```

👉 otomatis menjalankan `global/examples/test.idz`

### Menentukan file

```sh
ach global/examples/test.idz
```

### Validasi

* Hanya file dengan ekstensi `.idz` yang bisa dijalankan.
* Jika bukan `.ids`, akan muncul error:

  ```
  Error: Hanya file dengan ekstensi .idz yang bisa dijalankan!
  ```

---

## 🛠️ Contoh Program

**`global/examples/test.idz`**

```idz
# Contoh program
literali angka = 5

jika(angka > 3) {
    katakan "Angka lebih besar dari 3"
} jikatidak {
    katakan "Angka kecil atau sama dengan 3"
}

ulang(literali i = 0; i < 5; i++) {
    katakan i
}

fungsi tambah(a, b) {
    balikin a + b
}

katakan tambah(2, 3)
```

Jalankan:

```sh
ach global/examples/test.idz
```

Output:

```
Angka lebih besar dari 3
0
1
2
3
4
5
```

---

## 📜 Dokumentasi Kode yang Bisa Digunakan

# Dokumentasi Bahasa `.idz`

Berikut adalah contoh penggunaan semua fitur dalam bahasa `.idz`:

---

### Cetak ke Layar

```idz
katakan "Halo Dunia"
katakan angka
```

---

### Percabangan

```idz
jika(angka > 10) {
    katakan "Lebih besar"
} jikatidak {
    katakan "Lebih kecil atau sama"
}
```

---

### Perulangan

```idz
ulang(literali i = 0; i < 3; i++) {
    katakan i
}

selama(umur > 0) {
    katakan umur
    umur = umur - 1
}

untuk item di [1,2,3] {
    katakan item
}
```

---

### Fungsi

```idz
fungsi tambah(a, b) {
    balikin a + b
}

katakan tambah(5, 7)
```

---

### Asynchronous

```idz
fungsi tes() async {
    tunggu sabar(1000) {
        katakan "Halo setelah 1 detik"
    }
}
```

---

### Switch / Case

```idz
pilih(angka) {
    kasus 1:
        katakan "Satu"
        berhenti
    kasus 2:
        katakan "Dua"
        berhenti
    bawaan:
        katakan "Lainnya"
}
```

---

### Error Handling

```idz
coba {
    katakan variabel_tak_ada
} tangkap(err) {
    katakan "Terjadi error"
}
```

---

### File

```idz
tulis "data.txt", "Halo dari IndoLang"
katakan baca "data.txt"
```

---

### Operator

```idz
jika(angka lebihbesardari 5 dan angka lebihkecildari 10) {
    katakan "Di antara 5 dan 10"
}

jika(tidak salah) {
    katakan "Benar"
}
```

---

### Random & Utility

```idz
katakan acak(1, 100)

literali nama = "Indolang"
katakan panjang nama
```


---

## 📜 Lisensi

MIT License
