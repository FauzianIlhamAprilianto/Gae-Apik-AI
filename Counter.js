const selesai = document.getElementById('selesai')
let now = new Date();
let hari = String(now.getDate()).padStart(2, '0');
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let minggu = days[now.getDay()];
let lastReset = localStorage.getItem("lastReset");
import { hasilRandomId } from "./RandomKebecikan.js"

// Tambah counter Kegiatan
export function Counter(){
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
        localStorage.setItem('labelstreak', 1)
    }
    if(localStorage.getItem('historyHarian') == null){
        localStorage.setItem('historyHarian', "[]")
    }
    let history = JSON.parse(localStorage.getItem('history'))
    let historyHarian = JSON.parse(localStorage.getItem('historyHarian'))
    history.push(hasilRandomId)
    historyHarian.push(hasilRandomId)
    localStorage.setItem('history' ,JSON.stringify(history))
    localStorage.setItem('historyHarian' ,JSON.stringify(historyHarian))
}

// Label Streak
if(localStorage.getItem('labelstreak') == null){
    localStorage.setItem('labelstreak', 0)
}

// Reset harian
if(localStorage.getItem('resetHarian') == null){
    localStorage.setItem('resetHarian', hari)
}
else if(localStorage.getItem('resetHarian') != hari){
    localStorage.setItem('harian', 0)
    localStorage.setItem('resetHarian', hari)
    localStorage.setItem('labelstreak', 0)
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

// Tampilkan ke UI
export function Score(){
    if(localStorage.getItem('streak')){
        $('.streak-number').text(localStorage.getItem('streak'))
    }
    if(localStorage.getItem('bestStreak') > 0){
        $('#ShowBestStreak').text(localStorage.getItem('bestStreak'))
    }
    if(localStorage.getItem('harian') > 0){
        $('.hari-number').text(localStorage.getItem('harian'))
    }
    if(localStorage.getItem('mingguan') > 0){
        $('.minggu-number').text(localStorage.getItem('mingguan'))
    }
    if(localStorage.getItem('total') > 0){
        $('.total-number').text(localStorage.getItem('total'))
    }
    if(localStorage.getItem('labelstreak') == 1){
        $('#labelStreak1').text('Awalan sing apik! Terusno maneh mene yo.')
        $('#labelStreak2').text('Awalan sing apik! Terusno maneh mene yo.')
        $('.streak-number').classList.remove('streak-mati')
        $('.streak-icon').classList.remove('streak-mati')
        $('.streak-number').classList.add('streak-oranye')
        $('.streak-icon').classList.add('streak-oranye')
    }
} 

Score()