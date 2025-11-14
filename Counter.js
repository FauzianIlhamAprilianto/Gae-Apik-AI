const selesai = document.getElementById('#selesai')
let now = new Date();
let hari = String(now.getDate()).padStart(2, '0');
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let minggu = days[now.getDay()];
let lastReset = localStorage.getItem("lastReset");

// Reset harian
if(localStorage.getItem('resetHarian') == null){
    localStorage.setItem('resetHarian', hari)
}
else if(localStorage.getItem('resetHarian') != hari){
    localStorage.setItem('harian', 0)
    localStorage.setItem('resetHarian', hari)
}

// Reset mingguan
const MingguReset = localStorage.getItem('MingguReset')
if(minggu == 'Mon'){
    if(MingguReset !== now.toDateString()){
        localStorage.setItem('mingguan', 0)
        localStorage.setItem("MingguReset", now.toDateString());
    }
}

// Tambah counter Kegiatan
selesai.onclick = () => {
    let counters = ['total', 'mingguan', 'harian', 'streak'];
    counters.forEach(key => {
        let count = parseInt(localStorage.getItem(key)) || 0;
        localStorage.setItem(key, (count + 1).toString());
    });
}