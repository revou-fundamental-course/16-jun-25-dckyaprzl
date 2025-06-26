// untuk menampilkan section
function showSection(type) {
  const luas = document.getElementById('luas-segitiga-section');
  const keliling = document.getElementById('keliling-segitiga-section');

  if (type === 'luas') {
    luas.style.display = 'block';
    keliling.style.display = 'none';
  } else if (type === 'keliling') {
    luas.style.display = 'none';
    keliling.style.display = 'block';
  }
}

function toggleDropdown(button) {
  const dropdown = button.closest('.dropdown');
  const menu = dropdown.querySelector('.dropdown-content');

  document.querySelectorAll('.dropdown-content').forEach(el => {
    if (el !== menu) el.classList.remove('show');
  });
  menu.classList.toggle('show');

  document.querySelectorAll('.dropbtn').forEach(btn => btn.classList.remove('active'));
  if (menu.classList.contains('show')) {
    button.classList.add('active');
  }
}

window.onclick = function (event) {
  if (!event.target.closest('.dropdown')) {
    document.querySelectorAll('.dropdown-content').forEach(menu => menu.classList.remove('show'));
    document.querySelectorAll('.dropbtn').forEach(btn => btn.classList.remove('active'));
  }
}

//fungsi hitung luas
function hitungLuas() {
  const alasInput = document.getElementById('alas').value.trim();
  const tinggiInput = document.getElementById('tinggi').value.trim();
  const output = document.getElementById('output-luas');
// form validation
  if (!alasInput || !tinggiInput) {
    output.innerHTML = "<p style='color:red;'>Mohon isi kedua nilai terlebih dahulu.</p>";
    return;
  }

  if (isNaN(alasInput) || isNaN(tinggiInput)) {
    output.innerHTML = "<p style='color:red;'>Nilai harus berupa angka!</p>";
    return;
  }

  const alas = parseFloat(alasInput);
  const tinggi = parseFloat(tinggiInput);
  const luas = 0.5 * alas * tinggi;

  output.innerHTML = `
    <p>L = 1/2 × a × t</p>
    <p>L = 1/2 × ${alas} × ${tinggi}</p>
    <p>L = ${luas}</p>
  `;
}

//fungsi reset
function resetLuas() {
  document.getElementById('alas').value = '';
  document.getElementById('tinggi').value = '';
  document.getElementById('output-luas').innerHTML = '';
}
//fungsi hitung keliling
function hitungKeliling() {
  const aInput = document.getElementById('sisiA').value.trim();
  const bInput = document.getElementById('sisiB').value.trim();
  const cInput = document.getElementById('sisiC').value.trim();
  const output = document.getElementById('output-keliling');
  //form validation
  if (!aInput || !bInput || !cInput) {
    output.innerHTML = "<p style='color:red;'>Mohon isi ketiga sisi terlebih dahulu.</p>";
    return;
  }

  if (isNaN(aInput) || isNaN(bInput) || isNaN(cInput)) {
    output.innerHTML = "<p style='color:red;'>Semua nilai sisi harus berupa angka!</p>";
    return;
  }

  const a = parseFloat(aInput);
  const b = parseFloat(bInput);
  const c = parseFloat(cInput);
  const keliling = a + b + c;

  output.innerHTML = `
    <p>K = a + b + c</p>
    <p>K = ${a} + ${b} + ${c}</p>
    <p>K = ${keliling}</p>
  `;
}

function resetKeliling() {
  document.getElementById('sisiA').value = '';
  document.getElementById('sisiB').value = '';
  document.getElementById('sisiC').value = '';
  document.getElementById('output-keliling').innerHTML = '';
}