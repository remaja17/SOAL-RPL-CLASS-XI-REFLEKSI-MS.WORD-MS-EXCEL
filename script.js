
/* =========================================
   REFLEKSI MICROSOFT OFFICE
   KELAS XI RPL
   Guru: Hoelwiel Febtha B.L, S.Kom
========================================= */

const TOTAL_QUESTIONS = 30;
const EXAM_DURATION = 60 * 60;

/* =========================================
   KONFIGURASI GOOGLE SHEETS
   Ganti URL di bawah dengan URL Web App
   hasil Deploy Google Apps Script.
========================================= */
const GOOGLE_SHEETS_WEB_APP_URL = "https://script.google.com/macros/s/AKfycbxFmkXsYZFimip1jSLV1o8XAXgxfC2H_jbPpXSmE0q8sa_V46K7kbREGg73ATX2aYR4/exec";
const EXAM_ID = "REFLEKSI-MS-OFFICE-XI-RPL";


let currentQuestion = 0;
let answers = Array(TOTAL_QUESTIONS).fill(null);
let remainingTime = EXAM_DURATION;
let timerInterval = null;
let finished = false;
let student = {};

// ELEMENT HTML
const $ = (id) => document.getElementById(id);

// HURUF PILIHAN
const letters = ["A", "B", "C", "D"];



/* =========================================
   0. KIRIM HASIL KE GOOGLE SHEETS
========================================= */

function createSubmissionId() {
    return "XI-RPL-" + Date.now() + "-" +
        Math.random().toString(36).slice(2, 8).toUpperCase();
}

async function saveResultToGoogleSheets(resultData) {
    if (!GOOGLE_SHEETS_WEB_APP_URL ||
        GOOGLE_SHEETS_WEB_APP_URL.includes("TEMPEL_URL")) {
        console.warn("URL Google Apps Script belum diatur.");
        return { sent: false, reason: "URL belum diatur" };
    }

    try {
        /*
          Gunakan text/plain agar browser tidak mengirim preflight OPTIONS.
          mode no-cors berarti browser tidak dapat membaca balasan server.
          Periksa tab RESULTS dan ANSWERS di Google Sheets untuk memastikan
          data benar-benar masuk.
        */
        await fetch(GOOGLE_SHEETS_WEB_APP_URL, {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "text/plain;charset=utf-8"
            },
            body: JSON.stringify(resultData)
        });

        return { sent: true };
    } catch (error) {
        console.error("Gagal mengirim hasil ke Google Sheets:", error);
        return { sent: false, reason: error.message };
    }
}

/* =========================================
   1. VALIDASI IDENTITAS DAN MULAI UJIAN
========================================= */

$("identityForm").addEventListener("submit", function(event) {

    event.preventDefault();

    student.name = $("studentName").value.trim();
    student.class = $("studentClass").value.trim();
    student.number = $("studentNumber").value.trim();

    if (!student.name || !student.class || !student.number) {
        alert("Lengkapi seluruh identitas peserta!");
        return;
    }

    if (!Number.isInteger(Number(student.number)) ||
        Number(student.number) < 1) {
        alert("Nomor absen harus berupa angka positif!");
        return;
    }

    if (QUESTIONS.length !== TOTAL_QUESTIONS) {
        alert("Bank soal harus berisi tepat 30 soal!");
        return;
    }

    if (!QUESTIONS.every(q =>
        q.options?.length === 4 &&
        letters.includes(q.answer) &&
        ["WORD", "EXCEL"].includes(q.section)
    )) {
        alert("Format bank soal tidak valid!");
        return;
    }

    $("studentInfo").textContent =
        `${student.name} | ${student.class} | Absen ${student.number}`;

    $("welcome").classList.add("hidden");
    $("exam").classList.remove("hidden");

    renderQuestion();
    renderNavigation();
    updateProgress();

    startTimer();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================================
   2. MENAMPILKAN PERTANYAAN
========================================= */

function renderQuestion() {

    const q = QUESTIONS[currentQuestion];

    $("sectionTitle").textContent =
        q.section === "WORD"
            ? "MICROSOFT WORD"
            : "MICROSOFT EXCEL";

    $("sectionPill").textContent =
        q.section === "WORD"
            ? "MICROSOFT WORD"
            : "MICROSOFT EXCEL";

    $("questionNumber").textContent =
        String(currentQuestion + 1).padStart(2, "0");

    $("questionText").textContent = q.question;

    $("options").innerHTML = "";

    q.options.forEach((option, index) => {

        const letter = letters[index];

        const button = document.createElement("button");

        button.type = "button";

        button.className = "option";

        if (answers[currentQuestion] === letter) {
            button.classList.add("selected");
        }

        const key = document.createElement("span");

        key.className = "option-key";
        key.textContent = letter;

        const text = document.createElement("span");

        text.textContent = option;

        button.append(key, text);

        button.setAttribute(
            "aria-pressed",
            answers[currentQuestion] === letter
                ? "true"
                : "false"
        );

        button.addEventListener("click", function() {

            if (finished) return;

            answers[currentQuestion] = letter;

            renderQuestion();
            renderNavigation();
            updateProgress();

        });

        $("options").appendChild(button);

    });

    $("prevBtn").disabled = currentQuestion === 0;

    $("nextBtn").textContent =
        currentQuestion === TOTAL_QUESTIONS - 1
            ? "KEMBALI KE SOAL 1 ↺"
            : "SELANJUTNYA →";

}


/* =========================================
   3. NAVIGASI NOMOR SOAL
========================================= */

function renderNavigation() {

    const grid = $("numberGrid");

    grid.innerHTML = "";

    QUESTIONS.forEach((question, index) => {

        const button = document.createElement("button");

        button.type = "button";

        button.className = "number-btn";

        button.textContent = index + 1;

        if (answers[index] !== null) {
            button.classList.add("done");
        }

        if (currentQuestion === index) {
            button.classList.add("current");
        }

        button.addEventListener("click", function() {

            if (finished) return;

            currentQuestion = index;

            renderQuestion();
            renderNavigation();

        });

        grid.appendChild(button);

    });

}


/* =========================================
   4. TOMBOL SEBELUMNYA
========================================= */

$("prevBtn").addEventListener("click", function() {

    if (currentQuestion > 0) {

        currentQuestion--;

        renderQuestion();
        renderNavigation();

    }

});


/* =========================================
   5. TOMBOL SELANJUTNYA
========================================= */

$("nextBtn").addEventListener("click", function() {

    if (currentQuestion < TOTAL_QUESTIONS - 1) {

        currentQuestion++;

    } else {

        currentQuestion = 0;

    }

    renderQuestion();
    renderNavigation();

});


/* =========================================
   6. PROGRESS PENGERJAAN
========================================= */

function updateProgress() {

    const answered = answers.filter(
        answer => answer !== null
    ).length;

    const percentage =
        answered / TOTAL_QUESTIONS * 100;

    $("progressText").textContent =
        `SOAL ${currentQuestion + 1} DARI ${TOTAL_QUESTIONS}`;

    $("answeredText").textContent =
        `${answered}/${TOTAL_QUESTIONS} TERJAWAB`;

    $("progressBar").style.width =
        percentage + "%";

}


/* =========================================
   7. TIMER COUNTDOWN
========================================= */

function startTimer() {

    updateTimer();

    timerInterval = setInterval(function() {

        if (finished) return;

        remainingTime--;

        updateTimer();

        if (remainingTime === 600) {

            alert("PERHATIAN! Waktu ujian tersisa 10 menit!");

        }

        if (remainingTime === 300) {

            alert("PERHATIAN! Waktu ujian tersisa 5 menit!");

        }

        if (remainingTime <= 0) {

            finishExam(true);

        }

    }, 1000);

}


function updateTimer() {

    const minutes = Math.floor(remainingTime / 60);

    const seconds = remainingTime % 60;

    $("timer").textContent =
        String(minutes).padStart(2, "0") +
        ":" +
        String(seconds).padStart(2, "0");

    $("timer").style.color =
        remainingTime <= 300 ? "#ff5968" : "#ffffff";

}


/* =========================================
   8. MENGAKHIRI UJIAN
========================================= */

$("finishBtn").addEventListener("click", function() {

    finishExam(false);

});


function finishExam(timeUp = false) {

    if (finished) return;

    const blank = answers.filter(
        answer => answer === null
    ).length;

    if (!timeUp) {

        const confirmation = confirm(
            `Masih ada ${blank} soal yang belum dijawab.\n\n` +
            "Apakah Anda yakin ingin menyelesaikan ujian?"
        );

        if (!confirmation) return;

    }

    finished = true;

    clearInterval(timerInterval);

    calculateResult(timeUp);

}


/* =========================================
   9. MENGHITUNG NILAI
========================================= */

function calculateResult(timeUp) {

    let correct = 0;

    QUESTIONS.forEach((question, index) => {

        if (answers[index] === question.answer) {

            correct++;

        }

    });

    const blank = answers.filter(
        answer => answer === null
    ).length;

    const wrong = TOTAL_QUESTIONS - correct - blank;

    const score = Math.round(
        correct / TOTAL_QUESTIONS * 100
    );

    let category = "";

    if (score >= 90) {

        category = "EXCELLENT";

    } else if (score >= 80) {

        category = "VERY GOOD";

    } else if (score >= 70) {

        category = "GOOD";

    } else if (score >= 60) {

        category = "NEED IMPROVEMENT";

    } else {

        category = "KEEP LEARNING";

    }

    // SIAPKAN DAN KIRIM DATA HASIL KE GOOGLE SHEETS
    const wordCorrect = QUESTIONS.reduce((total, question, index) => {
        return total + (
            question.section === "WORD" &&
            answers[index] === question.answer ? 1 : 0
        );
    }, 0);

    const excelCorrect = QUESTIONS.reduce((total, question, index) => {
        return total + (
            question.section === "EXCEL" &&
            answers[index] === question.answer ? 1 : 0
        );
    }, 0);

    const submission = {
        action: "saveResult",
        submissionId: createSubmissionId(),
        examId: EXAM_ID,
        student: {
            name: student.name,
            className: student.class,
            number: student.number
        },
        result: {
            wordCorrect: wordCorrect,
            excelCorrect: excelCorrect,
            correct: correct,
            wrong: wrong,
            blank: blank,
            score: score,
            category: category,
            durationSeconds: EXAM_DURATION - remainingTime,
            status: timeUp ? "WAKTU HABIS" : "SELESAI"
        },
        answers: QUESTIONS.map((question, index) => ({
            questionNumber: index + 1,
            section: question.section,
            question: question.question,
            studentAnswer: answers[index] || "",
            correctAnswer: question.answer,
            isCorrect: answers[index] === question.answer
        }))
    };

    // Pengiriman berjalan di latar belakang; hasil lokal tetap ditampilkan.
    saveResultToGoogleSheets(submission).then((response) => {
        if (response.sent) {
            console.log("Permintaan penyimpanan hasil telah dikirim.");
        } else {
            console.error("Hasil belum terkirim:", response.reason);
        }
    });

    // TAMPILKAN HASIL

    $("score").textContent = score;

    $("category").textContent = category;

    $("correctCount").textContent = correct;

    $("wrongCount").textContent = wrong;

    $("blankCount").textContent = blank;

    $("resultGreeting").textContent =
        `${student.name} | ${student.class} | Nomor Absen ${student.number}` +
        (timeUp ? " | WAKTU HABIS" : "");

    // PINDAH HALAMAN

    $("exam").classList.add("hidden");

    $("result").classList.remove("hidden");

    // SIAPKAN PEMBAHASAN

    buildReview();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================
   10. PEMBAHASAN JAWABAN
========================================= */

function buildReview() {

    const list = $("reviewList");

    list.innerHTML = "";

    QUESTIONS.forEach((question, index) => {

        const item = document.createElement("div");

        item.className = "review-item";

        const heading = document.createElement("h3");

        heading.textContent =
            `${index + 1}. ${question.question}`;

        const userAnswer = answers[index];

        const answer = document.createElement("p");

        const isCorrect =
            userAnswer === question.answer;

        answer.className = isCorrect
            ? "correct-answer"
            : "wrong-answer";

        answer.textContent =
            `Jawaban Anda: ${
                userAnswer
                    ? userAnswer + ". " +
                      question.options[letters.indexOf(userAnswer)]
                    : "Tidak dijawab"
            }`;

        const key = document.createElement("p");

        key.className = "correct-answer";

        key.textContent =
            `Kunci Jawaban: ${question.answer}. ` +
            question.options[letters.indexOf(question.answer)];

        const explanation = document.createElement("p");

        explanation.textContent =
            "Pembahasan: " + question.explanation;

        item.append(
            heading,
            answer,
            key,
            explanation
        );

        list.appendChild(item);

    });

}


/* =========================================
   11. TOMBOL LIHAT PEMBAHASAN
========================================= */

$("reviewBtn").addEventListener("click", function() {

    $("review").classList.toggle("hidden");

    if ($("review").classList.contains("hidden")) {

        $("reviewBtn").textContent =
            "LIHAT PEMBAHASAN";

    } else {

        $("reviewBtn").textContent =
            "TUTUP PEMBAHASAN";

        $("review").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

});


/* =========================================
   12. CETAK HASIL / SIMPAN PDF
========================================= */

$("printBtn").addEventListener("click", function() {

    window.print();

});


/* =========================================
   13. KEMBALI KE BERANDA
========================================= */

$("homeBtn").addEventListener("click", function() {

    const confirmation = confirm(
        "Apakah Anda ingin kembali ke halaman awal?"
    );

    if (!confirmation) return;

    clearInterval(timerInterval);

    window.location.reload();

});


/* =========================================
   14. SELESAI
========================================= */

console.log(
    "REFLEKSI HOTS KELAS XI RPL BERHASIL DIMUAT"
);
