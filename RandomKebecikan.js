import { Counter , Score } from './Counter.js'
export let hasilRandomId = null;

const random = document.getElementById('random')
const skip = document.getElementById('skip')
const kerjakan = document.getElementById('kerjakan')
const lanjutkan = document.getElementById('lanjutkan')
const closeBtn = document.getElementById('close-btn');

export const GaeApik = [
  {
    id: 1,
    title: "Beri Catatan Penyemangat di Meja Teman",
    description: "Menuliskan catatan kecil penyemangat atau kalimat positif di selembar kertas dan letakkan di meja teman sebelum dia datang",
    how: "Tulis  catatan yang bisa mengemangati temanmu,kemudian letakkan diatas atau di loker meja temanmu",
    benefit: "Mengejutkan teman dengan hal positif, bisa jadi mood booster yang sangat berarti."
  },
  {
    id: 2,
    title: "Memberi Senyum dan Sapa",
    description: "Memberikan senyum dan sapaan kepada teman di kelas sebagai bentuk keramahan dan sikap positif.",
    how: "Saat masuk kelas atau bertemu teman, biasakan mengucapkan salam atau menyapa dengan senyum tulus.",
    benefit: "Menciptakan suasana kelas yang hangat, meningkatkan hubungan sosial, dan membuat teman merasa dihargai."
  },
  {
    id: 3,
    title: "Merapiakan Meja",
    description: "Menjaga meja belajar tetap rapi agar proses belajar terasa nyaman dan tidak terganggu oleh barang berserakan.",
    how: "Susun buku dan alat tulis dengan rapi, masukkan barang yang tidak digunakan ke dalam tas, dan buang sampah kecil.",
    benefit: "Meningkatkan fokus belajar, kelas terlihat lebih bersih, dan menciptakan kebiasaan disiplin."
  },
  {
    id: 4,
    title: "Meminjamkan Alat Tulis",
    description: "Membantu teman yang tidak membawa alat tulis dengan meminjamkan milik kita.",
    how: "Siapkan alat tulis cadangan dan berikan kepada teman yang membutuhkan tanpa diminta.",
    benefit: "Menumbuhkan rasa empati, kepedulian, dan mempererat persahabatan."
  },
  {
    id: 5,
    title: "Tidak Bermain HP Saat Pelajaran",
    description: "Menahan diri dari penggunaan HP agar tidak mengganggu proses belajar.",
    how: "Simpan HP di dalam tas, aktifkan mode senyap, dan fokus mendengarkan penjelasan guru.",
    benefit: "Pemahaman materi meningkat dan waktu belajar menjadi lebih efektif."
  },
  {
    id: 6,
    title: "Berani Bertanya atau Menjawab",
    description: "Mencoba aktif di kelas dengan bertanya atau menjawab pertanyaan guru.",
    how: "Catat hal yang belum dipahami lalu angkat tangan dan sampaikan dengan sopan.",
    benefit: "Melatih keberanian, meningkatkan kepercayaan diri, dan membantu memahami pelajaran."
  },
  {
    id: 7,
    title: "Memberi Apresiasi kepada Teman",
    description: "Menghargai usaha teman saat presentasi atau menjawab pertanyaan.",
    how: "Memberi tepuk tangan atau komentar positif setelah teman selesai berbicara.",
    benefit: "Membuat teman merasa dihargai dan meningkatkan rasa percaya diri mereka."
  },
  {
    id: 8,
    title: "Menjaga Ucapan di Kelas",
    description: "Berusaha tidak berkata kasar, mengejek, atau merendahkan teman.",
    how: "Pikirkan terlebih dahulu sebelum berbicara dan gunakan bahasa yang sopan.",
    benefit: "Lingkungan kelas menjadi aman, nyaman, dan saling menghormati."
  },
  {
    id: 9,
    title: "Membantu Teman yang Kesulitan",
    description: "Membantu teman yang belum memahami pelajaran atau tugas.",
    how: "Jelaskan dengan bahasa sederhana dan sabar saat teman meminta bantuan.",
    benefit: "Pemahaman diri sendiri meningkat dan hubungan pertemanan semakin erat."
  },
  {
    id: 10,
    title: "Membuang Sampah pada Tempatnya",
    description: "Menjaga kebersihan kelas dengan tidak membuang sampah sembarangan.",
    how: "Setelah menggunakan kertas atau makanan, langsung buang ke tempat sampah.",
    benefit: "Kelas menjadi bersih, sehat, dan nyaman untuk belajar."
  },
  {
    id: 11,
    title: "Memberi Pujian Tulus",
    description: "Memberikan pujian atas usaha atau hasil kerja teman.",
    how: "Ucapkan pujian sederhana dengan tulus tanpa berlebihan.",
    benefit: "Meningkatkan rasa percaya diri dan semangat belajar."
  },
  {
    id: 12,
    title: "Duduk dengan Sikap Rapi",
    description: "Menjaga posisi duduk agar tetap sopan dan siap belajar.",
    how: "Duduk tegak, kaki tidak selonjoran, dan menghadap ke depan.",
    benefit: "Terlihat lebih siap belajar dan mudah fokus."
  },
  {
    id: 13,
    title: "Catat presentasi teman kamu",
    description: "Membuat catatan yang mudah dibaca dan dipahami.",
    how: "Gunakan poin penting, garis bawah, atau warna sederhana.",
    benefit: "Memudahkan belajar ulang dan memahami materi presentasi."
  },
  {
    id: 14,
    title: "Berbagi Catatan",
    description: "Membantu teman yang tertinggal pelajaran.",
    how: "Meminjamkan atau memfoto catatan untuk teman.",
    benefit: "Menumbuhkan kepedulian dan kerja sama."
  },
  {
    id: 15,
    title: "Menjaga Volume Suara",
    description: "Tidak berbicara keras saat pelajaran berlangsung.",
    how: "Jika perlu berbicara, gunakan suara pelan atau tunggu istirahat.",
    benefit: "Kelas tetap kondusif dan fokus belajar terjaga."
  },{
  id: 16,
  title: "Memberi Salam kepada Guru",
  description: "Menyapa dan memberi salam kepada guru saat masuk atau keluar kelas sebagai bentuk sopan santun.",
  how: "Berdiri atau duduk dengan rapi, lalu ucapkan salam dengan suara yang jelas dan sopan saat guru datang.",
  benefit: "Menumbuhkan sikap hormat kepada guru dan menciptakan suasana kelas yang lebih tertib."
},
{
  id: 17,
  title: "5 Menit Meditasi",
  description: "Mengajak teman sebangku atau kelompok untuk melakukan meditasi atau hening sejenak (5 menit) sebelum pelajaran dimulai.",
  how: "Tutup mata, atur napas, dan fokus pada saat ini.",
  benefit: "Menenangkan pikiran, meningkatkan konsentrasi, dan mengurangi kecemasan."
},
{
  id: 18,
  title: "Membantu Membawa Barang",
  description: "Membantu guru atau teman membawa buku, alat, atau perlengkapan kelas.",
  how: "Tawarkan bantuan dengan sopan saat melihat orang lain kesulitan.",
  benefit: "Meringankan beban orang lain dan menumbuhkan rasa empati."
},
{
  id: 19,
  title: "Ajarkan Skill Kecil ke Teman",
  description: "Mengajarkan satu skill kecil yang kamu kuasai ke teman, seperti cara melipat origami, trik Excel, atau cara menggambar doodle.",
  how: "Ajarkan apa saya skill yang anda, bisa skill bermain game atau yang lain.",
  benefit: "Berbagi ilmu, menghabiskan waktu dengan produktif, dan memperluas kemampuan."
},
{
  id: 20,
  title: "Menunggu Giliran Berbicara",
  description: "Tidak memotong pembicaraan guru atau teman saat diskusi.",
  how: "Angkat tangan dan tunggu dipersilakan sebelum berbicara.",
  benefit: "Diskusi menjadi lebih tertib dan saling menghargai."
},
{
  id: 21,
  title: "Membersihkan Area Sekitar Tempat Duduk",
  description: "Menjaga kebersihan di sekitar kursi dan meja masing-masing.",
  how: "Sebelum pulang, pastikan tidak ada sampah atau barang tercecer.",
  benefit: "Kelas menjadi lebih bersih dan nyaman digunakan bersama."
},
{
  id: 22,
  title: "Mendengarkan Teman yang Berbicara",
  description: "Memberikan perhatian saat teman menyampaikan pendapat atau presentasi.",
  how: "Tidak berbicara sendiri, menatap pembicara, dan mendengarkan dengan sopan.",
  benefit: "Teman merasa dihargai dan komunikasi berjalan lebih baik."
},
{
  id: 23,
  title: "Berani Menyampaikan Pendapat",
  description: "Mengungkapkan pendapat dengan sopan meskipun berbeda dari yang lain.",
  how: "Susun pendapat dengan kata-kata sederhana dan sampaikan dengan tenang.",
  benefit: "Melatih keberanian dan kemampuan berpikir kritis."
},
{
  id: 24,
  title: "Ucapkan Terima Kasih 10 Kali",
  description: "Tantangan untuk mengucapkan 'terima kasih' secara tulus setidaknya kepada 10 orang yang berbeda di sekolah hari ini.",
  how: "Ucapkan Terima Kasih pada guru, penjaga, teman yang meminjamkan pensil, hingga petugas kantin.",
  benefit: "Melatih rasa syukur, meningkatkan kesadaran sosial, dan menyebarkan kebaikan lewat kata-kata."
},
{
  id: 25,
  title: "Berbagi Makanan dengan Teman",
  description: "Membagikan makanan kecil kepada teman dengan ikhlas.",
  how: "Tawarkan makanan dengan sopan tanpa memaksa.",
  benefit: "Menumbuhkan kebersamaan dan rasa peduli."
},
{
  id: 26,
  title: "Bagikan Stiker Whatsapp",
  description: "Berikan stiker random ke pada teman yang menghibur",
  how: "Buka grup peminatan RPL dan bagikan stiker anda",
  benefit: "Menghibur dan memunculkan gelak tawa teman-teman."
},
{
  id: 27,
  title: "Menjaga Diri agar Tidak Tidur di Kelas",
  description: "Berusaha tetap terjaga agar tidak melewatkan pelajaran.",
  how: "Duduk tegak, minum air putih, dan fokus ke depan.",
  benefit: "Tidak ketinggalan materi penting."
},
{
  id: 28,
  title: "Gunakan Inggris selama 10 menit",
  description: "Tantangan untuk berkomunikasi dengan teman menggunakan bahasa Inggris (sebisa mungkin) 10 menit di Kelas.",
  how: "Siapkan kosakata sehari-hari, jangan takut salah. Ajak teman untuk ikut tantangan.",
  benefit: "Meningkatkan percaya diri dan kemampuan bahasa Inggris secara praktis."
},
{
  id: 29,
  title: "Berani Meminta Maaf",
  description: "Mengakui kesalahan dan meminta maaf dengan tulus.",
  how: "Datangi orang yang bersangkutan dan ucapkan maaf tanpa alasan berlebihan.",
  benefit: "Masalah cepat selesai dan hubungan kembali baik."
},
{
  id: 30,
  title: "Mengucapkan Terima Kasih",
  description: "Menghargai bantuan orang lain dengan ucapan terima kasih.",
  how: "Ucapkan secara langsung dengan nada tulus.",
  benefit: "Membuat orang lain merasa dihargai."
},
{
  id: 31,
  title: "Menjaga Ketertiban Kelas",
  description: "Tidak membuat kegaduhan saat proses belajar berlangsung.",
  how: "Menahan diri untuk tidak bercanda berlebihan.",
  benefit: "Kelas menjadi lebih kondusif."
},
{
  id: 32,
  title: "Putar Video Inspiratif Singkat",
  description: "Memutar video inspiratif atau edukatif yang relevan dengan pelajaran",
  how: "Bukan Youtube dan simak video tersebut hingga selesai",
  benefit: "Memperluas wawasan"
},
{
  id: 33,
  title: "Berikan Pantun",
  description: "Membuat dan membacakan pantun singkat di depan kelas untuk mencairkan suasana, menyemangati, atau memperkenalkan sebuah topik pelajaran.",
  how: "Buat pantun 4 baris (2 baris sampiran, 2 baris isi) yang relevan dengan situasi kelas atau materi pelajaran.",
  benefit: "Melatih kreativitas dalam berbahasa dan berpikir cepat, memperkaya kosa kata, mencairkan suasana kelas yang tegang, serta membuat pembelajaran sastra menjadi lebih hidup dan menyenangkan."
},
{
  id: 34,
  title: "Menjaga Fasilitas Kelas",
  description: "Menggunakan meja, kursi, dan alat kelas dengan baik.",
  how: "Tidak mencoret atau merusak barang milik bersama.",
  benefit: "Fasilitas tetap layak digunakan."
},
{
  id: 35,
  title: "Sebutkan semua nama anak RPL",
  description: "Tantangan untuk bisa menyebutkan nama semua orang di kelas, termasuk yang jarang berinteraksi.",
  how: "Berdiri dan sebutkan semua nama anak di kelas RPL, jika tidak kenal maka hampiri dia dan ajak kenalan",
  benefit: "Membuat setiap orang merasa diakui dan dihargai keberadaannya."
},
{
  id: 36,
  title: "Tulis Kata Motivasi di Papan",
  description: "Menuliskan kata-kata motivasi atau quote inspiratif di sudut papan tulis sebelum pelajaran dimulai.",
  how: "Maju ke depan, tulis kata kata motivasi dengan rapi di papan.",
  benefit: "Menyemangati seluruh kelas, termasuk guru, dan menciptakan pikiran positif."
},
{
  id: 37,
  title: "Memberi Semangat kepada Teman",
  description: "Menyemangati teman yang terlihat lelah atau kurang percaya diri.",
  how: "Ucapkan kata positif dan dukungan sederhana.",
  benefit: "Meningkatkan motivasi dan kebersamaan."
},
{
  id: 38,
  title: "Bertanya Minimal 1 Kali",
  description: "Tantang diri untuk mengajukan pertanyaan, pendapat, atau saran tentang aplikasi ini.",
  how: "Ajukan pertanyaan, pendapat, atau saran tentang aplikasi ini.",
  benefit: "Mendorong rasa ingin tahu, aktif dalam pembelajaran, dan membantu teman yang untuk mengembangkan aplikasi."
},
{
  id: 39,
  title: "Menggunakan Bahasa yang Sopan",
  description: "Menjaga kata-kata agar tidak menyakiti orang lain.",
  how: "Biasakan berbicara dengan nada baik.",
  benefit: "Lingkungan kelas lebih positif."
},
{
  id: 40,
  title: "Menulis dengan Tangan Kiri",
  description: "Tantangan untuk menulis 3 kalimat tentang materi sekolah dengan tangan kanan kanan",
  how: "Siapkan buku dan pulpen. Bersabarlah dengan tulisan yang mungkin berantakan. Fokus pada isi, bukan kerapian.",
  benefit: "Melatih otak sisi yang lain, meningkatkan koordinasi motorik halus, dan memberikan pengalaman yang lucu dan menantang."
},
{
  id: 41,
  title: "Push up 10x",
  description: "Tantangan fisik untuk melakukan 10 kali push up dengan teknik yang benar",
  how: "Carilah ruang kosong di sisi kelas ,Posisikan tangan selebar bahu, tubuh lurus seperti papan, turunkan badan hingga dada hampir menyentuh lantai, lalu dorong kembali ke posisi awal. Ulangi hingga 10 kali.",
  benefit: "Meningkatkan aliran darah dan oksigen ke otak sehingga meningkatkan fokus dan kewaspadaan saat belajar, memperkuat otot lengan, bahu, dan inti tubuh, serta memberikan suntikan energi dan semangat untuk menghadapi pelajaran."
}
];


// Random Biasa 
// export function randomGaeApik(){
//     let hasilRandom = GaeApik[Math.floor(Math.random() * GaeApik.length)]
//     hasilRandomId = hasilRandom.id
//     $('#title-show').text(hasilRandom.title);
//     $('#desc-show').text(hasilRandom.description);
//     //Modal
//     $('#titleModal').text(hasilRandom.title);
//     $('#descModal').text(hasilRandom.description);
//     $('#caraModal').text(hasilRandom.how);
//     $('#manfaatModal').text(hasilRandom.benefit);
// } 

// Random Unik
export function randomGaeApik() {
        const totalElements = GaeApik.length;
        const historyJSON = localStorage.getItem('historyHarian');
        
        // Inisialisasi array untuk menampung indeks berbasis 0 yang sudah terpakai
        let usedIndicesBase0 = [];
        
        // Ambil data dari localStorage (berbasis 1)
        if (historyJSON) {
            const historyPlusOne = JSON.parse(historyJSON);
            // Konversi semua nilai berbasis 1 menjadi indeks berbasis 0
            usedIndicesBase0 = historyPlusOne.map(item => item - 1);
        }
        
        // Cek apakah semua sudah terambil
        if (usedIndicesBase0.length > totalElements - 1) {
            console.warn("Semua item sudah terpilih. Silakan reset riwayat untuk memulai kembali.");
            return null;
        }

        // 2. Tentukan indeks yang tersedia
        // Membuat array semua indeks yang mungkin: [0, 1, 2, ...]
        const allIndices = Array.from({ length: totalElements }, (_, i) => i);
        
        // Filter indeks: hanya ambil yang BELUM ada di usedIndicesBase0
        const availableIndices = allIndices.filter(index => !usedIndicesBase0.includes(index));

        // 3. Pilih satu indeks acak dari yang tersedia
        const randomIndexInAvailable = Math.floor(Math.random() * availableIndices.length);
        const chosenIndex = availableIndices[randomIndexInAvailable];

        let hasilRandom = GaeApik[chosenIndex]
        hasilRandomId = hasilRandom.id

        $('#title-show').removeClass('text-zoom')
        $('#desc-show').removeClass('text-zoom')
        // force reflow
        void $('#title-show')[0].offsetWidth;
        void $('#desc-show')[0].offsetWidth;
        $('#title-show').addClass('text-zoom')
        $('#desc-show').addClass('text-zoom')
        $('#title-show').text(hasilRandom.title);
        $('#desc-show').text(hasilRandom.description);
        $('#titleModal').text(hasilRandom.title);
        $('#descModal').text(hasilRandom.description);
        $('#caraModal').text(hasilRandom.how);
        $('#manfaatModal').text(hasilRandom.benefit);
    }

if (random) {
    random.addEventListener("click", function () {
        if (this.classList.contains("expanded")) {
            return;
        } else {
            lanjutkan.disabled = false;
            let validFull = randomGaeApik()
            if(validFull === null){
                // Confetti
                createFirework();
                // Toast
                $("#fullToast").addClass("show");
                setTimeout(() => {
                    $("#fullToast").removeClass("show");
                }, 4000);
            }else{
                this.classList.add("expanded");
            }
        }

        if (this.classList.contains("expanded")) {
            $('#close-btn').prop('hidden', false);
        } else {
            $('#close-btn').prop('hidden', true);
        }
    });
}

if (skip) {
    skip.addEventListener("click", function () {
    // Ambil historySkip dari localStorage, kalau belum ada buat array kosong
    let historySkip = JSON.parse(localStorage.getItem('historySkip')) || [];

    // Cek apakah hasilRandomId sudah ada, kalau belum push
    if (!historySkip.includes(hasilRandomId)) {
        historySkip.push(hasilRandomId);
        localStorage.setItem('historySkip', JSON.stringify(historySkip));
    }

    // Panggil fungsi random selanjutnya
    randomGaeApik();
});

}

if(kerjakan){
    kerjakan.addEventListener("click", function () {
        $('#infoModal').modal('show')
    });
}

if(closeBtn){
    closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        lanjutkan.disabled = true;
        random.classList.remove("expanded");
        $('#close-btn').prop('hidden', true);
        $('#title-show').text('Ayo Gass');
        $('#desc-show').text('Ngelakoni Kebecikan Teko Tumindak Cilik');
    });
}

if(lanjutkan){
    lanjutkan.addEventListener("click", function () {
        this.disabled = true;
        Counter()
        Score()
        // Hapus Skip
        if (JSON.parse(localStorage.getItem('historySkip')).includes(hasilRandomId)) {
            let historySkipHapus = JSON.parse(localStorage.getItem('historySkip'))
            historySkipHapus = historySkipHapus.filter(item => item !== hasilRandomId)
            localStorage.setItem('historySkip', JSON.stringify(historySkipHapus))
        }
        // Confetti
        createFirework();
        // Toast
        $("#happyToast").addClass("show");
        setTimeout(() => {
            $("#happyToast").removeClass("show");
        }, 4000);
        $('#infoModal').modal('hide')
        random.classList.remove("expanded");
        $('#close-btn').prop('hidden', true);
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
