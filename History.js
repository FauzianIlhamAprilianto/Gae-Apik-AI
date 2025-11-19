import {GaeApik} from "./RandomKebecikan.js"

const historywesmari = document.getElementById('HistoryWesmari')
const historydiliwati = document.getElementById('HistoryDiliwati')
const historyAll = document.getElementById('All')

// Tambah Histrory skip
if(localStorage.getItem('historySkip') == null){
    localStorage.setItem('historySkip', "[]")
}

// History Kabeh
function all() {
    $("#hasil").empty();
    JSON.parse(localStorage.getItem('history')).forEach(e => {
        $("#hasil").append(`
            <div class="card border-0 border-start border-3 border-primary col-md-6 history-card done">
                <div class="status-strip bg-success"></div>
                <div class="history-content">
                    <h5 class="mb-1">${GaeApik[e-1].title}</h5>
                    <p class="mb-0 text-muted">${GaeApik[e-1].benefit}</p>
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
                <h5 class="mb-1">${GaeApik[e-1].title}</h5>
                <p class="mb-0 text-muted">${GaeApik[e-1].benefit}</p>
            </div>
            <div class="history-status text-danger">
                <i class="bi bi-x-circle-fill me-1"></i> Skip
            </div>
        </div>
    `)         
    })
};

if(localStorage.getItem('history') == null){
    localStorage.setItem('history', '[]')
}

const historyJSON = JSON.parse(localStorage.getItem('history') ?? '[]');
const historySkipJSON = JSON.parse(localStorage.getItem('historySkip') ?? '[]');
if(historyJSON.length > 0 || historySkipJSON.length > 0){
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
if(historyJSON.length > 0){
    if(historywesmari){
        historywesmari.onclick = () => {
            $("#hasil").empty();
            JSON.parse(localStorage.getItem('history')).forEach(e => {
            $("#hasil").append(`
                <div class="card border-0 border-start border-3 border-primary col-md-6 history-card done">
                    <div class="status-strip bg-success"></div>
                    <div class="history-content">
                        <h5 class="mb-1">${GaeApik[e-1].title}</h5>
                        <p class="mb-0 text-muted">${GaeApik[e-1].benefit}</p>
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
if(historySkipJSON.length > 0){
    if(historydiliwati){
        historydiliwati.onclick = () => {
            $("#hasil").empty();
            JSON.parse(localStorage.getItem('historySkip')).forEach(e => {
            $("#hasil").append(`
                <div class="card border-0 border-start border-3 border-danger col-md-6 history-card skip">
                    <div class="status-strip bg-success"></div>
                    <div class="history-content">
                        <h5 class="mb-1">${GaeApik[e-1].title}</h5>
                        <p class="mb-0 text-muted">${GaeApik[e-1].benefit}</p>
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
