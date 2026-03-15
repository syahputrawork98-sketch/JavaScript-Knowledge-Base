# Chapter 01: Context-Free Grammars

Sebelum memahami aturan khusus JavaScript, kita harus paham bagaimana sebuah bahasa didefinisikan secara teoretis melalui *Context-Free Grammars* (CFG).

## 1. Hierarki Bahasa

Sebuah bahasa pemrograman bukanlah kumpulan karakter acak. Ia adalah struktur pohon.

### Analogi Singkat: "Pohon Lego"
Sandaran Lego (Terminal) adalah bagian terkecil yang tidak bisa dipecah lagi. Susunan Lego (Non-terminal) adalah hasil gabungan sandaran tersebut menjadi bentuk tertentu (seperti Mobil atau Rumah). Aturan CFG menentukan apakah kotak Lego Anda valid untuk membentuk sebuah mobil.

## 2. Terminal vs Non-terminal

1. **Terminal**: Simbol nyata yang muncul di kode (seperti `(`, `}`, `function`, atau angka `10`).
2. **Non-terminal**: Nama untuk grup aturan (seperti *Statement*, *Expression*, atau *Identifier*).

Arsitek harus paham bahwa kesalahan sintaks sebenarnya adalah ketidakmampuan *Parser* untuk memetakan "Pasir" (Karakter) Anda ke dalam "Pohon" (Non-terminal) yang valid.
