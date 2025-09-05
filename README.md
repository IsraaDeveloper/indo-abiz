# Indo Abiz Language

Bahasa pemrograman custom berbasis **Node.js** dengan ekstensi file `.idz`.
Contoh: `examples/test.idz`

---

## 🚀 Fitur Bahasa

| Sintaks `.idz`               | JavaScript yang dihasilkan        |
| ---------------------------- | --------------------------------- |
| `katakan "teks"`             | `console.log("teks")`             |
| `katakan variabel`           | `console.log(variabel)`           |
| `jika(kondisi)`              | `if (kondisi)`                    |
| `jikatidak`                  | `else`                            |
| `bawaan:`                    | `default:`                        |
| `ulang(init; kondisi; step)` | `for (init; kondisi; step)`       |
| `selama(kondisi)`            | `while (kondisi)`                 |
| `untuk x di arr`             | `for (let x of arr)`              |
| `fungsi nama(...)`           | `function nama(...)`              |
| `fungsi nama(...) async`     | `async function nama(...)`        |
| `tunggu`                     | `await`                           |
| `coba ... tangkap(err)`      | `try ... catch(err)`              |
| `berhenti`                   | `break`                           |
| `balikin`                    | `return`                          |
| `betul`                      | `true`                            |
| `salah`                      | `false`                           |
| `ambil "modul"`              | `require("modul")`                |
| `sabar(1000) { ... }`        | `setTimeout(() => { ... }, 1000)` |

Komentar menggunakan `# ...`

---

## 📦 Instalasi

## 🚀 Auto Install
```
node installer.js
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

### 3. Global Command (`ach`)

Agar bisa dipanggil langsung dengan perintah `ach`, jalankan:

```sh
npm link
```

Jika di **Linux/Mac** butuh akses root:

```sh
sudo npm link
```

---

## ▶️ Cara Menjalankan File `.ach`

### Default (tanpa argumen)

```sh
ach
```

👉 otomatis menjalankan `examples/test.ach`

### Menentukan file

```sh
ach examples/test.ach
```

### Validasi

* Hanya file dengan ekstensi `.ach` yang bisa dijalankan.
* Jika bukan `.ach`, akan muncul error:

  ```
  Error: Hanya file dengan ekstensi .ach yang bisa dijalankan!
  ```

---

## 🛠️ Contoh Program

**`examples/test.ach`**

```ach
# Contoh program
let angka = 5

meunyoe(angka > 3) {
    kheun "Angka lebih besar dari 3"
} laen {
    kheun "Angka kecil atau sama dengan 3"
}

ulang(let i = 0; i < 5; i++) {
    kheun i
}

fungsi tambah(a, b) {
    balek a + b
}

kheun tambah(2, 3)
```

Jalankan:

```sh
ach examples/test.ach
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

### Variabel

```ach
let nama = "Israa"
konst umur = 20
```

### Percabangan

```ach
meunyoe(umur >= 18) {
    kheun "Dewasa"
} laen {
    kheun "Anak-anak"
}
```

### Perulangan

```ach
ulang(let i = 0; i < 3; i++) {
    kheun i
}

selama(umur > 0) {
    kheun umur
    umur = umur - 1
}

untuk item di [1,2,3] {
    kheun item
}
```

### Fungsi

```ach
fungsi halo(nama) {
    kheun `Halo ${nama}`
}

halo("Dunia")
```

### Async/Await

```ach
fungsi ambilData() async {
    preh saba(1000) {
        kheun "Selesai menunggu 1 detik"
    }
}

ambilData()
```

### Try/Catch

```ach
ci {
    kheun tidakAda
} drob(err) {
    kheun "Error: " + err
}
```

---

## 📜 Lisensi

MIT License
