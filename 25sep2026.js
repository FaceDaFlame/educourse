let tasks = [
    { id: 1, judul: "Mengerjakan PR Bahasa Jawa", status: "TODO" },
    { id: 2, judul: "Mengerjakan PR Bahasa Inggris", status: "DONE" },
    { id: 3, judul: "Mengerjakan PR Bahasa Jepang", status: "DONE" }
]

// 2. MENANGKAP ELEMEN HTML (DOM SELECTION)
const inputTask = document.querySelector("#inputTask");
const btnTambah = document.querySelector("#btnTambah");
const colTodo = document.querySelector("#colTodo");
const colDone = document.querySelector("#colDone");

// SECTION 2 : RENDER TAMPILAN KE LAYAR
function renderTask() {
    //langkah A : Bersihkan dulu isi kolom di layar hingga tidak menumpuk
    colTodo.innerHTML = "";
    colDone.innerHTML = "";

    //langkah B : Saring data tugas menggunakan data filter() by status
    const listTodo = tasks.filter((t) => t.status === "TODO");
    const listDone = tasks.filter((t) => t.status === "DONE");

    //langkah C : gambar kartu tugas ke kolom "Belum Berhasil"
    listTodo.forEach((item) => {
        const{id, judul} = item;

        const card = document.createElement("div");
        card.innerHTML =`
            <span>${judul}</span>
            <button class="btn btn-done" onclick="pindahStatus(${id})">Selesai</button>
            `;
        colTodo.appendChild(card);
    });

    //langkah D : gambar kartu tugas ke kolom "Berhasil"
    listDone.forEach((item) => {
        const{judul} = item;

        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `<span>${judul}</span>`;
        colDone.appendChild(card);
    });
}