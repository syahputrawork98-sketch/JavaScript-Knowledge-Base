/**
 * LAB: International Translator
 * Mental Model: "The Translator (Intl)"
 */

const amount = 1250500.75;
const date = new Date(2026, 2, 19); // 19 Maret 2026

// 1. Format Mata Uang (Currency)
const idrFormatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR"
});

const usdFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
});

console.log("--- Laporan Keuangan Hub ---");
console.log("Indonesia:", idrFormatter.format(amount));
console.log("USA:", usdFormatter.format(amount));

// 2. Format Tanggal (Date)
const longDateID = new Intl.DateTimeFormat("id-ID", { dateStyle: "full" });
const shortDateJP = new Intl.DateTimeFormat("ja-JP", { dateStyle: "short" });

console.log("\n--- Laporan Waktu Lokal ---");
console.log("Indonesia (Full):", longDateID.format(date));
console.log("Japan (Short):", shortDateJP.format(date));

// 3. Waktu Relatif (RelativeTime)
const relative = new Intl.RelativeTimeFormat("id-ID", { numeric: "auto" });
console.log("\n--- Notifikasi Sistem ---");
console.log("Jadwal perbaikan:", relative.format(2, "day"));
console.log("Terakhir update:", relative.format(-5, "minute"));

// 4. Daftar Item (List)
const engines = ["Solar-V1", "Wind-V2", "Hydro-V3"];
const listFormatter = new Intl.ListFormat("id-ID", { style: "long", type: "conjunction" });
console.log("\nMesin Aktif:", listFormatter.format(engines));
