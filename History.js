import { hasilRandomId , randomGaeApik , GaeApik} from "./RandomKebecikan.js"

const skip = document.getElementById('skip')
const historywesmari = document.getElementById('HistoryWesmari')
const historydiliwati = document.getElementById('HistoryDiliwati')
const historyAll = document.getElementById('All')

// Tambah Histrory skip
if(localStorage.getItem('historySkip') == null){
    localStorage.setItem('historySkip', "[]")
}


if (skip) {
    skip.addEventListener("click", function () {
        let historySkip = JSON.parse(localStorage.getItem('historySkip'))
        historySkip.push(hasilRandomId)
        localStorage.setItem('historySkip', JSON.stringify(historySkip))
        randomGaeApik()
    });
}

// History Kabeh
function all() {
    $("#hasil").empty();
    JSON.parse(localStorage.getItem('history')).forEach(e => {
        $("#hasil").append(`
            <div class="card border-0 border-start border-3 border-primary col-md-6 history-card done">
                <div class="status-strip bg-success"></div>
                <div class="history-content">
                    <h5 class="mb-1">${GaeApik[e].title}</h5>
                    <p class="mb-0 text-muted">${GaeApik[e].benefit}</p>
                </div>
                <div class="history-status text-success">
                    <i class="bi bi-check-circle-fill me-1"></i> Done
                </div>
            </div>
        `);
    });
    JSON.parse(localStorage.getItem('historySkip')).forEach(e => {
    $("#hasil").append(`
        <div class="card border-0 border-start border-3 border-danger col-md-6 history-card skip">
            <div class="status-strip bg-success"></div>
            <div class="history-content">
                <h5 class="mb-1">${GaeApik[e].title}</h5>
                <p class="mb-0 text-muted">${GaeApik[e].benefit}</p>
            </div>
            <div class="history-status text-danger">
                <i class="bi bi-x-circle-fill me-1"></i> Skip
            </div>
        </div>
    `)         
    })
};

if((JSON.parse(localStorage.getItem('history'))).length > 0 || (JSON.parse(localStorage.getItem('historySkip'))).length > 0){
    all()
    if(historyAll){
        historyAll.onclick = () =>{
            all()
        } 
    }
}
else{
    $("#hasil").empty();
    $("#hasil").append(`
        <p id="emptyMessage" class="text-center text-muted mt-5">
            Durung ana isiné<br>
            Wiwièn ngéspin kanggo miwiti lelampahan kebaikanmu!
        </p>
    `)  
}

//History Wes Mari
if((JSON.parse(localStorage.getItem('history'))).length > 0){
    if(historywesmari){
        historywesmari.onclick = () => {
            $("#hasil").empty();
            JSON.parse(localStorage.getItem('history')).forEach(e => {
            $("#hasil").append(`
                <div class="card border-0 border-start border-3 border-primary col-md-6 history-card done">
                    <div class="status-strip bg-success"></div>
                    <div class="history-content">
                        <h5 class="mb-1">${GaeApik[e].title}</h5>
                        <p class="mb-0 text-muted">${GaeApik[e].benefit}</p>
                    </div>
                    <div class="history-status text-success">
                        <i class="bi bi-check-circle-fill me-1"></i> Done
                    </div>
                </div>
            `)         
            })
        }
    }
}
else{
    $("#hasil").empty();
    $("#hasil").append(`
        <p id="emptyMessage" class="text-center text-muted mt-5">
            Durung ana isiné<br>
            Wiwièn ngéspin kanggo miwiti lelampahan kebaikanmu!
        </p>
    `)         
}


// History Skip
if((JSON.parse(localStorage.getItem('historySkip'))).length > 0){
    if(historydiliwati){
        historydiliwati.onclick = () => {
            $("#hasil").empty();
            JSON.parse(localStorage.getItem('historySkip')).forEach(e => {
            $("#hasil").append(`
                <div class="card border-0 border-start border-3 border-danger col-md-6 history-card skip">
                    <div class="status-strip bg-success"></div>
                    <div class="history-content">
                        <h5 class="mb-1">${GaeApik[e].title}</h5>
                        <p class="mb-0 text-muted">${GaeApik[e].benefit}</p>
                    </div>
                    <div class="history-status text-danger">
                        <i class="bi bi-x-circle-fill me-1"></i> Skip
                    </div>
                </div>
            `)         
            })
        }
    }
}
else{
    $("#hasil").empty();
    $("#hasil").append(`
        <p id="emptyMessage" class="text-center text-muted mt-5">
            Durung ana isiné<br>
            Wiwièn ngéspin kanggo miwiti lelampahan kebaikanmu!
        </p>
    `)         
}
