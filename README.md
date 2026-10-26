# Lab6Web - JavaScript DOM dan Event Handling

Nama: Azizah Rachmatania
 
Kelas: I251B
 
NIM: 312510159
 
Mata Kuliah: Pemrograman Web
 
Dosen Pengampu: Agung Nugroho, S.Kom., M.Kom.
 
Pertemuan: 7
 
Topik: JavaScript DOM dan Event Handling

---

## 1. Tujuan Praktikum

1. Memahami DOM sebagai representasi dokumen HTML yang dapat diakses melalui JavaScript.
2. Menggunakan id, class, dan selector CSS untuk memilih elemen HTML.
3. Mengubah teks, atribut, kelas CSS, dan gaya elemen melalui JavaScript.
4. Menangani event pengguna menggunakan `addEventListener()`.
5. Membuat validasi form dan menampilkan pesan sesuai kondisi input.
6. Mengembangkan halaman interaktif dengan minimal tiga fungsi yang berjalan benar.

---

## 2. File

Peran tiga file di setiap folder:

| File | Peran |
|---|---|
| `index.html` | Isi dan struktur halaman (judul, paragraf, tombol, form). |
| `style.css` | Tampilan (warna, ukuran, jarak, tata letak). |
| `script.js` | Perilaku halaman: apa yang terjadi saat pengguna melakukan sesuatu. |

## 3. Cara Menjalankan

1. Clone repository ini atau unduh file-nya.
2. Buka folder `latihan/` atau `mini-project/`.
3. Buka `index.html` dengan browser modern (Chrome, Edge, atau Firefox).
4. Tekan **F12** lalu buka tab **Console** untuk memeriksa apakah ada error.

Di `index.html` terdapat baris berikut:

```html
<link rel="stylesheet" href="style.css">
<script src="script.js" defer></script>
```

- `link` menghubungkan file CSS.
- `script ... defer` menghubungkan file JavaScript. Atribut `defer` membuat JavaScript dijalankan **setelah HTML selesai dibaca**, sehingga elemen yang akan dipilih sudah ada.

---

## 4. Langkah Kerja Per Latihan

### Latihan 1 - Mengubah Teks dengan DOM

**Kode HTML**

```html
<h1 id="judul">Latihan DOM</h1>
<p id="pesan">Belum ada tindakan.</p>
```

**Kode JavaScript**

```js
const judul = document.getElementById("judul");
const pesan = document.getElementById("pesan");

judul.textContent = "Belajar JavaScript DOM";
pesan.textContent = "Konten berhasil diubah oleh JavaScript.";
```

**Penjelasan per bagian**

| Bagian kode | Fungsi |
|---|---|
| `document.getElementById("judul")` | Mencari elemen HTML yang punya `id="judul"`, lalu menyimpannya ke variabel `judul`. |
| `document.getElementById("pesan")` | Sama, untuk elemen paragraf `id="pesan"`. |
| `judul.textContent = "..."` | Mengganti isi teks elemen `h1` dengan teks baru. |
| `pesan.textContent = "..."` | Mengganti isi teks paragraf dengan teks baru. |

---

### Latihan 2 - Event Click

**Kode HTML**

```html
<button id="tombolAksi" type="button">Klik Saya</button>
```

**Kode JavaScript**

```js
const tombol = document.getElementById("tombolAksi");

tombol.addEventListener("click", function () {
  pesan.textContent = "Tombol diklik pada " + new Date().toLocaleTimeString();
});
```

**Penjelasan per bagian**

| Bagian kode | Fungsi |
|---|---|
| `getElementById("tombolAksi")` | Memilih tombol "Klik Saya". |
| `addEventListener("click", ...)` | Memasang "pendengar" yang menunggu tombol diklik. |
| `function () { ... }` | Isi aksi yang dijalankan **setiap kali** tombol diklik. |
| `new Date()` | Membuat objek waktu saat ini. |
| `.toLocaleTimeString()` | Mengubah waktu menjadi teks jam sesuai pengaturan bahasa browser. |
| `"..." + ...` | Menggabungkan kalimat dengan jam menjadi satu teks. |

---

### Latihan 3 - Mengubah Kelas dan Gaya CSS

**Kode HTML**

```html
<p id="teksGaya">Teks ini akan berubah gayanya saat tombol ditekan.</p>
<button id="tombolGaya" type="button">Ubah Gaya</button>
```

**Kode CSS**

```css
.highlight {
  color: #173f75;
  background-color: #e6f1ff;
  border-left: 4px solid #3478c8;
  padding: 12px;
}
.teks-besar { font-size: 1.4rem; }
```

**Kode JavaScript**

```js
const tombolGaya = document.getElementById("tombolGaya");
const teksGaya = document.getElementById("teksGaya");

tombolGaya.addEventListener("click", function () {
  teksGaya.classList.toggle("highlight");
  teksGaya.classList.toggle("teks-besar");
});
```

**Penjelasan per bagian**

| Bagian kode | Fungsi |
|---|---|
| `.highlight` dan `.teks-besar` (CSS) | Dua class yang berisi gaya, tapi **belum dipakai** oleh paragraf. |
| `classList.toggle("highlight")` | Jika elemen belum punya class `highlight`, class ditambahkan. Jika sudah punya, class dihapus. |
| `classList.toggle("teks-besar")` | Sama, untuk class `teks-besar`. |

**Perbedaan tiga method `classList`**

| Method | Perilaku |
|---|---|
| `classList.add("x")` | Selalu menambahkan class `x`. |
| `classList.remove("x")` | Selalu menghapus class `x`. |
| `classList.toggle("x")` | Membalik: tambahkan jika belum ada, hapus jika sudah ada. |

---

### Latihan 4 - Event Input dan Penghitung Karakter

**Kode HTML**

```html
<label for="namaInput">Nama:</label>
<input type="text" id="namaInput" maxlength="40">
<p>Jumlah karakter: <span id="jumlahKarakter">0</span></p>
```

**Kode JavaScript**

```js
const namaInput = document.getElementById("namaInput");
const jumlahKarakter = document.getElementById("jumlahKarakter");

namaInput.addEventListener("input", function () {
  jumlahKarakter.textContent = namaInput.value.length;
});
```

**Penjelasan per bagian**

| Bagian kode | Fungsi |
|---|---|
| `maxlength="40"` | Membatasi input maksimal 40 karakter. |
| event `"input"` | Terjadi **setiap kali isi input berubah** (mengetik, menghapus, atau menempel). |
| `namaInput.value` | Isi teks yang sedang ada di kotak input. |
| `.length` | Jumlah karakter dari teks tersebut. |
| `jumlahKarakter.textContent = ...` | Menampilkan angka itu di `<span>`. |

---

### Latihan 5 - Validasi Form Pendaftaran

**Kode HTML (ringkas)**

```html
<form id="formPendaftaran" novalidate>
  <input id="nama" type="text">
  <input id="email" type="email">
  <input id="usia" type="number" min="17" max="100">
  <button type="submit">Daftar</button>
</form>
<p id="pesanForm" aria-live="polite"></p>
```

**Kode JavaScript**

```js
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const usiaInput = document.getElementById("usia").value;
  const usia = Number(usiaInput);
  const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (nama === "") { ... }
  else if (nama.length < 3) { ... }
  else if (!polaEmail.test(email)) { ... }
  else if (usiaInput === "" || !Number.isInteger(usia) || usia < 17 || usia > 100) { ... }
  else { ... form.reset(); }
});
```

**Penjelasan per bagian**

| Bagian kode | Fungsi |
|---|---|
| `novalidate` | Mematikan validasi bawaan browser agar validasi dilakukan oleh JavaScript kita sendiri. |
| event `"submit"` | Terjadi saat tombol "Daftar" ditekan. |
| `event.preventDefault()` | Mencegah halaman dimuat ulang, sehingga data bisa diperiksa dulu. |
| `.value.trim()` | Mengambil isi input dan membuang spasi di awal/akhir. |
| `Number(usiaInput)` | Mengubah teks usia menjadi angka. |
| `polaEmail` | Pola (regex): ada teks, lalu `@`, lalu teks, lalu titik, lalu teks. |
| `polaEmail.test(email)` | `true` jika email cocok dengan pola. |
| `Number.isInteger(usia)` | Memastikan usia bilangan bulat (bukan 17.5). |
| `form.reset()` | Mengosongkan form setelah semua input valid. |

Validasi diperiksa **berurutan dari atas**: nama, email, lalu usia. Pesan yang tampil adalah error pertama yang ditemukan.

**Kondisi yang diuji**

1. Semua input kosong.
2. Nama kosong.
3. Nama kurang dari 3 karakter.
4. Email tidak valid.
5. Usia di bawah 17.
6. Semua input valid.

---

### Latihan 6 - Daftar Tugas Sederhana (To-do List)

**Kode HTML**

```html
<input id="inputTugas" type="text">
<button id="tambahTugas" type="button">Tambah</button>
<p id="pesanTugas" aria-live="polite"></p>
<ul id="daftarTugas"></ul>
```

**Kode JavaScript (inti)**

```js
tambahTugas.addEventListener("click", function () {
  const teks = inputTugas.value.trim();
  if (teks === "") {
    pesanTugas.textContent = "Tulis tugas terlebih dahulu.";
    return;
  }

  const item = document.createElement("li");
  const label = document.createElement("span");
  const selesai = document.createElement("button");
  const hapus = document.createElement("button");

  label.textContent = teks + " ";

  selesai.addEventListener("click", function () {
    item.classList.toggle("selesai");
    selesai.textContent = item.classList.contains("selesai")
      ? "Batalkan selesai" : "Tandai selesai";
  });

  hapus.addEventListener("click", function () {
    item.remove();
  });

  item.append(label, selesai, hapus);
  daftarTugas.appendChild(item);
  inputTugas.value = "";
  inputTugas.focus();
});
```

**Penjelasan per bagian**

| Bagian kode | Fungsi |
|---|---|
| `if (teks === "") ... return;` | Jika input kosong, tampilkan pesan lalu hentikan fungsi. |
| `document.createElement("li")` | Membuat elemen baru di memori (belum tampil di halaman). |
| `label.textContent = teks` | Mengisi teks tugas. Memakai `textContent` agar teks pengguna tampil sebagai teks biasa, bukan kode HTML (lebih aman). |
| `item.append(label, selesai, hapus)` | Memasukkan span dan dua tombol ke dalam `li`. |
| `daftarTugas.appendChild(item)` | Memasang `li` ke daftar sehingga **tampil** di halaman. |
| `classList.toggle("selesai")` | Menambah/menghapus class `selesai` yang membuat teks tercoret (CSS `.selesai span`). |
| `classList.contains("selesai")` | Mengecek apakah class `selesai` sedang aktif, untuk mengganti teks tombol. |
| `item.remove()` | Menghapus satu item dari daftar (Eksperimen Mandiri 1). |
| `inputTugas.focus()` | Mengembalikan kursor ke kotak input agar bisa langsung mengetik tugas berikutnya. |

---

## 5. Mini Project - Form Pendaftaran Workshop

Halaman terdiri dari input nama, input email, dropdown sesi, kotak ringkasan, tombol Daftar, dan tombol Reset.

### Fungsi 1: `perbaruiRingkasan()`

```js
function perbaruiRingkasan() {
  rNama.textContent = namaEl.value.trim() || "-";
  rEmail.textContent = emailEl.value.trim() || "-";
  rSesi.textContent = sesiEl.value || "-";
}
```

- Menyalin isi nama, email, dan sesi ke kotak **Ringkasan input**.
- Tanda `|| "-"` berarti: jika isinya kosong, tampilkan tanda "-".
- Dipanggil setiap kali pengguna mengetik atau memilih sesi, sehingga ringkasan selalu mengikuti input.

### Fungsi 2: `validasi()`

```js
function validasi() {
  let valid = true;
  ...
  if (nama === "") { errNama.textContent = "Nama wajib diisi."; valid = false; }
  else if (nama.length < 3) { errNama.textContent = "Nama minimal 3 karakter."; valid = false; }
  if (!polaEmail.test(email)) { errEmail.textContent = "Masukkan email yang valid."; valid = false; }
  if (sesiEl.value === "") { errSesi.textContent = "Pilih salah satu sesi workshop."; valid = false; }
  return valid;
}
```

- Menghapus pesan error lama, lalu memeriksa nama, email, dan sesi **sekaligus** (bukan satu-satu seperti Latihan 5).
- Input yang salah diberi class `invalid` untuk menandainya dengan border merah.
- Mengembalikan `true` jika semua benar, `false` jika ada yang salah.

### Fungsi 3: `resetTampilan()`

```js
function resetTampilan() {
  form.reset();
  jumlahNama.textContent = "0";
  ...
  perbaruiRingkasan();
}
```

- Mengosongkan form, mengembalikan penghitung ke 0, menghapus semua pesan, dan mengosongkan ringkasan.

### Event yang dipakai

| Event | Elemen | Aksi |
|---|---|---|
| `input` | Nama | Memperbarui penghitung karakter (x/40) dan ringkasan. |
| `input` | Email | Memperbarui ringkasan. |
| `change` | Dropdown sesi | Menampilkan teks "Sesi dipilih: ..." dan memperbarui ringkasan. |
| `submit` | Form | Mencegah reload, menjalankan `validasi()`, lalu menampilkan pesan sukses/gagal. |
| `click` | Tombol Reset | Menjalankan `resetTampilan()`. |

### Tampilan responsif

Di `style.css`, kartu form memenuhi lebar layar pada perangkat kecil, dan pada layar lebar (`@media (min-width: 768px)`) padding kartu diperbesar dan lebarnya dibatasi 480px agar berada di tengah.

---

## 6. Eksperimen Mandiri

| No | Eksperimen | Cara pengerjaan |
|---|---|---|
| 1 | Tombol hapus pada To-do List | Membuat tombol "Hapus" di tiap item dengan `item.remove()`. |
| 2 | Nama minimal 3 karakter | Menambahkan `else if (nama.length < 3)` pada validasi. |
| 3 | Event `change` pada dropdown sesi | Di mini project, event `change` pada dropdown menampilkan sesi yang dipilih. |
| 4 | Sembunyikan/tampilkan paragraf | Class `.sembunyi { display: none; }` di-toggle oleh tombol. |
| 5 | Script tanpa `defer` di `<head>` | Lihat penjelasan di bawah. |

**Penjelasan Eksperimen 5**

Jika `<script src="script.js">` ditaruh di `<head>` tanpa `defer`, browser menjalankan JavaScript **sebelum** `<body>` selesai dibaca. Saat itu elemen seperti `#judul` belum ada, sehingga `document.getElementById("judul")` menghasilkan `null`. Akibatnya muncul error di Console, misalnya `Cannot read properties of null (reading 'addEventListener')`, dan halaman tidak merespons. Dengan `defer`, script baru berjalan setelah seluruh HTML selesai diparsing, sehingga semua elemen sudah tersedia.

---

## 7. Jawaban Pertanyaan Evaluasi

1. **Apa itu DOM dan manfaatnya?**
   DOM (Document Object Model) adalah representasi struktur dokumen HTML dalam bentuk objek berbentuk pohon yang bisa diakses JavaScript. Manfaatnya: memilih elemen, mengubah isi dan gaya, menambah atau menghapus elemen, serta merespons aksi pengguna sehingga halaman menjadi dinamis.

2. **Perbedaan `getElementById()`, `querySelector()`, dan `querySelectorAll()`?**
   `getElementById()` memilih satu elemen berdasarkan id. `querySelector()` memilih elemen **pertama** yang cocok dengan selector CSS. `querySelectorAll()` memilih **semua** elemen yang cocok dan mengembalikannya sebagai NodeList.

3. **Fungsi `addEventListener()` dan tiga contoh event?**
   Fungsinya menghubungkan sebuah event dengan fungsi yang dijalankan saat event itu terjadi. Contoh event: `click`, `input`, `submit`.

4. **Mengapa `event.preventDefault()` dipakai pada event submit?**
   Karena perilaku bawaan submit adalah memuat ulang halaman. Dengan `preventDefault()`, halaman tidak reload sehingga JavaScript bisa memeriksa data dan menampilkan pesan terlebih dahulu.

5. **Perbedaan `textContent` dan `innerHTML`?**
   `textContent` menampilkan teks apa adanya, sehingga aman. `innerHTML` memproses string sebagai kode HTML, sehingga berbahaya jika berisi input pengguna yang tidak dipercaya karena bisa disusupi skrip (XSS).

6. **Bagaimana `classList.toggle()` membantu mengubah tampilan?**
   Method ini menambah class jika belum ada dan menghapusnya jika sudah ada. Dengan satu tombol, tampilan elemen bisa dibolak-balik antara dua kondisi tanpa menulis `if` sendiri.

7. **Minimal tiga skenario pengujian validasi form?**
   (a) Semua input kosong. (b) Email tidak valid. (c) Usia di bawah 17. (d) Nama kurang dari 3 karakter. (e) Semua input valid.

---
