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
        title: "Tangi isuk ojo Kawanan", 
        description: "tangi turu ojo kawanen, awakmu kudu tangi luwih isuk ben awak iso luwih seger, pikiran yo luwih fresh.", 
        how: "Pasang alarm 30-45 menit luwih awal, deleh HP adoh cek kowe isa tangi gara gara alarm.", 
        benefit: "Iso nyiapke urusan esuk luwih santai, ora grusa-grusu, lan pikiran dadi luwih tenang. Tangi iduk nggawe awakmu luwih produktif lan ora kesusu sedino iku. Wong sing tangi luwih awal biasane mood e luwih stabil." 
    },
    { 
        id: 2, 
        title: "Ngombe banyu putih 2 gelas", 
        description: "Sakwise turu sewengi, awakmu biasane kekurangan cairan, mangkane kudu ngumbe banyu ben ora kemlithik lan tetap seger.", 
        how: "Siapke gelas banyu putih nang meja utawa samping kasur, ben pas tangi iso langsung ngombe ora males.", 
        benefit: "Metabolisme awak lancar, ora gampang kesel, lan kulit luwih seger. Banyu iso mbantu ngusir ngantuk lan gawe awakmu luwih enteng. Kesehatan pencernaanmu yo dadi luwih teratur." 
    },
    { 
        id: 3, 
        title: "Mlaku-mlaku 10 menit", 
        description: "Mlaku-mlaku cedek nang njaba omah iso nggawe jantungmu gerak, nambah oksigen, lan pikiran dadi luwih fresh.", 
        how: "Cukup mlaku nang teras, gang ngarep, utowo muter-muter nang halaman, karo tarik napas jero.", 
        benefit: "Mood dadi luwih apik, awak ra loyo, lan luweh semangat. Mlaku-mlaku cendhek iso nyegarke otak lan ngurangi stres. Kadang malah muncul ide-ide apik pas mlaku." 
    },
    { 
        id: 4, 
        title: "Meditasi cendhak", 
        description: "Wektu iki kanggo nenangke pikiran, ngatur napas pelan-pelan, lan ngilangke rasa sumpek ning njero ati.", 
        how: "Duduk nang kursi utawa lesehan, tutup mripat, tarik napas alon-alon, rasakke sekitar 3-5 menit wae cukup.", 
        benefit: "Stres iso mudhun, otak luwih fokus, lan ati luwih tenang. Pikiranmu dadi luwih jernih lan ora gampang kegawa emosi. Cocok kanggo persiapan ngadepi aktivitas sak dinane." 
    },
    { 
        id: 5, 
        title: "Nulis jurnal", 
        description: "Catet hal-hal positif sing wis dialami utawa rencana sing pengen ditindakake, ben ati iso luwih lega lan sadar.", 
        how: "Ambil buku catetan, tulis minimal 3 hal positif utawa ucapan syukur sing muncul ing pikiranmu.", 
        benefit: "Mbangun rasa syukur, ngurangi mikir negatif, lan nggawe mental luwih kuat. Kowe dadi luwih sadar karo hal-hal positif sing wis koe alami. Nulis yo iso dadi cara ngobrol karo dirimu dhewe." 
    },
    { 
        id: 6, 
        title: "Ngrungokake lagu favorit", 
        description: "Awali pagi karo lagu kesayangan ben atimu iso goyang ayem, seneng, lan ora cranky.", 
        how: "Puter lagu 10-15 menit nang HP, headset, atau speaker, sambil santai, goyang tipis-tipis yo ra popo.", 
        benefit: "Mood langsung cerah, energy positif nambah, lan ora gampang nesuan. Lagu iso mbantu ngilangke suntuk lan nambah semangat urip. Kadhang yo iso nggawe semangat kerja tambah jos." 
    },
    { 
        id: 7, 
        title: "Ngucap pujian kanggo wong liya", 
        description: "Ngomong apik utawa muji wong liya iso nggawe hubunganmu tambah akrab, ati yo tambah ayem.", 
        how: "Ucapke langsung, lewat chat, utawa WA, contone 'makasih yo', 'keren awakmu', atau 'semangat terus rek'.", 
        benefit: "Gawe hubungan sosial tambah akrab, lan energi positif iso ketular. Wong liya seneng, kowe yo melu seneng. Kebaikan cilik iki iso ngubah suasana sak hari." 
    },
    { 
        id: 8, 
        title: "Maca artikel ringkes", 
        description: "Wektu mek titik iso dimanfaatke kanggo nambah ilmu utawa inspirasi sing iso nyadarke pikiranmu.", 
        how: "Buka artikel motivasi, artikel pengetahuan, atau tulisan sing menarik nang HP utawa buku.", 
        benefit: "Nambah wawasan, kreativitas iso muncul, lan pikiran ora mandek. Artikel cilik kadang iso marai semangat lan nambah inspirasi anyar. Ora perlu suwe, sing penting manfaat." 
    },
    { 
        id: 9, 
        title: "Rapikno meja kerja", 
        description: "Meja sing resik lan rapi iso nggawe pikiran luwih fokus, ra semrawut lan enak dipandang.", 
        how: "Buang sampah cilik, susun buku utawa alat tulis, lap meja sek ben ra bledug.", 
        benefit: "Produktivitas tambah meningkat lan pikiran luwih fokus. Lingkungan sing resik iso ngurangi rasa mumet lan males kerja. Kowe yo iso ngrasakke rasa puas ndelok ruang rapi." 
    },
    { 
        id: 10, 
        title: "Ngombe teh utawa kopi santai", 
        description: "Nyantai diluk karo secangkir teh utawa kopi iso nggawe awak lan pikiran lebih rileks.", 
        how: "Siapke teh utawa kopi favoritmu, lungguh santai, hirup aromane sakdurunge diminum.", 
        benefit: "Pikiran luwih santai, rasa tegang iso ilang, lan semangat muncul perlahan. Minuman hangat iso dadi temen ngobrol karo diri sendiri. Wektu sing sederhana, nanging efeknya enak tenan." 
    },
    { 
        id: 11, 
        title: "Ngucap syukur esuk-esuk", 
        description: "Awali dina nganggo pikiran positif lan rasa syukur ben ati ora mumet lan ora gampang ngeluh.", 
        how: "Tutupi mripat diluk, tarik napas alon, terus pikirke minimal siji utawa loro hal apik sing wis koe duweni.", 
        benefit: "Mood luwih positif lan hati luwih ayem sak harian. Rasa syukur nggawe ati luwih legowo nampa keadaan. Kowe dadi luwih ora gampang ngeluh lan overthinking." 
    },
    { 
        id: 12, 
        title: "Ngucap salam karo tonggo-tonggo", 
        description: "Tetonggoan sing akrab iso nggawe suasana lingkungan luwih tentrem lan rukun.", 
        how: "Pas metu omah, sempetno mampir diluk, senyum, sapa, utawa ngajak ngobrol ringan.", 
        benefit: "Hubungan sosial tambah guyub, suasana lingkungan dadi adem lan rukun. Kabeh jadi luwih akrab lan nyaman urip jejeran. Kowe yo dadi luwih pede lan hangat karo wong sak sekitar." 
    },
    { 
        id: 13, 
        title: "Ngrampungke PR cilik", 
        description: "Ngerjakke tugas kecil sakdurunge sibuk iso nggawe rasa produktif sak awal dina.", 
        how: "Pilih tugas sing sederhana lan cepet rampung, koyok jawab chat penting, bersihke mejamu, atau baleni catetan.", 
        benefit: "Iso ngrasakake rasa puas lan semangat produktif sejak pagi. Kegiatan cilik iso jadi awal momentum sing apik. Mbangun rasa percaya diri nek kowe iso nyicil tugas." 
    },
    { 
        id: 14, 
        title: "Ngresiki kamar", 
        description: "Kamar sing resik dan rapi iso nggawe pikiranmu ora semrawut lan ati luwih tentrem.", 
        how: "Sapu lantai, lap meja, benahi kasur lan susun barang-barang sing mbradangan.", 
        benefit: "Kamar resik gawe pikiran adem, tenang, lan ora sesek. Ruang sing rapi iso mbangun energi positif nang atimu. Kowe yo dadi luwih betah nang kamar." 
    },
    { 
        id: 15, 
        title: "Nyiram tanduran", 
        description: "Ngrawat tanduran cilik iso nggawe rasa sayang karo alam lan ngademke pikiran.", 
        how: "Ambil semprotan banyu utawa gayung cilik, siram tanduran nang pot-pot sekitar omah.", 
        benefit: "Rasa seneng muncul, pikiran adem, lan ati luwih ayem. Kowe yo iso sinau sabar lan perhatian saka tanduranmu. Ngrasa urip bareng makhluk ijo rasane adem tenan." 
    },
    { 
        id: 16, 
        title: "Maca buku cendhak", 
        description: "Ngisi otak pagi nganggo ilmu ringan ben pikiran ora mandek lan tetep aktif.", 
        how: "Njupuk buku favorite, baca minimal 5-10 menit, ora usah akeh-akeh sing penting konsisten.", 
        benefit: "Wawasan bertambah, pikiran seger, lan iso memunculke inspirasi anyar. Yen rutin, iso ngembangke cara mikirmu dadi luwih jero. Kowe yo dadi luwih pinter ngobrol." 
    },
    { 
        id: 17, 
        title: "Nulis quotes motivasi", 
        description: "Quotes iso dadi penyemangat batin lan penguat pikiran positif nek dibaca ulang.", 
        how: "Tulis siji quotes sing nyemangati nang buku catetan, sticky note, utowo HP ben iso diwaca kapan wae.", 
        benefit: "Iso nguatke mental lan nambah keberanian ngadepi dino. Quotes sing ditulis iso dadi pengingat nek kowe kuat lan iso. Kadang mung kalimat cilik, ning efeknya gede nang batin." 
    },
    { 
        id: 18, 
        title: "Ngopi bareng kanca", 
        description: "Ngobrol santai karo kanca iso mbuang rasa suntuk lan nambah hubungan akrab.", 
        how: "Ajak kanca ngopi nang teras, warung, utawa video call sekedar ngobrol receh santai.", 
        benefit: "Ati luwih seneng, hubungan makin akrab, lan suwe - suwe stres iso ilang. Obrolan sederhana iso dadi obat pikiran. Kadang malah muncul ide-ide menarik saka obrolan ringan." 
    },
    { 
        id: 19, 
        title: "Ngresiki HP lan laptop", 
        description: "Perangkat sing resik lan rapi iso nggawe enak dienggo lan ora ruwet pas butuh cepet.", 
        how: "Lap layar nganggo kain alus, hapus file ora penting, rapikan folder biar gampang dicari.", 
        benefit: "Pemakaian luwih nyaman, kerjaan luwih teratur, lan perangkat luwih awet. File rapi nggawe awakmu ora bingung pas butuh. Rasane yo lega ndelok perangkat bersih kinclong." 
    },
    { 
        id: 20, 
        title: "Ngatur jadwal sederhana", 
        description: "Nulis rencana cilik iso mbantu ngatur kegiatan supaya ora kebuang waktune sedinoan.", 
        how: "Tulis minimal 3 target utama sing penting nang buku, notes HP, atau kertas kecil.", 
        benefit: "Fokus tambah kuat, waktu ora kebuang sia-sia, lan kamu luwih produktif. Jadwal cilik iso ndadekke arah lan tujuanmu jelas sak harian. Kowe yo ora gampang bingung arep ngopo." 
    },
    { 
        id: 21, 
        title: "Nggawe cemilan sehat", 
        description: "Awak butuh asupan sing sehat tapi tetep enak, ben ora mung ngemil sembarangan.", 
        how: "Siapke buah seger, yoghurt, utawa kacang-kacangan, deleh nang piring cantik ben ngganjel weteng.", 
        benefit: "Awak tetep sehat, ora gampang loyo, lan otak luwih fokus mergo asupanmu bersih lan bergizi. Kegiatan cilik iki iso ngurangi ngemil sembarangan sing ga jelas manfaat. Nek rutin, iso nggawe kebiasaan sehat sing awet." 
    },
    { 
        id: 22, 
        title: "Ngirim pesan positif", 
        description: "Sak cilik pesan apik iso nyebarno kebaikan lan nggawe suasana luwih ayem.", 
        how: "Kirim pesan semangat, ucapan makasih, utawa doa apik nang WA, IG, utowo chat kanca.", 
        benefit: "Wong sing nampa pesenmu iso krasa dihargai lan semangat maneh, meskipun cuma kata-kata sederhana. Sampean yo ikut seneng, krasa bermanfaat lan nyebar energi positif. Nek sering, hubungan karo kanca iso makin erat." 
    },
    { 
        id: 23, 
        title: "Nggawe playlist musik", 
        description: "Musik iso dadi pelarian sing nyenengke lan iso ningkatno mood kapan wae pas awakmu butuh.", 
        how: "Tambah lagu-lagu favorit nang playlist HP, Spotify, YouTube, ben gampang diputarke kapan wae.", 
        benefit: "awakmu bakal duwe hiburan sing gampang diakses kapan wae, iso ningkatno mood lan ngilangno bete. Musik sing pas iso nggawe semangatmu bali nek lagi capek atau suntuk. Playlist iki iso dadi teman setiamu kapan wae." 
    },
    { 
        id: 24, 
        title: "Senam ringan", 
        description: "Olahraga cilik nanging penting kanggo gerakke badan ben ora kaku.", 
        how: "Gerak-gerakan sederhana 5-10 menit, koyok stretching tangan, muter pundak, atau goyang tipis.", 
        benefit: "Awak dadi luwih seger, ora gampang pegel, lan pikiran luwih enteng. Senam cilik iki iso ngilangno stres mergo kesuwen lungguh. Nek rutin, awak iso luwih sehat masio ora olahraga berat." 
    },
    { 
        id: 25, 
        title: "Ngucap salam esuk-esuk", 
        description: "Awali dina karo sapaan apik iso gawe suasana omah luwih nyenengke.", 
        how: "Sapa anggota keluarga, ucapke salam, senyum, atau canda tipis sakdurunge mulai aktivitas.", 
        benefit: "Suasanane rumah dadi luwih hangat lan akrab mergo awal hari diawali energi positif. Kabeh wong iso ngrasakke perhatian lan rasa dihormati. Iki kegiatan cilik tapi iso nguatno hubungan lan mood sak dina." 
    },
    { 
        id: 26, 
        title: "Marekno tugas rumah sing gampang", 
        description: "Tugas rumah sing gampang iso dirampungke sekalian ben omah ora berantakan.", 
        how: "Rapikno barang-barang cilik, sapu lantai sak sudut, atau cuci gelas bekas ngopi.", 
        benefit: "Lingkungan resik nggawe awakmu luwih tenang lan ora bingung golek barang. Kerjaan iso luwih fokus mergo ora keganggu amburadul barang. Pikiran luwih adem lan suasana omah kerasa nyaman." 
    },
    { 
        id: 27, 
        title: "Nulis rencana minggu", 
        description: "Persiapan kegiatan seminggu iso nggawe pikiran luwih tertata lan ora bingung.", 
        how: "Tulis minimal 3 prioritas utawa target utama minggu iki nang buku, notes HP, atau kalender.", 
        benefit: "Uripmu dadi luwih tertata, ora bingung kudu mulai dari ngendi. Kegiatan luwih jelas arahe lan ora gampang kebuang-buang waktu. Rasa puas muncul nek tugas sing direncanakake terpenuhi." 
    },
    { 
        id: 28, 
        title: "Nggawe kreasi seni cilik", 
        description: "Nyalurkan kreativitas iso jadi hiburan batin lan ngilangke suntuk.", 
        how: "Coba o gambar sederhana, nulis puisi receh, doodle, atau kerajinan DIY sederhana.", 
        benefit: "Kreativitasmu iso metu lan ra iso ketekan mung mikir wae. Sampean iso ngrasakke rasa seneng lan puas mergo hasil karya meskipun sederhana. Iki iso dadi pelarian positif nek lagi jenuh." 
    },
    { 
        id: 29, 
        title: "Ngobrol karo kanca lama", 
        description: "Nyambung hubungan lawas iso nggawe ati seneng lan rasa kangen ilang.", 
        how: "Telpon sediluk, kirim WA, atau chatting santai karo kanca sing wis suwe ora kontak.", 
        benefit: "Hubungan lawas sing meh ilang iso nyambung maneh lan dadi luwih akrab. Ati dadi lega lan seneng mergo iso nostalgia lan tukar crita lawas. Iki iso nguatno rasa kekeluargaan lan persahabatan." 
    },
    { 
        id: 30, 
        title: "Nonton video edukatif", 
        description: "Nambah ilmu ora kudu abot, cukup video ringan tapi manfaat.", 
        how: "Buka YouTube, TikTok edukatif, utowo video motivasi minimal 10 menit, nek iso dicatet sek.", 
        benefit: "Selain hiburan, video edukatif iso nambah ilmu pengetahuan secara santai lan gampang dicerna. Sampean iso ngerti hal-hal anyar tanpa merasa terbebani. Nek sering, wawasanmu tambah luas tanpa kerasa." 
    },
    { 
        id: 31, 
        title: "Ngrapihin lemari", 
        description: "Lemari sing rapi iso nggawe kamar ora semrawut lan enak dipandang, ora nggawe pikiran ruwet.", 
        how: "Noto klambi sing wis acak-acakan, pisahno sing bersih lan sing kudu dicuci, trus rapikno barang-barang kecil nang pojokan.", 
        benefit: "Sampean ora perlu mumet mikir baju ilang nang lemari, barange gampang ditemu. Lemari sing rapi iso nggawe suasana ati luwih tenang lan nyaman. Iki kebiasaan cilik sing ningkatno rasa disiplin lan keteraturan." 
    },
    { 
        id: 32, 
        title: "Nggawe catatan resep masakan", 
        description: "Belajar masak ora kudu langsung angel, iso mulai saka resep simpel sing enak lan gampang ditiru.", 
        how: "Tulis resep anyar nang buku catetan utawa HP, lengkap karo bahan lan langkah-langkah sederhanane.", 
        benefit: "Sampean iso masak kapan wae tanpa bingung golek resep, tinggal ndelok catetanmu. Rasa puas muncul mergo iso masak karya sendiri. Nek rutin, iso jadi koleksi resep pribadi sing bangga dibagi menyang wong liya." 
    },
    { 
        id: 33, 
        title: "Maca berita positif", 
        description: "Berita sing apik iso nggawe pikiran adem, ora stres karo berita sing ngawe semangat mudhun.", 
        how: "Pilih berita inspiratif, kisah sukses, utowo kabar positif saka internet utawa TV, cukup 5-10 menit wae.", 
        benefit: "Berita positif iso ningkatno mood lan ngurangi rasa negatif saka berita sing bikin stres. Pikiran dadi lebih optimis lan semangat menjalani hari. Owah-owahan cilik iki iso ningkatno kualitas hidup." 
    },
    { 
        id: 34, 
        title: "Ngajak dolan keluarga cilik", 
        description: "Wektu bareng keluarga masio mek diluk iso nggawe hubungan tambah hangat lan akrab.", 
        how: "Metu omah bareng keluarga minimal 15-20 menit, entah mlaku-mlaku, tuku jajanan, atau ngobrol nang teras.", 
        benefit: "Hubungan keluarga dadi makin akrab, ora cuma kumpul nang omah wae. Wektu cilik bareng-bareng iso dadi kenangan hangat sing ora iso dituku. Ati dadi luwih tentrem lan merasa ora kesepian." 
    },
    { 
        id: 35, 
        title: "Nganyari profil sosial media", 
        description: "Profil sing rapi lan apik iso nggawe rasa percaya dirimu meningkat lan tampil luwih profesional.", 
        how: "Ganti foto profil, tulis bio sing luwih jelas, atau hapus postingan lawas sing ra perlu.", 
        benefit: "awakmu iso merasa lebih percaya diri mergo penampilan online rapi lan sesuai dirimu. Kadang update profil iso ngasih semangat anyar, kaya refresh hidup digitalmu. Wong liya yo iso ngerti versi terbaikmu." 
    },
    { 
        id: 36, 
        title: "Nyusun playlist belajar", 
        description: "Musik sing pas iso nambah fokus lan nggawe suasana belajar luwih tenang ora kebacut sepi.", 
        how: "Tambah lagu-lagu instrumental, lo-fi, atau musik santai nang playlist HP utawa Spotify khusus belajar.", 
        benefit: "Belajar dadi luwih fokus mergo musik iso nolak bosan lan gangguan pikiran. awakmu iso nyerap ilmu luwih cepet lan tenang. Nek dilakoni rutin, kualitas belajarmu iso meningkat lumayan akeh." 
    },
    { 
        id: 37, 
        title: "Ngirit listrik cilik", 
        description: "Ngirit listrik iku langkah cilik sing iso bantu lingkungan lan dompetmu yo sekalian.", 
        how: "Pateni lampu, kipas, atau TV sing ora dipakai, cabut charger nek wis ora kepake.", 
        benefit: "awakmu iso melu ngirit listrik lan bantu lingkungan tetep lestari. Kebiasaan cilik iki iso dadi langkah awal peduli bumi. Nek diterusno, iso ngirit biaya listrik lan nggawe lingkungan luwih nyaman." 
    },
    { 
        id: 38, 
        title: "Ngasah kemampuan bahasa", 
        description: "Belajar bahasa anyar iso dadi kegiatan menarik lan bermanfaat jangka panjang.", 
        how: "Baca artikel bahasa asing 10 menit, catet kosa kata anyar, utawa cobak ngomong siji-loro kalimat.", 
        benefit: "Kosa kata nambah, otak iso mikir luwih luwes lan terbuka karo budaya liane. awakmu jadi ora kagok nek ketemu istilah asing. Nek rutin, iso ningkatno skill bahasa tanpa keroso." 
    },
    { 
        id: 39, 
        title: "Nulis daftar belanja", 
        description: "Persiapan belanja cilik iso ngabantu ngirit waktu lan duit ben ora kalap tuku barang sing ra perlu.", 
        how: "Tulis barang sing penting dan perlu dibeli, cek stok omah sek sakdurunge berangkat.", 
        benefit: "Belanja dadi lebih tertata, ora kesuwen nang toko, lan ora kebuang-buang duit. awakmu iso fokus tuku barang sing bener-bener perlu. Ati dadi lega mergo ora menyesal belanja sing ora penting."
    },
    { 
        id: 40, 
        title: "Ngatur email", 
        description: "Email sing kebek spam iso nggawe ruwet lan ngganggu fokus kerja utawa sekolah.", 
        how: "Hapus email spam, arsip email penting, lan susun folder ben gampang dicari.", 
        benefit: "Emailmu terasa rapi lan bersih, ora mumet delok spam numpuk. Kerjaan lebih lancar mergo informasi penting gampang ditemu. Nek terus dilakoni, pekerjaan terasa lebih profesional lan tertata." 
    },
    { 
        id: 41, 
        title: "Nulis puisi cilik", 
        description: "Ekspresikno perasaanmu, iso soal rasa seneng, sedih, utawa mung cerita ati sing ora iso diomongno. Puisi sederhana nanging nduweni makna lan iso ngobong rasa ati.", 
        how: "Tulis 4-6 baris puisi kreatif nang kertas utawa catetan HP. Pilih tema sing nyentuh ati, tulis nganggo bahasamu dewe sak nyamané, ora usah mikir aturan puisi.", 
        benefit: "Nulis puisi iso mbantu ngeluarno rasa sing ora iso diucapke langsung. Ati dadi luwih plong, pikiran luwih lega, lan kreativitas iso berkembang. Sampean yo iso merasa lebih peka karo perasaanmu dhewe.", 
    },
    { 
        id: 42, 
        title: "Nganyari kalender aktivitas", 
        description: "Supaya ora kelangan kegiatan penting, tugas, rapat, utawa acara karo konco. Kalender dadi pengeling ben urip luwih tertata lan ora grasak-grusuk.", 
        how: "Catet acara penting minggu iki nang kalender HP, buku agenda, utawa notes. Yen perlu, tambahi alarm ben ora lali.", 
        benefit: "awakmu ora gampang lali kegiatan penting lan dadi luwih tertata. Pikiran luwih tenang mergo kabeh wis dijadwalno dengan jelas. Nek sering, hidupmu iso jadi lebih terencana dan produktif.", 
    },
    { 
        id: 43, 
        title: "Nyetel alarm cilik kanggo istirahat", 
        description: "Awakmu kadang kerja terus nganti lali ngasoh. Alarm iki ngilingake ben awak iso istirahat sebentar ben ora kecapekan.", 
        how: "Setel alarm 1-2 kali saben dina, misal jam 10 esuk lan 3 sore. Nalika muni, berhenti sebentar, ambek napas, stretching, utawa ngombe banyu.", 
        benefit: "Awakmu ora gampang capek lan pikiran ora kerasa mumet mergo isih sempet istirahat. Kegiatan dadi lebih seimbang antara kerja lan ngaso. Nek rutin, awakmu iso luwih sehat lan semangat terus.", 
    },
    { 
        id: 44, 
        title: "Nggawe doodle cilik", 
        description: "Kegiatan santai tapi tetep kreatif. Gambar cilik-cilik sak karepmu, ora usah apik, sing penting ngekspresikno imajinasi lan ngilangno bosan.", 
        how: "Gambar doodle nang kertas kosong, buku, utawa catetan HP. Gambar kucing, awan, tulisan lucu, utawa bentuk aneh sak kepenginanmu.", 
        benefit: "Doodle bantu ngilangno rasa bosan, stres, lan mumet kepala. awakmu iso ngrasakke fun cilik sing marai ati seneng. Kreativitasmu yo iso berkembang tanpa tekanan.", 
    },
    ,
    { 
        id: 45, 
        title: "Ngatur playlist olahraga", 
        description: "Supaya olahraga ora membosankan lan lebih semangat, butuh musik sing iso nyemangati gerakan lan ngangkat mood.", 
        how: "Tambah lagu-lagu upbeat atau semangat durasi 10-15 menit nang playlist olahraga. Pilih lagu sing nggawe awakmu pingin goyang atau gerak.", 
        benefit: "Olahraga dadi lebih semangat lan ora keraso capek mergo musik sing nyemangati. Mood iso langsung naik meskipun kegiatan fisik sederhana. lek sering, awak iso luwih sehat lan happy.", 
    },
    { 
        id: 46, 
        title: "Ngucap makasih nang wong liyo", 
        description: "Kegiatan sederhana sing iso nambah vibes positif lan nggawe wong liyo ngrasakno dihargai.", 
        how: "Ucapan makasih nganggo lisan, chat WA, atau tulisan cilik. Yen perlu, tambahi emotikon ben luwih hangat lan tulus.", 
        benefit: "Ngucap makasih iso nyebarke energi positif neng sekitar lan nggawe suasana luwih hangat. Wong sing ngerungokno iso ngrasakke dihargai lan diapresiasi. awakmu yo dadi pribadi sing lebih ramah lan rendah hati.", 
    },
    { 
        id: 47, 
        title: "Nggawe plan sederhana besok", 
        description: "Supaya hari luwih fokus lan ora bingung kudu lapo. Rencana cilik iso dadi pandhuan sak dino.", 
        how: "Tulis 3 target penting besok iki nang kertas atau HP. Pilih sing sederhana tapi iso dilakoni seharian.", 
        benefit: "awakmu dadi luwih fokus lan ora bingung mikir kudu ngapa dhisik. Rasa produktif meningkat lek iso nuruti rencana sing wes ditulis. Ati dadi seneng mergo tugasmu kelakon sesuai target.", 
    },
    { 
        id: 48, 
        title: "Nulis doa cendhak", 
        description: "Doa sederhana kanggo ngilingake rasa syukur, ketenangan, lan pengharapan anyar kanggo dina iki.", 
        how: "Doa 2-3 kalimat nang hati atau tulisan. Ora usah panjang, sing penting tulus lan ikhlas saka atimu.", 
        benefit: "Doa cilik iso menenangkan hati lan membuat rasa syukur ke hidup sing wes dilakoni. awakmu iso merasa lebih adem lan ora gampang stres. Nek sering, hati iso lebih kuat dan sabar menghadapi hari-hari.", 
    },
    { 
        id: 49, 
        title: "Ngajak tetangga ngobrol santai", 
        description: "Menjaga hubungan apik karo tangga supaya ora sungkanan dan tetep rukun.", 
        how: "Sapa karo senyum, terus ngobrol cendhak soal kabar, kegiatan, atau cerita kecil santai.", 
        benefit: "Hubungan karo tetangga dadi luwih akrab lan ora sungkanan. awakmu iso ngrasakno rasa nyaman tinggal nang lingkungan sing rukun. Yen akrab, urusan tetangga iso luwih gampang dibantu se waktu-waktu.", 
    },
    { 
        id: 50, 
        title: "Ngatur meja dan kerja", 
        description: "Supaya kerja lebih nyaman, meja kudu rapi cek ora amburadul bek pikiran ora sumpek.", 
        how: "Rapikan buku, laptop, alat tulis, dan barang-barang sing ora penting. kalo perlu, tambahi dekor cilik cek luwih asik.", 
        benefit: "Meja kerja sing rapi iso ningkatno fokus lan semangat kerjamu. Pikiran ora mumet karna lingkungan tertata lan bersih. Nek terus dijaga, suasana kerja dadi lebih nyaman dan produktif.", 
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
        if (usedIndicesBase0.length >= totalElements) {
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
            randomGaeApik();
            this.classList.add("expanded");
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
        if (!JSON.parse(localStorage.getItem('historySkip')).includes(hasilRandomId)) {
            let historySkip = JSON.parse(localStorage.getItem('historySkip'))
            historySkip.push(hasilRandomId)
            localStorage.setItem('historySkip', JSON.stringify(historySkip))
        }
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
