const form = document.getElementById("formWorkshop");
const namaEl = document.getElementById("nama");
const emailEl = document.getElementById("email");
const sesiEl = document.getElementById("sesi");

const errNama = document.getElementById("errNama");
const errEmail = document.getElementById("errEmail");
const errSesi = document.getElementById("errSesi");

const jumlahNama = document.getElementById("jumlahNama");
const infoSesi = document.getElementById("infoSesi");
const pesanHasil = document.getElementById("pesanHasil");

const rNama = document.getElementById("rNama");
const rEmail = document.getElementById("rEmail");
const rSesi = document.getElementById("rSesi");

const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Fungsi 1: perbarui ringkasan input secara langsung
function perbaruiRingkasan() {
  rNama.textContent = namaEl.value.trim() || "-";
  rEmail.textContent = emailEl.value.trim() || "-";
  rSesi.textContent = sesiEl.value || "-";
}

// Fungsi 2: validasi seluruh form, mengembalikan true jika valid
function validasi() {
  let valid = true;
  const nama = namaEl.value.trim();
  const email = emailEl.value.trim();

  errNama.textContent = "";
  errEmail.textContent = "";
  errSesi.textContent = "";
  [namaEl, emailEl, sesiEl].forEach(function (el) { el.classList.remove("invalid"); });

  if (nama === "") {
    errNama.textContent = "Nama wajib diisi.";
    namaEl.classList.add("invalid");
    valid = false;
  } else if (nama.length < 3) {
    errNama.textContent = "Nama minimal 3 karakter.";
    namaEl.classList.add("invalid");
    valid = false;
  }

  if (!polaEmail.test(email)) {
    errEmail.textContent = "Masukkan email yang valid.";
    emailEl.classList.add("invalid");
    valid = false;
  }

  if (sesiEl.value === "") {
    errSesi.textContent = "Pilih salah satu sesi workshop.";
    sesiEl.classList.add("invalid");
    valid = false;
  }

  return valid;
}

// Fungsi 3: reset form dan tampilan
function resetTampilan() {
  form.reset();
  jumlahNama.textContent = "0";
  infoSesi.textContent = "";
  errNama.textContent = "";
  errEmail.textContent = "";
  errSesi.textContent = "";
  [namaEl, emailEl, sesiEl].forEach(function (el) { el.classList.remove("invalid"); });
  pesanHasil.textContent = "";
  pesanHasil.className = "hasil";
  perbaruiRingkasan();
}

// Event input: penghitung karakter + ringkasan live
namaEl.addEventListener("input", function () {
  jumlahNama.textContent = namaEl.value.length;
  perbaruiRingkasan();
});
emailEl.addEventListener("input", perbaruiRingkasan);

// Event change: tampilkan sesi yang dipilih (Eksperimen 3)
sesiEl.addEventListener("change", function () {
  infoSesi.textContent = sesiEl.value ? "Sesi dipilih: " + sesiEl.value : "";
  perbaruiRingkasan();
});

// Event submit
form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (validasi()) {
    pesanHasil.className = "hasil sukses";
    pesanHasil.textContent = "Pendaftaran berhasil! Terima kasih, " + namaEl.value.trim() + ".";
    form.reset();
    jumlahNama.textContent = "0";
    infoSesi.textContent = "";
    perbaruiRingkasan();
  } else {
    pesanHasil.className = "hasil gagal";
    pesanHasil.textContent = "Pendaftaran gagal. Periksa kembali input kamu.";
  }
});

// Event click: tombol reset
document.getElementById("tombolReset").addEventListener("click", resetTampilan);