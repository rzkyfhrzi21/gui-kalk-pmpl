function generateInputFields() {
  const jumlahAngka = parseInt(document.getElementById("jumlahAngka").value);
  const inputArea = document.getElementById("inputArea");
  inputArea.innerHTML = ""; // Menghapus input sebelumnya

  if (isNaN(jumlahAngka) || jumlahAngka < 2) {
    alert("Masukkan jumlah angka minimal 2");
    return;
  }

  for (let i = 0; i < jumlahAngka; i++) {
    const angkaInput = document.createElement("input");
    angkaInput.type = "number";
    angkaInput.className = "angkaInput";
    angkaInput.placeholder = `Masukkan angka ${i + 1}`;

    const operasiSelect = document.createElement("select");
    operasiSelect.className = "operasiSelect";

    const optionTambah = document.createElement("option");
    optionTambah.value = "tambah";
    optionTambah.textContent = "+";

    const optionKurang = document.createElement("option");
    optionKurang.value = "kurang";
    optionKurang.textContent = "-";

    const optionKali = document.createElement("option");
    optionKali.value = "kali";
    optionKali.textContent = "×";

    const optionBagi = document.createElement("option");
    optionBagi.value = "bagi";
    optionBagi.textContent = "÷";

    operasiSelect.appendChild(optionTambah);
    operasiSelect.appendChild(optionKurang);
    operasiSelect.appendChild(optionKali);
    operasiSelect.appendChild(optionBagi);

    inputArea.appendChild(angkaInput);
    inputArea.appendChild(operasiSelect);
  }
}

function calculate() {
  const angkaInputs = document.querySelectorAll(".angkaInput");
  const operasiSelects = document.querySelectorAll(".operasiSelect");

  if (angkaInputs.length === 0) {
    document.getElementById("hasil").value = "Tidak ada angka untuk dihitung!";
    return;
  }

  let hasil = parseFloat(angkaInputs[0].value); // Mulai dengan angka pertama

  for (let i = 0; i < angkaInputs.length - 1; i++) {
    const nextAngka = parseFloat(angkaInputs[i + 1].value);
    const operasi = operasiSelects[i].value;

    if (isNaN(hasil) || isNaN(nextAngka)) {
      document.getElementById("hasil").value = "Masukkan angka yang valid!";
      return;
    }

    switch (operasi) {
      case "tambah":
        hasil += nextAngka;
        break;
      case "kurang":
        hasil -= nextAngka;
        break;
      case "kali":
        hasil *= nextAngka;
        break;
      case "bagi":
        if (nextAngka === 0) {
          document.getElementById("hasil").value =
            "Error: Tidak dapat membagi dengan nol!";
          return;
        }
        hasil /= nextAngka;
        break;
      default:
        break;
    }
  }

  document.getElementById("hasil").value = `Hasil: ${hasil}`;
}

// Fungsi untuk membersihkan input dan hasil
function clearInputs() {
  document.getElementById("jumlahAngka").value = "";
  document.getElementById("inputArea").innerHTML = "";
  document.getElementById("hasil").value = "";
}

// Fungsi untuk kembali ke halaman utama
function goBack() {
  window.location.href = "index.html";
}
