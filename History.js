import { hasilRandomId , randomGaeApik} from "./RandomKegiatan.js"

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

