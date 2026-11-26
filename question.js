
const QUESTIONS = [

    // =====================================
    // MICROSOFT WORD - 15 SOAL
    // =====================================

    {
        section: "WORD",
        question: "Seorang siswa membuat laporan 40 halaman. Semua judul bab diketik manual sehingga ketika judul berubah, daftar isi harus diperbaiki satu per satu. Solusi paling efektif adalah ...",
        options: [
            "Menggunakan huruf kapital pada seluruh judul",
            "Menggunakan Styles Heading dan Table of Contents otomatis",
            "Membuat daftar isi menggunakan Text Box",
            "Menggunakan Page Border pada setiap halaman"
        ],
        answer: "B",
        explanation: "Styles Heading memberikan struktur dokumen sehingga daftar isi dapat dibuat dan diperbarui secara otomatis."
    },

    {
        section: "WORD",
        question: "Sebuah perusahaan harus membuat 300 surat undangan dengan isi sama tetapi nama dan alamat penerima berbeda. Fitur yang paling efisien adalah ...",
        options: [
            "Copy dan Paste sebanyak 300 kali",
            "Find and Replace untuk semua nama",
            "Mail Merge dengan sumber data penerima",
            "Membuat 300 dokumen secara manual"
        ],
        answer: "C",
        explanation: "Mail Merge menggabungkan dokumen utama dengan data penerima sehingga surat personal dapat dibuat secara massal."
    },

    {
        section: "WORD",
        question: "Laporan penelitian memiliki sampul tanpa nomor halaman. Bagian isi dimulai dengan nomor 1 pada halaman ketiga. Pengaturan yang tepat adalah ...",
        options: [
            "Menambahkan nomor halaman secara manual",
            "Menggunakan Section Break dan pengaturan nomor halaman berbeda",
            "Menghapus footer seluruh dokumen",
            "Mengubah semua halaman menjadi gambar"
        ],
        answer: "B",
        explanation: "Section Break memungkinkan pengaturan nomor halaman dan footer yang berbeda antarbagian dokumen."
    },

    {
        section: "WORD",
        question: "Ketika gambar dimasukkan ke laporan, teks berpindah dan meninggalkan ruang kosong yang besar. Fitur yang harus diperiksa adalah ...",
        options: [
            "Word Count",
            "Wrap Text dan posisi gambar",
            "Spelling and Grammar",
            "Page Color"
        ],
        answer: "B",
        explanation: "Wrap Text mengatur bagaimana teks mengalir di sekitar gambar."
    },

    {
        section: "WORD",
        question: "Dalam kerja kelompok, dua siswa mengedit dokumen yang sama. Guru ingin mengetahui perubahan yang dilakukan masing-masing siswa. Fitur terbaik adalah ...",
        options: [
            "WordArt",
            "Track Changes",
            "SmartArt",
            "Format Painter"
        ],
        answer: "B",
        explanation: "Track Changes mencatat perubahan dokumen sehingga dapat diperiksa dan diterima atau ditolak."
    },

    {
        section: "WORD",
        question: "Sebuah laporan akan dicetak menjadi buku. Tulisan di bagian dalam halaman terlalu dekat dengan area jilid. Solusi terbaik adalah ...",
        options: [
            "Memperbesar ukuran font",
            "Mengatur margin dalam atau gutter",
            "Mengubah warna halaman",
            "Menghapus seluruh header"
        ],
        answer: "B",
        explanation: "Gutter memberikan ruang tambahan untuk penjilidan agar teks tidak tertutup."
    },

    {
        section: "WORD",
        question: "Dalam laporan terdapat banyak gambar yang harus diberi nomor otomatis dan dimasukkan ke daftar gambar. Fitur yang tepat adalah ...",
        options: [
            "Text Box",
            "Insert Caption dan Table of Figures",
            "WordArt",
            "Page Color"
        ],
        answer: "B",
        explanation: "Caption memberi label otomatis pada gambar dan Table of Figures dapat mengumpulkan seluruh caption."
    },

    {
        section: "WORD",
        question: "Dokumen dari beberapa sumber memiliki format judul yang berbeda-beda. Cara paling efektif untuk menyeragamkan seluruh judul adalah ...",
        options: [
            "Mengatur judul satu per satu secara manual",
            "Menghapus format langsung dan menerapkan Styles yang sama",
            "Mengubah semua teks menjadi gambar",
            "Memberikan garis bawah pada semua judul"
        ],
        answer: "B",
        explanation: "Styles menjaga konsistensi format dan memudahkan pengelolaan dokumen panjang."
    },

    {
        section: "WORD",
        question: "Anda harus mengganti istilah yang salah pada dokumen, tetapi istilah tersebut juga menjadi bagian dari kata lain. Cara menghindari kesalahan penggantian adalah ...",
        options: [
            "Menggunakan Replace All tanpa pemeriksaan",
            "Mengaktifkan Whole Words Only dan memeriksa hasil",
            "Menghapus semua paragraf terkait",
            "Mengganti istilah melalui menu font"
        ],
        answer: "B",
        explanation: "Whole Words Only membatasi penggantian pada kata utuh sehingga bagian kata lain tidak ikut berubah."
    },

    {
        section: "WORD",
        question: "Tabel inventaris terbagi menjadi tiga halaman. Pada halaman kedua dan ketiga, judul kolom tidak terlihat. Solusi paling tepat adalah ...",
        options: [
            "Mengubah tabel menjadi gambar",
            "Mengaktifkan Repeat Header Rows",
            "Menghapus border tabel",
            "Memperbesar ukuran seluruh kolom"
        ],
        answer: "B",
        explanation: "Repeat Header Rows menampilkan ulang baris judul tabel pada setiap halaman lanjutan."
    },

    {
        section: "WORD",
        question: "Dokumen memiliki banyak spasi ganda dan paragraf kosong akibat proses penyalinan. Langkah paling efektif adalah ...",
        options: [
            "Mengubah seluruh margin",
            "Menggunakan Show/Hide dan Find and Replace",
            "Mengubah orientasi halaman",
            "Menghapus semua gambar"
        ],
        answer: "B",
        explanation: "Show/Hide membantu menemukan karakter format yang tidak terlihat dan Find and Replace dapat membersihkannya."
    },

    {
        section: "WORD",
        question: "Sebuah laporan memiliki banyak rujukan ke nomor gambar dan tabel. Ketika urutan gambar berubah, rujukan harus tetap akurat. Fitur terbaik adalah ...",
        options: [
            "Mengetik nomor secara manual",
            "Menggunakan Caption dan Cross-reference",
            "Membuat semua gambar menjadi screenshot",
            "Menggunakan Header"
        ],
        answer: "B",
        explanation: "Cross-reference terhubung ke elemen dokumen sehingga nomor rujukan dapat diperbarui."
    },

    {
        section: "WORD",
        question: "Sebuah dokumen harus menggunakan orientasi portrait, tetapi satu halaman tabel lebar harus landscape. Solusi yang benar adalah ...",
        options: [
            "Mengubah seluruh dokumen menjadi landscape",
            "Menggunakan Section Break sebelum dan sesudah halaman tabel",
            "Mengubah ukuran font menjadi kecil",
            "Menghapus tabel tersebut"
        ],
        answer: "B",
        explanation: "Section Break memungkinkan orientasi halaman berbeda pada bagian tertentu saja."
    },

    {
        section: "WORD",
        question: "Dokumen berubah tampilan ketika dibuka di komputer lain karena jenis font tidak tersedia. Cara terbaik menjaga konsistensi adalah ...",
        options: [
            "Mengirim screenshot seluruh dokumen",
            "Menggunakan font yang kompatibel atau menanamkan font bila didukung, lalu mengekspor PDF",
            "Menghapus seluruh format",
            "Mengubah semua teks menjadi gambar"
        ],
        answer: "B",
        explanation: "Font kompatibel dan PDF membantu mempertahankan tampilan dokumen di perangkat berbeda."
    },

    {
        section: "WORD",
        question: "Guru meminta laporan final tanpa komentar dan revisi yang belum disetujui. Langkah paling tepat adalah ...",
        options: [
            "Langsung mencetak dokumen",
            "Meninjau Track Changes dan Comments, menerima atau menolak revisi yang sesuai",
            "Menghapus semua halaman kedua",
            "Mengubah dokumen menjadi file teks"
        ],
        answer: "B",
        explanation: "Peninjauan revisi memastikan dokumen final telah bersih dan perubahan yang dipilih sudah disetujui."
    },

    {
        section: "WORD",
        question: "Seorang siswa ingin membuat daftar isi otomatis yang tetap mengikuti perubahan halaman ketika isi laporan bertambah. Kombinasi fitur yang paling tepat adalah ...",
        options: [
            "Bold dan Italic",
            "Heading Styles dan Update Table",
            "WordArt dan Page Color",
            "Find dan Replace"
        ],
        answer: "B",
        explanation: "Heading Styles membangun struktur dokumen, sedangkan Update Table memperbarui daftar isi setelah perubahan."
    },

    // =====================================
    // MICROSOFT EXCEL - 15 SOAL
    // =====================================

    {
        section: "EXCEL",
        question: "Data nilai siswa berada pada sel C2 sampai C31. Anda diminta menghitung nilai rata-rata kelas. Rumus yang tepat adalah ...",
        options: [
            "=SUM(C2:C31)",
            "=AVERAGE(C2:C31)",
            "=COUNT(C2:C31)",
            "=MAX(C2:C31)"
        ],
        answer: "B",
        explanation: "AVERAGE menghitung rata-rata seluruh nilai numerik pada rentang yang dipilih."
    },

    {
        section: "EXCEL",
        question: "Nilai siswa terdapat pada D2. Siswa dinyatakan LULUS jika memperoleh nilai minimal 75. Rumus yang benar adalah ...",
        options: [
            '=IF(D2>75,"LULUS","REMEDIAL")',
            '=IF(D2>=75,"LULUS","REMEDIAL")',
            '=COUNTIF(D2,75)',
            '=SUM(D2>=75)'
        ],
        answer: "B",
        explanation: "Operator >= berarti lebih besar atau sama dengan 75, sehingga nilai tepat 75 juga dinyatakan lulus."
    },

    {
        section: "EXCEL",
        question: "Rumus pajak adalah =B2*$F$1. Ketika rumus disalin ke baris berikutnya, nilai F1 harus tetap. Mengapa digunakan tanda dolar?",
        options: [
            "Agar B2 tidak berubah",
            "Agar F1 menjadi referensi absolut",
            "Agar hasil otomatis dibulatkan",
            "Agar rumus tidak bisa dihitung"
        ],
        answer: "B",
        explanation: "Tanda dolar mengunci kolom dan baris F1 sehingga tidak berubah ketika rumus disalin."
    },

    {
        section: "EXCEL",
        question: "Kolom B berisi nilai siswa. Anda ingin menghitung jumlah siswa dengan nilai minimal 80. Fungsi yang tepat adalah ...",
        options: [
            "=COUNT(B2:B31)",
            '=COUNTIF(B2:B31,">=80")',
            '=SUMIF(B2:B31,">=80")',
            "=AVERAGE(B2:B31)"
        ],
        answer: "B",
        explanation: "COUNTIF menghitung jumlah sel yang memenuhi kriteria tertentu."
    },

    {
        section: "EXCEL",
        question: "Kolom A berisi wilayah penjualan dan kolom B berisi omzet. Anda hanya ingin menjumlahkan omzet wilayah Timur. Rumus yang tepat adalah ...",
        options: [
            "=SUM(B2:B100)",
            '=SUMIF(A2:A100,"Timur",B2:B100)',
            '=COUNTIF(A2:A100,"Timur")',
            "=AVERAGE(B2:B100)"
        ],
        answer: "B",
        explanation: "SUMIF menjumlahkan data berdasarkan satu kriteria yang ditentukan."
    },

    {
        section: "EXCEL",
        question: "Anda mencari harga barang berdasarkan kode barang pada E2. Tabel kode berada di A2:A50 dan harga di B2:B50. Fungsi Excel modern yang fleksibel adalah ...",
        options: [
            "=SUM(A2:B50)",
            '=XLOOKUP(E2,A2:A50,B2:B50,"Tidak ditemukan")',
            "=COUNT(E2)",
            "=LEFT(E2,2)"
        ],
        answer: "B",
        explanation: "XLOOKUP mencari kode pada satu rentang dan mengambil hasil dari rentang lainnya."
    },

    {
        section: "EXCEL",
        question: "Rumus =B2/C2 menghasilkan #DIV/0!. Penyebab paling mungkin adalah ...",
        options: [
            "Nama fungsi salah",
            "Nilai pembagi C2 bernilai nol atau kosong",
            "Format sel menggunakan warna merah",
            "Workbook belum dicetak"
        ],
        answer: "B",
        explanation: "Error #DIV/0! terjadi ketika pembagian dilakukan dengan nilai nol atau sel kosong sebagai pembagi."
    },

    {
        section: "EXCEL",
        question: "Data omzet terdapat pada C2:C100. Wilayah berada di A dan bulan berada di B. Anda ingin menjumlahkan omzet wilayah Barat pada bulan Januari. Rumus terbaik adalah ...",
        options: [
            "=SUM(C2:C100)",
            '=SUMIF(A2:A100,"Barat",C2:C100)',
            '=SUMIFS(C2:C100,A2:A100,"Barat",B2:B100,"Januari")',
            '=COUNTIFS(A2:A100,"Barat",B2:B100,"Januari")'
        ],
        answer: "C",
        explanation: "SUMIFS dapat menjumlahkan nilai berdasarkan lebih dari satu kriteria."
    },

    {
        section: "EXCEL",
        question: "Stok barang berada di B2 dan penjualan berada di C2. Berikan status Prioritas jika stok kurang dari 10 ATAU penjualan lebih dari 100. Rumus yang benar adalah ...",
        options: [
            '=IF(AND(B2<10,C2>100),"Prioritas","Normal")',
            '=IF(OR(B2<10,C2>100),"Prioritas","Normal")',
            '=IF(B2<10,C2>100,"Prioritas","Normal")',
            '=COUNTIF(B2:C2,"Prioritas")'
        ],
        answer: "B",
        explanation: "OR menghasilkan TRUE jika salah satu atau kedua kondisi terpenuhi."
    },

    {
        section: "EXCEL",
        question: "Guru ingin memberikan warna merah secara otomatis pada nilai di bawah 75 tanpa mengubah isi sel. Fitur yang tepat adalah ...",
        options: [
            "Data Validation",
            "Conditional Formatting",
            "Text to Columns",
            "Remove Duplicates"
        ],
        answer: "B",
        explanation: "Conditional Formatting mengubah tampilan sel berdasarkan kondisi tertentu."
    },

    {
        section: "EXCEL",
        question: "Manajer meminta ringkasan ribuan transaksi berdasarkan produk dan bulan. Cara paling efisien adalah ...",
        options: [
            "Mengurutkan data berdasarkan warna",
            "Membuat PivotTable",
            "Menggabungkan semua transaksi dalam satu sel",
            "Menghapus transaksi lama"
        ],
        answer: "B",
        explanation: "PivotTable meringkas dan mengelompokkan data dalam jumlah besar secara dinamis."
    },

    {
        section: "EXCEL",
        question: "Template nilai dibagikan kepada beberapa guru. Kolom nilai hanya boleh berisi angka 0 sampai 100. Fitur terbaik untuk mencegah input salah adalah ...",
        options: [
            "Sort A to Z",
            "Data Validation",
            "Freeze Panes",
            "Format Painter"
        ],
        answer: "B",
        explanation: "Data Validation dapat membatasi input angka pada rentang 0 sampai 100."
    },

    {
        section: "EXCEL",
        question: "Setelah mengurutkan nama siswa, nilai beberapa siswa tidak lagi sesuai dengan nama mereka. Kesalahan paling mungkin adalah ...",
        options: [
            "Hanya kolom nama yang diurutkan tanpa seluruh tabel",
            "Menggunakan AutoSum",
            "Mengubah warna font",
            "Mengaktifkan Wrap Text"
        ],
        answer: "A",
        explanation: "Mengurutkan satu kolom saja dapat memisahkan nama dari data terkait pada baris yang sama."
    },

    {
        section: "EXCEL",
        question: "Anda membuat grafik penjualan bulanan yang harus mengikuti perubahan data sumber. Praktik terbaik adalah ...",
        options: [
            "Menggambar ulang grafik secara manual",
            "Menggunakan grafik yang terhubung ke sumber data atau Excel Table",
            "Menempel grafik sebagai screenshot",
            "Menghapus data bulan sebelumnya"
        ],
        answer: "B",
        explanation: "Grafik yang terhubung ke sumber data akan mengikuti perubahan data. PivotChart perlu di-refresh."
    },

    {
        section: "EXCEL",
        question: "Rumus VLOOKUP menghasilkan #N/A meskipun kode barang terlihat sama. Hal yang paling tepat diperiksa adalah ...",
        options: [
            "Apakah kolom hasil berwarna merah",
            "Apakah terdapat spasi tersembunyi atau perbedaan tipe data",
            "Apakah workbook memiliki grafik",
            "Apakah ukuran zoom 100 persen"
        ],
        answer: "B",
        explanation: "Spasi tersembunyi dan perbedaan tipe data dapat membuat kode yang terlihat sama tidak cocok saat dicari."
    }

];
