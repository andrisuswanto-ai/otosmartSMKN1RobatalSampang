const materiData = {
    "K3LH": "🏢 MATERI K3LH & BUDAYA KERJA INDUSTRI\n\n" +
            "• Keselamatan Kerja: Prosedur pencegahan kecelakaan kerja dan pengenalan rambu-rambu bahaya di bengkel.\n" +
            "• APD: Penggunaan Wearpack, Safety Shoes, Sarung Tangan, dan Masker sesuai jenis pekerjaan.\n" +
            "• Simulasi Kebakaran: Prosedur T.A.T.A (Tarik pin, Arahkan, Tekan, Ayunkan) saat menggunakan APAR.\n" +
            "• Budaya Kerja 5R: Penerapan Ringkas, Rapi, Resik, Rawat, dan Rajin sebagai standar industri.",

    "Alat Ukur": "📏 ALAT UKUR MEKANIK & PRESISI\n\n" +
            "• Jangka Sorong (Vernier Caliper): Mengukur diameter dalam, luar, dan kedalaman dengan ketelitian 0,02mm atau 0,05mm.\n" +
            "• Mikrometer Luar: Mengukur diameter komponen presisi seperti poros engkol atau piston dengan ketelitian 0,01mm.\n" +
            "• Dial Indicator: Mengecek keolengan (run-out) poros atau kerataan permukaan blok silinder.\n" +
            "• Multimeter: Mengukur tegangan (Volt), hambatan (Ohm), dan arus (Ampere) pada sistem kelistrikan.",

    "Engine": "⚙️ PEMELIHARAAN MESIN KENDARAAN (ENGINE)\n\n" +
            "• Mekanisme Katup: Pemeriksaan dan penyetelan celah katup (In & Ex) agar kinerja mesin optimal.\n" +
            "• Sistem Pelumasan: Penggantian oli mesin dan filter oli secara periodik untuk mencegah keausan komponen.\n" +
            "• Sistem Pendingin: Pemeriksaan kebocoran radiator, kondisi air pendingin, dan fungsi thermostat.\n" +
            "• Tune Up: Serangkaian penyetelan komponen mesin untuk mengembalikan performa standar mesin.",

    "Sasis": "🚗 PEMELIHARAAN SASIS & PEMINDAH TENAGA\n\n" +
            "• Sistem Rem: Pemeriksaan kampas rem (pad/shoe), pembuangan udara palsu (bleeding), dan kondisi minyak rem.\n" +
            "• Sistem Suspensi: Pemeriksaan kebocoran shock absorber dan kondisi bushing-bushing karet.\n" +
            "• Ban & Roda: Pengecekan tekanan angin, kedalaman alur ban, dan melakukan Spooring & Balancing.\n" +
            "• Kopling & Transmisi: Penyetelan gerak bebas pedal kopling dan penggantian oli transmisi.",

    "EFI / EMS": "💻 SISTEM INJEKSI & DIAGNOSA (EFI/EMS)\n\n" +
            "• Prinsip Kerja: Pengaturan campuran bahan bakar dan udara secara elektronik berdasarkan sensor-sensor.\n" +
            "• Sensor Utama: IAT (Suhu Udara), ECT (Suhu Air), MAP (Tekanan Udara), TPS (Posisi Katup Gas).\n" +
            "• Aktuator: Injector, Coil Pengapian, dan ISC (Idle Speed Control).\n" +
            "• Self-Diagnosis: Menggunakan Scan Tool untuk membaca DTC (Data Trouble Code) dan melihat Data Stream secara real-time.",

    "Daftar DTC": "🔍 DAFTAR KODE KERUSAKAN (DTC) UMUM\n\n" +
            "• P0105: Gangguan pada Manifold Absolute Pressure (MAP).\n" +
            "• P0115: Gangguan pada Engine Coolant Temperature (ECT).\n" +
            "• P0120: Gangguan pada Throttle Position Sensor (TPS).\n" +
            "• P0335: Gangguan pada Crankshaft Position Sensor (CKP).\n" +
            "• Tips: Jika muncul kode tersebut, periksa soket sensor terlebih dahulu sebelum mengganti komponen."
};

const dtcData = {
    "P0110": "Intake Air Temperature Sensor Malfunction",
    "P0115": "Engine Coolant Temperature Circuit Malfunction",
    "P0120": "Throttle Position Sensor Malfunction",
    "P0335": "Crankshaft Position Sensor Malfunction"
};

const simData = [
    {
        kasus: "Mesin sulit hidup saat dingin. Sensor apa yang kemungkinan bermasalah?",
        opsi: ["Sensor ECT", "Sensor Oksigen", "Lampu Rem"],
        jawaban: 0,
        penjelasan: "Sensor ECT mengatur campuran bensin saat mesin dingin."
    }
];
const kuisData = [
    {
        pertanyaan: "Apa kepanjangan dari APAR dalam materi K3LH?",
        opsi: ["Alat Pemadam Api Ringan", "Alat Penjaga Arus Rumah", "Alat Pembersih Area Radiator"],
        jawaban: 0,
        penjelasan: "APAR adalah Alat Pemadam Api Ringan yang wajib ada di bengkel SMKN 1 Robatal."
    },
    {
        pertanyaan: "Alat ukur yang tepat untuk mengukur diameter luar piston dengan ketelitian 0,01mm adalah...",
        opsi: ["Jangka Sorong", "Mikrometer Luar", "Dial Indicator"],
        jawaban: 1,
        penjelasan: "Mikrometer luar digunakan untuk pengukuran yang sangat presisi hingga 0,01mm."
    },
    {
        pertanyaan: "Jika mesin sulit hidup saat dingin, sensor EFI mana yang kemungkinan bermasalah?",
        opsi: ["Sensor TPS", "Sensor Oksigen", "Sensor ECT"],
        jawaban: 2,
        penjelasan: "ECT (Engine Coolant Temperature) mengatur pengayaan bensin saat suhu mesin dingin."
    },
    {
        pertanyaan: "Berapa jarak celah katup (klep) standar untuk mesin bensin tipe umum saat panas?",
        opsi: ["0.20 mm", "2.0 mm", "0.02 mm"],
        jawaban: 0,
        penjelasan: "Celah katup rata-rata berkisar 0.20 mm untuk menjaga performa mesin."
    },
    {
        pertanyaan: "Kode DTC P0120 pada Scan Tool menunjukkan adanya masalah pada...",
        opsi: ["Tekanan Udara (MAP)", "Posisi Katup Gas (TPS)", "Suhu Udara (IAT)"],
        jawaban: 1,
        penjelasan: "P0120 adalah kode standar untuk gangguan pada Throttle Position Sensor (TPS)."
    }
];

let skorKuis = 0;
let kuisIndex = 0;

// Fungsi untuk memulai Kuis
document.getElementById("startSim").onclick = () => {
    skorKuis = 0;
    kuisIndex = 0;
    tampilkanSoal();
    document.getElementById("simModal").style.display = "block";
};

function tampilkanSoal() {
    const data = kuisData[kuisIndex];
    document.getElementById("scenarioText").innerHTML = `<b>Soal ${kuisIndex + 1}:</b><br>${data.pertanyaan}`;
    const container = document.getElementById("optionsContainer");
    container.innerHTML = "";
    document.getElementById("simFeedback").innerText = "";

    data.opsi.forEach((teks, idx) => {
        const btn = document.createElement("button");
        btn.innerText = teks;
        btn.className = "btn-opt";
        btn.onclick = () => cekJawabanKuis(idx);
        container.appendChild(btn);
    });
}

function cekJawabanKuis(idx) {
    const data = kuisData[kuisIndex];
    const feedback = document.getElementById("simFeedback");
    
    if (idx === data.jawaban) {
        skorKuis += 20;
        feedback.innerHTML = "<span style='color:green;'>✅ BENAR!</span><br><small>" + data.penjelasan + "</small>";
    } else {
        feedback.innerHTML = "<span style='color:red;'>❌ SALAH.</span><br><small>" + data.penjelasan + "</small>";
    }

    // Tunggu 3 detik lalu lanjut ke soal berikutnya
    setTimeout(() => {
        kuisIndex++;
        if (kuisIndex < kuisData.length) {
            tampilkanSoal();
        } else {
            document.getElementById("scenarioText").innerHTML = `🎉 <b>KUIS SELESAI!</b><br>Skor Akhir Anda: ${skorKuis}`;
            document.getElementById("optionsContainer").innerHTML = "";
            document.getElementById("simFeedback").innerText = "Siswa hebat SMKN 1 Robatal pantang menyerah!";
        }
    }, 3000);
}
let materialsOpened = new Set();
const modal = document.getElementById("materialModal");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");

// Logika Buka Materi
document.querySelectorAll('.menu-card').forEach(card => {
    card.addEventListener('click', () => {
        const judul = card.querySelector('h3').innerText;
        if (materiData[judul]) {
            materialsOpened.add(judul);
            modalTitle.innerText = judul;
            modalBody.style.whiteSpace = "pre-line"; // Membuat Enter terbaca di tampilan
modalBody.innerText = materiData[judul];
            modal.style.display = "block";
        }
        if (materialsOpened.size === 5) document.getElementById("completionZone").style.display = "block";
    });
});

// Kamus DTC
document.getElementById("dtcBtn").onclick = () => {
    modalTitle.innerText = "Daftar DTC";
    let table = "<table border='1' style='width:100%; border-collapse:collapse;'>";
    for(let code in dtcData) table += `<tr><td><b>${code}</b></td><td>${dtcData[code]}</td></tr>`;
    modalBody.innerHTML = table + "</table>";
    modal.style.display = "block";
};

// Simulasi
document.getElementById("startSim").onclick = () => {
    document.getElementById("scenarioText").innerText = simData[0].kasus;
    const container = document.getElementById("optionsContainer");
    container.innerHTML = "";
    simData[0].opsi.forEach((opt, i) => {
        const btn = document.createElement("button");
        btn.innerText = opt; btn.className = "btn-opt";
        btn.onclick = () => {
            const feed = document.getElementById("simFeedback");
            if(i === simData[0].jawaban) feed.innerText = "✅ Benar! " + simData[0].penjelasan;
            else feed.innerText = "❌ Salah, coba lagi.";
        };
        container.appendChild(btn);
    });
    document.getElementById("simModal").style.display = "block";
};

// Sertifikat
document.getElementById("claimBtn").onclick = () => {
    const nama = prompt("Masukkan Nama Lengkap:");
    if(nama) {
        document.getElementById("studentNameDisplay").innerText = nama.toUpperCase();
        document.getElementById("certModal").style.display = "block";
    }
};

document.querySelector(".close-btn").onclick = () => modal.style.display = "none";
function closeSim() { document.getElementById("simModal").style.display = "none"; }

function closeCert() { document.getElementById("certModal").style.display = "none"; }
