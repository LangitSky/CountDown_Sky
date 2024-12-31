const tanggalTujuan = new Date('2025-01-01T00:00:00');

const hitungWaktu = () => {
 const waktuSekarang = new Date();
 const selisihWaktu = tanggalTujuan.getTime() - waktuSekarang.getTime();
 
 if (selisihWaktu <= 0) {
 document.getElementById('selamat-tahun-baru').innerHTML = 'Selamat Tahun Baru!';
 document.getElementById('selamat-tahun-baru').style.display = 'block';
 document.getElementById('kembang-api').style.display = 'block';
 kembangApi();
 clearInterval(interval);
 } else {
 const hari = Math.floor(selisihWaktu / (1000 * 60 * 60 * 24));
 const jam = Math.floor((selisihWaktu % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
 const menit = Math.floor((selisihWaktu % (1000 * 60 * 60)) / (1000 * 60));
 const detik = Math.floor((selisihWaktu % (1000 * 60)) / 1000);
 
 document.getElementById('hari').innerText = hari;
 document.getElementById('jam').innerText = jam;
 document.getElementById('menit').innerText = menit;
 document.getElementById('detik').innerText = detik;
 }
};

const kembangApi = () => {
 const canvas = document.getElementById('kembang-api');
 const ctx = canvas.getContext('2d');
 canvas.width = window.innerWidth;
 canvas.height = window.innerHeight;
 
 for (let i = 0; i < 100; i++) {
 const x = Math.random() * canvas.width;
 const y = Math.random() * canvas.height;
 const ukuran = Math.random() * 5;
 ctx.beginPath();
 ctx.arc(x, y, ukuran, 0, 2 * Math.PI);
 ctx.fillStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
 ctx.fill();
 }
};

const interval = setInterval(hitungWaktu, 1000);
hitungWaktu();