const materiData = {
    "K3LH": "Fokus pada penggunaan APD, prosedur pemadaman api (APAR), dan kebersihan bengkel (5R).",
    "Alat Ukur": "Belajar ketelitian menggunakan Jangka Sorong (0.02mm) dan Mikrometer luar.",
    "Engine": "Perawatan rutin mekanisme katup, penggantian oli, dan pembersihan sistem pendingin.",
    "Sasis": "Pemeriksaan sistem rem cakram, penyetelan suspensi, dan pemeriksaan ban.",
    "EFI / EMS": "Diagnosa sensor menggunakan Scan Tool, membaca data stream, dan meriset kode DTC."
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