import { hasilRandomId , randomGaeApik , GaeApik} from "./RandomKegiatan.js"

const skip = document.getElementById('skip')

// Tambah Histrory skip
if(localStorage.getItem('historySkip') == null){
    localStorage.setItem('historySkip', "[]")
}
skip.onclick = () => {
    let historySkip = JSON.parse(localStorage.getItem('historySkip'))
    historySkip.push(hasilRandomId)
    localStorage.setItem('historySkip', JSON.stringify(historySkip))
    randomGaeApik()
}

JSON.parse(localStorage.getItem('history')).forEach(e => {
    $('#lihatHitory').HTML('<h6 class="card-title">Nama</h6><p class="manfaat card-text fs-6">Manfaat</p>')
});