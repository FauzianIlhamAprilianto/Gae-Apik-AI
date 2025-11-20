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
            <div class="card border-0 border-start border-3 border-primary col-md-6 history-card">
                <div class="history-content">
                    <div class="history-stats d-flex align-items-center justify-content-between"> 
                        <h5 class="mb-1 text-start">${GaeApik[e-1].title}</h5> 
                        <div class="history-status text-success">
                            <i class="bi bi-check-circle-fill me-1"></i> Done
                        </div>
                    </div>
                    <p class="mb-0 text-muted">${GaeApik[e-1].benefit}</p>
                </div>
            </div>
        `);
    });
    JSON.parse(localStorage.getItem('historySkip')).forEach(e => {
    $("#hasil").append(`
        <div class="card border-0 border-start border-3 border-danger col-md-6 history-card">
            <div class="history-content">
                <div class="history-stats d-flex align-items-center justify-content-between"> 
                    <h5 class="mb-1 text-start">${GaeApik[e-1].title}</h5> 
                    <div class="d-flex align-items-center">
                        <div class="history-status text-danger me-3"> <i class="bi bi-x-circle-fill me-1"></i> Skip
                        </div>
                    </div>
                </div>
                <p class="mb-0 text-muted">${GaeApik[e-1].benefit}</p>
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
if(historywesmari){
    historywesmari.onclick = () => {
        if(historyJSON.length > 0){
                $("#hasil").empty();
                JSON.parse(localStorage.getItem('history')).forEach(e => {
                $("#hasil").append(`
                        <div class="card border-0 border-start border-3 border-primary col-md-6 history-card">
                            <div class="history-content">
                                <div class="history-stats d-flex align-items-center justify-content-between"> 
                                    <h5 class="mb-1 text-start">${GaeApik[e-1].title}</h5> 
                                    <div class="history-status text-success">
                                        <i class="bi bi-check-circle-fill me-1"></i> Done
                                    </div>
                                </div>
                                <p class="mb-0 text-muted">${GaeApik[e-1].benefit}</p>
                            </div>
                        </div>
                `)         
                })
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
    }
}

// History Skip
if(historydiliwati){
    historydiliwati.onclick = () => {
        if(historySkipJSON.length > 0){
                $("#hasil").empty();
                JSON.parse(localStorage.getItem('historySkip')).forEach(e => {
                $("#hasil").append(`
                    <div class="card border-0 border-start border-3 border-danger col-md-6 history-card">
                        <div class="history-content">
                            <div class="history-stats d-flex align-items-center justify-content-between"> 
                                <h5 class="mb-1 text-start">${GaeApik[e-1].title}</h5> 
                                <div class="d-flex align-items-center">
                                    <div class="history-status text-danger me-3"> <i class="bi bi-x-circle-fill me-1"></i> Skip
                                    </div>
                                </div>
                            </div>
                            <p class="mb-0 text-muted">${GaeApik[e-1].benefit}</p>
                        </div>
                    </div>
                `)         
                })
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
    }
}

// Reset History
if(document.getElementById("reset-history")){
    document.getElementById("reset-history").addEventListener("click", () => {
        localStorage.clear();
        location.reload();
    });
}

// Share History (via Web Share API)
if(document.getElementById("share-history")){
    document.getElementById("share-history").addEventListener("click", async () => {
        const text = `Ini history saya dari aplikasi Gae Apik! 🔥
Best Streak: ${localStorage.getItem('bestStreak')}
Hari ini: ${localStorage.getItem('harian')}
Minggu ini: ${localStorage.getItem('mingguan')}
Total: ${localStorage.getItem('total')}`;
        try {
            await navigator.share({ text });
        } catch (e) {
            alert("Browser tidak mendukung fitur share!");
        }
    });
}

