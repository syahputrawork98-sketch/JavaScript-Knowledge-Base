# CH-07: The Symbol Type (The Exclusive Tag)

> **"Di dalam Grid yang padat, tabrakan data (*collision*) adalah ancaman nyata. `Symbol` adalah 'Tag Eksklusif' (The Exclusive Tag) — pengenal unik yang dijamin tidak akan pernah tertukar dengan pengenal lain, bahkan jika namanya terdengar sama."**

*Pemetaan ECMA-262: Clause 6.1.5 (The Symbol Type)*

## 1. Mental Model: "The Exclusive Tag"

Bayangkan setiap unit di Hub diberikan stempel laser unik saat diproduksi.
- Meskipun ada dua unit bernama "BATERAI_1", stempel lasernya berbeda secara fisik di level molekuler.
- Di Hub, `Symbol()` menciptakan identifier yang **benar-benar unik**. Tidak ada dua Symbol yang sama, kecuali jika Anda menggunakan Global Registry.

---

## 2. Kegunaan di Grid: Hidden Keys

Symbol sering digunakan untuk menambahkan properti ke sebuah Object tanpa takut properti tersebut ditimpa oleh skrip lain yang menggunakan nama string yang sama.

```javascript
const PRIVATE_KEY = Symbol("access_code");
const hub = {
  [PRIVATE_KEY]: "0x55AA"
};

console.log(hub[PRIVATE_KEY]); // "0x55AA"
// Teknisi luar tidak bisa menebak key ini hanya dengan loop string biasa.
```

---

## 3. Well-known Symbols (Protokol Standar)

Sistem Hub memiliki set "Tag Standar" yang sudah dikenal secara universal, seperti `Symbol.iterator`. Jika sebuah unit memiliki tag ini, unit tersebut secara otomatis bisa dipindahkan melalui sistem `for...of` (Iterasi).

---

## Arsitek Mindset: Keamanan Properti

Sebagai arsitek Hub:
- Gunakan Symbol jika Anda sedang membangun library atau modul inti Hub yang akan digunakan oleh banyak teknisi lain, untuk mencegah mereka secara tidak sengaja menimpa variabel internal Anda.
- Ingat: Symbol bukan untuk keamanan kriptografi, tapi untuk **menghindari tabrakan nama** (*name collision*).
- Jangan gunakan `new Symbol()`; ini adalah Primitif, panggil langsung sebagai fungsi `Symbol()`.

---
*Status: [status.md](../../../docs/status.md)*
