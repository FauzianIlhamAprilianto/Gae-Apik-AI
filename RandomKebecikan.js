import { Counter , Score } from './Counter.js'
export let hasilRandomId = null;

const random = document.getElementById('random')
const kerjakan = document.getElementById('kerjakan')
const skip = document.getElementById('skip')
const lanjutkan = document.getElementById('lanjutkan')

export const GaeApik = [
    { id: 1, title: "Bangun pagi ojo kesiangan", description: "Nggawe awake seger lan pikiran seger", how: "Pasang alarm 30 menit luwih awal", benefit: "Bisa ngerjakke urusan esuk luwih tenang", status: false },
    { id: 2, title: "Ngombe banyu putih 2 gelas", description: "Awak perlu hidrasi sawise turu", how: "Siapke gelas banyu nang meja", benefit: "Metabolisme lancar lan awak seger", status: false },
    { id: 3, title: "Jalan-jalan 10 menit", description: "Lemah jantung lan pikiran luwih fresh", how: "Mlaku nang sekitar omah utawa halaman", benefit: "Mood apik lan sehat jasmani", status: false },
    { id: 4, title: "Meditasi cendhak", description: "Nganggo napas kanggo tenang", how: "Duduk tenang, tutup mripat, tarik napas alon-alon", benefit: "Ngurangi stres lan fokus meningkat", status: false },
    { id: 5, title: "Nulis jurnal", description: "Catet hal positif lan target dina iki", how: "Nulis 3 hal positif nang buku catetan", benefit: "Meningkatkan kesadaran lan syukur", status: false },
    { id: 6, title: "Ngrungokake lagu favorit", description: "Hibur diri karo musik kesayangan", how: "Puter lagu 10-15 menit nang HP utawa speaker", benefit: "Mood luwih apik lan semangat", status: false },
    { id: 7, title: "Ngucap pujian kanggo wong liya", description: "Nambah hubungan sosial", how: "Ucapake langsung utawa kirim WA", benefit: "Bisa nggawe wong liya seneng lan hubungan apik", status: false },
    { id: 8, title: "Maca artikel ringkes", description: "Nambah ilmu lan inspirasi", how: "Buka artikel motivasi utawa pengetahuan cendhak", benefit: "Wawasan lan kreativitas meningkat", status: false },
    { id: 9, title: "Rapikan meja kerja", description: "Lingkungan resik nambah fokus", how: "Buang sampah cilik lan rapikan dokumen", benefit: "Produktivitas lan mood tambah apik", status: false },
    { id: 10, title: "Ngombe teh utawa kopi santai", description: "Wektu rileks karo minuman", how: "Siapke secangkir teh utawa kopi favorit", benefit: "Pikiran luwih santai lan rileks", status: false },
    { id: 11, title: "Ngucap syukur esuk-esuk", description: "Awal dina positif", how: "Tutupi mripat lan pikirake siji hal apik", benefit: "Mood positif lan tenang", status: false },
    { id: 12, title: "Ngucap salam karo tetanggan", description: "Jaga hubungan sosial", how: "Mampir utawa sapa bareng salam", benefit: "Silaturahmi apik lan nyenengke", status: false },
    { id: 13, title: "Ngrampungke PR cilik", description: "Awal dina produktif", how: "Tindakake tugas cilik sing bisa rampung cepet", benefit: "Rasa puas lan produktif", status: false },
    { id: 14, title: "Ngresiki kamar", description: "Lingkungan resik nggawe nyaman", how: "Sapu, lap, lan rapikan barang", benefit: "Tenang lan nyaman ing kamar", status: false },
    { id: 15, title: "Nyiram tanduran", description: "Nresnani alam cilik", how: "Siram pot-pot tanaman nang omah", benefit: "Rasa seneng lan pikiran seger", status: false },
    { id: 16, title: "Maca buku cendhak", description: "Nambah ilmu sethithik", how: "Baca 5-10 menit buku favorit", benefit: "Wawasan tambah lan pikiran seger", status: false },
    { id: 17, title: "Nulis quotes motivasi", description: "Bangun semangat diri", how: "Tulis siji quotes nang buku utawa HP", benefit: "Semangat lan positif mindset meningkat", status: false },
    { id: 18, title: "Ngopi bareng kanca", description: "Jaga silaturahmi", how: "Ajak kanca ngobrol santai", benefit: "Rasa seneng lan hubungan apik", status: false },
    { id: 19, title: "Ngresiki HP lan laptop", description: "Perangkat resik lan terawat", how: "Lap layar lan rapikan file", benefit: "Nyaman digunakake lan terorganisir", status: false },
    { id: 20, title: "Ngatur jadwal sederhana", description: "Supaya ora kelangan wektu", how: "Tulis 3 target utama dina iki", benefit: "Lebih fokus lan produktif", status: false },
    { id: 21, title: "Nggawe cemilan sehat", description: "Asupan sehat lan enak", how: "Siapke buah utawa kacang-kacangan", benefit: "Awet semangat lan sehat", status: false },
    { id: 22, title: "Ngirim pesan positif", description: "Menyebar kebaikan", how: "Kirim kata-kata semangat ke kanca", benefit: "Membuat orang lain senang", status: false },
    { id: 23, title: "Nggawe playlist musik", description: "Hibur diri kapan wae", how: "Tambah lagu favorit nang playlist", benefit: "Mood lan energi meningkat", status: false },
    { id: 24, title: "Senam ringan", description: "Olahraga cilik tapi penting", how: "Gerak-gerak 5-10 menit", benefit: "Sehat lan badan seger", status: false },
    { id: 25, title: "Ngucap salam esuk-esuk", description: "Awal dina positif", how: "Sapa anggota keluarga karo salam", benefit: "Mood apik lan harmonis", status: false },
    { id: 26, title: "Ngrampungke tugas rumah cilik", description: "Bebas rasa bersalah", how: "Rapikan barang-barang cilik", benefit: "Lingkungan nyaman lan tenang", status: false },
    { id: 27, title: "Nulis rencana minggu", description: "Persiapan luwih apik", how: "Tulis 3 prioritas minggu iki", benefit: "Lebih terorganisir", status: false },
    { id: 28, title: "Nggawe kreasi seni cilik", description: "Nyalurke kreativitas", how: "Gambar, nulis, utawa DIY", benefit: "Rasa seneng lan puas", status: false },
    { id: 29, title: "Ngobrol karo kanca lama", description: "Jaga relasi", how: "Telpon utawa WA ngobrol santai", benefit: "Rasa seneng lan reconnect", status: false },
    { id: 30, title: "Nonton video edukatif", description: "Ilmu cilik sing nyenengke", how: "Buka YouTube edukatif 10 menit", benefit: "Nambah wawasan anyar", status: false },
    { id: 31, title: "Ngrapihin lemari", description: "Lingkungan rapi", how: "Susun baju lan barang", benefit: "Bisa gampang nemu barang", status: false },
    { id: 32, title: "Nggawe catatan resep masakan", description: "Belajar masak gampang", how: "Tulis resep anyar nang buku catetan", benefit: "Siap masak kapan wae", status: false },
    { id: 33, title: "Maca berita positif", description: "Informasi sehat", how: "Pilih berita sing inspiratif", benefit: "Mood positif lan up-to-date", status: false },
    { id: 34, title: "Ngajak dolan keluarga cilik", description: "Quality time", how: "Keluar rumah bareng keluarga 20 menit", benefit: "Meningkatkan bonding", status: false },
    { id: 35, title: "Nganyari profil sosial media", description: "Biar luwih rapih", how: "Update foto utawa bio cilik", benefit: "Rasa puas lan percaya diri", status: false },
    { id: 36, title: "Nyusun playlist belajar", description: "Fokus belajar lancar", how: "Tambah lagu instrumental santai", benefit: "Konsentrasi meningkat", status: false },
    { id: 37, title: "Ngirit listrik cilik", description: "Lingkungan lestari", how: "Pateni lampu sing ora perlu", benefit: "Hemat energi lan peduli lingkungan", status: false },
    { id: 38, title: "Ngasah kemampuan bahasa", description: "Tambah skill cilik", how: "Baca artikel bahasa asing 10 menit", benefit: "Kosa kata tambah", status: false },
    { id: 39, title: "Nulis daftar belanja", description: "Persiapan apik", how: "Tulis barang sing perlu tuku", benefit: "Belanja lebih efisien", status: false },
    { id: 40, title: "Ngatur email", description: "Rapih lan gampang nemu", how: "Hapus spam lan arsip email penting", benefit: "Produktivitas meningkat", status: false },
    { id: 41, title: "Nulis puisi cilik", description: "Ekspresikan perasaan", how: "Tulis 4-6 baris puisi kreatif", benefit: "Rasa seneng lan kreativitas meningkat", status: false },
    { id: 42, title: "Nganyari kalender aktivitas", description: "Supaya ora kelangan kegiatan", how: "Tulis acara penting minggu iki", benefit: "Lebih terorganisir", status: false },
    { id: 43, title: "Nyetel alarm cilik kanggo istirahat", description: "Supaya ora kelalen istirahat", how: "Setel alarm 1x-2x saben dina", benefit: "Awak seger lan pikiran enteng", status: false },
    { id: 44, title: "Nggawe doodle cilik", description: "Santai tapi kreatif", how: "Gambar cilik nang kertas kosong", benefit: "Rasa seneng lan rileks", status: false },
    { id: 45, title: "Ngatur playlist olahraga", description: "Semangat gerak", how: "Tambah lagu upbeat 10 menit", benefit: "Gerak lebih semangat", status: false },
    { id: 46, title: "Ngucap makasih marang wong liya", description: "Nambah positif vibes", how: "Ucapan lisan utawa WA", benefit: "Meningkatkan hubungan lan rasa senang", status: false },
    { id: 47, title: "Nggawe plan sederhana esuk", description: "Hari lebih fokus", how: "Tulis 3 target utama esuk iki", benefit: "Produktivitas meningkat", status: false },
    { id: 48, title: "Nulis doa cendhak", description: "Tenang lan syukur", how: "Doa 2-3 kalimat nang hati", benefit: "Rasa tenang lan bersyukur", status: false },
    { id: 49, title: "Ngajak tetangga ngobrol santai", description: "Jaga hubungan apik", how: "Sapa karo salam lan ngobrol cendhak", benefit: "Silaturahmi lancar", status: false },
    { id: 50, title: "Ngatur meja kerja", description: "Supaya nyaman", how: "Rapikan buku, laptop, lan alat tulis", benefit: "Kerja luwih nyaman lan fokus", status: false }
];

export function randomGaeApik(){
    let hasilRandom = GaeApik[Math.floor(Math.random() * GaeApik.length)]
    hasilRandomId = hasilRandom.id
    $('#title-show').text(hasilRandom.title);
    $('#desc-show').text(hasilRandom.description);
    //Modal
    $('#titleModal').text(hasilRandom.title);
    $('#descModal').text(hasilRandom.description);
    $('#caraModal').text(hasilRandom.how);
    $('#manfaatModal').text(hasilRandom.benefit);
}

if (random) {
    random.addEventListener("click", function () {
        // Jika sudah expanded → jangan lakukan apa-apa
        if (this.classList.contains("expanded")) {
            return;
        }

        // Jika belum expanded → jalankan aksi
        randomGaeApik();
        this.classList.add("expanded");
    });
}

if(kerjakan){
    kerjakan.addEventListener("click", function () {
        $('#infoModal').modal('show')
    });
}

if(lanjutkan){
    lanjutkan.addEventListener("click", function () {
        Counter()
        Score()
        // Confetti
        createFirework();

        // Toast
        $("#happyToast").addClass("show");
        setTimeout(() => {
            $("#happyToast").removeClass("show");
        }, 4000);

        $('#infoModal').modal('hide')
        random.classList.remove("expanded");

        $('#title-show').text('Ayo Gass');
        $('#desc-show').text('Ngelakoni Kebecikan Teko Tumindak Cilik');
    });
}

function createFirework(count = 200) {
    const container = $("#fireworkContainer");
    container.empty();

    const colors = ["#FFD700","#FF4500","#FF69B4","#4CAF50","#3D8BFD","#FF6B6B","#FFB400","#CD2C58"];

    // Titik ledakan di tengah layar
    const xOrigin = window.innerWidth / 2;
    const yOrigin = window.innerHeight / 2;

    for (let i = 0; i < count; i++) {
        const particle = $("<div class='firework'></div>");
        const size = Math.random() * 8 + 4; // 4px - 12px
        particle.css({
            width: size+'px',
            height: size+'px',
            background: colors[Math.floor(Math.random()*colors.length)],
            borderRadius: '50%'
        });

        const angle = Math.random() * 2 * Math.PI; // 0-360°
        const radius = Math.random() * 300 + 100; // jarak ledakan 100-400px
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        particle.css('--x', x+'px');
        particle.css('--y', y+'px');
        particle.css({
            left: xOrigin + 'px',
            top: yOrigin + 'px',
            animation: `firework-explode ${Math.random()*1+1.5}s ease-out forwards`,
            animationDelay: Math.random() * 0.3 + 's'
        });

        container.append(particle);
    }

    setTimeout(() => container.empty(), 2500);
}