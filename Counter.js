const selesai = document.getElementById('selesai')
let now = new Date();
let hari = String(now.getDate()).padStart(2, '0');
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let minggu = days[now.getDay()];
let lastReset = localStorage.getItem("lastReset");
//localStorage.clear();
import { hasilRandomId } from "./RandomKegiatan.js"

// Tambah counter Kegiatan
selesai.onclick = () => {
    let counters = ['total', 'mingguan', 'harian'];
    counters.forEach(key => {
        let count = parseInt(localStorage.getItem(key)) || 0;
        localStorage.setItem(key, (count + 1).toString());
    });
    // Tambah Streak
    if(localStorage.getItem('bestStreak') == null){
        localStorage.setItem('bestStreak', 0)
        localStorage.setItem('streak', 0)
        localStorage.setItem('streakHariIni', 0)
    }
    if(localStorage.getItem('streakHariIni') == 0){
        let countStreak = parseInt(localStorage.getItem('streak') || 0)
        localStorage.setItem('streak', (countStreak + 1).toString())
        if(localStorage.getItem('bestStreak') < localStorage.getItem('streak')){
            localStorage.setItem('bestStreak', localStorage.getItem('streak'))
        }
        localStorage.setItem('streakHariIni', 1)
        localStorage.setItem('terakhir', hari)
    }
    // Tambah History
    if(localStorage.getItem('history') == null){
        localStorage.setItem('history', "[]")
    }
    let history = JSON.parse(localStorage.getItem('history'))
    history.push(hasilRandomId)
    localStorage.setItem('history' ,JSON.stringify(history))
}


// Reset harian
if(localStorage.getItem('resetHarian') == null){
    localStorage.setItem('resetHarian', hari)
}
else if(localStorage.getItem('resetHarian') != hari){
    localStorage.setItem('harian', 0)
    localStorage.setItem('resetHarian', hari)
    localStorage.setItem('streakHariIni', 0)
}

const mingguReset = localStorage.getItem('mingguReset')
if(minggu == 'Mon'){
    if(mingguReset !== now.toDateString()){
        localStorage.setItem('mingguan', 0)
        localStorage.setItem("mingguReset", now.toDateString());
    }
}

// Reset Streak
if(hari >= parseInt(localStorage.getItem('terakhir')) + 2 ){
    localStorage.setItem('streak', 0)
}
