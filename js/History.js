import { hasilRandomId , randomGaeApik , GaeApik} from "/js/RandomKebecikan.js"

const skip = document.getElementById('skip')
const historywesmari = document.getElementById('HistoryWesWari')
const historydiliwati = document.getElementById('HistoryDiliwati')

// Tambah Histrory skip
if(localStorage.getItem('historySkip') == null){
    localStorage.setItem('historySkip', "[]")
}


if (skip) {
    skip.addEventListener("click", function () {
        () => {
            let historySkip = JSON.parse(localStorage.getItem('historySkip'))
            historySkip.push(hasilRandomId)
            localStorage.setItem('historySkip', JSON.stringify(historySkip))
            randomGaeApik()
        }
    });
}

if(localStorage.getItem('history')){
    $(function done() {
        $("#hasil").empty();
        JSON.parse(localStorage.getItem('history')).forEach(e => {
            $("#hasil").append(`
                <div class="col-md-6 history-card done">
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
        $("#hasil").empty();
        JSON.parse(localStorage.getItem('historySkip')).forEach(e => {
        $("#hasil").append(`
            <div class="col-md-6 history-card done">
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
    });

    if(historywesmari){
        historywesmari.onclick = done()
    }

}
else{
    $("#hasil").empty();
    $("#hasil").append(`
        <p id="emptyMessage" class="text-center text-muted mt-5">
            No entries yet <br>
            Start spinning to create your kindness journey!
        </p>
    `)  
}

if((JSON.parse(localStorage.getItem('historySkip'))).length > 0){
    if(historydiliwati){
        historydiliwati.onclick = () => {
            $("#hasil").empty();
            JSON.parse(localStorage.getItem('historySkip')).forEach(e => {
            $("#hasil").append(`
                <div class="col-md-6 history-card done">
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
            No entries yet <br>
            Start spinning to create your kindness journey!
        </p>
    `)         
}
