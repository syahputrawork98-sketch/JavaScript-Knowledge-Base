# C08 - Method Definitions Runtime dan Evaluasi

## Tujuan

Bab ini bertujuan memahami pembentukan method dan proses evaluasinya.

## Kenapa Bab Ini Penting

Setelah bentuk method dipahami, langkah berikutnya adalah runtime behavior: kapan method dibentuk, bagaimana binding ke object terjadi, dan bagaimana call-site memengaruhi hasil eksekusi.

## Konsep Inti

1. Method definition dievaluasi saat object dibuat.
2. Call-site (`obj.method()`) menentukan `this` pada method biasa.
3. Memindahkan reference method ke variabel lepas bisa mengubah konteks `this`.

Contoh call-site:

```js
const counter = {
  value: 1,
  inc() {
    this.value += 1;
    return this.value;
  }
};
```

Pemanggilan `counter.inc()` berbeda efek dengan menyimpan `const fn = counter.inc; fn();`.

## Praktik yang Direkomendasikan

- Saat melepas method dari object, pertimbangkan `bind` jika butuh konteks tetap.
- Gunakan pengujian kecil untuk memvalidasi perubahan `this` pada call-site berbeda.
- Jaga method tetap fokus agar side effect mudah dilacak.

## Kesalahan Umum

- Mengira `this` method selalu menunjuk object asal deklarasi.
- Melepas method ke callback tanpa bind lalu bingung saat `this` berubah.
- Menumpuk side effect dalam method tanpa observabilitas output.

## Checkpoint Cepat

1. Apa hubungan call-site dengan nilai `this` di method?
2. Kapan `bind` diperlukan saat method dijadikan callback?
3. Bagaimana membedakan bug syntax method dan bug runtime context?

## Ringkasan

- Runtime method dipengaruhi waktu evaluasi object dan cara pemanggilan.
- Call-site adalah kunci utama membaca `this`.
- Pola `bind`/wrapper membantu menjaga konteks saat method dipakai lintas boundary.

## Spec Coverage

Bab ini terutama selaras dengan section ECMAScript berikut:

- `15.4.3`
- `15.4.4`
- `15.4.5`

Referensi mapping penuh: `../docs/spec-mapping-70.md`.

## Visual Map

![C08 Method Definitions Runtime dan Evaluasi Map](../assets/C08-method-definitions-runtime-dan-evaluasi-map.svg)

## Contoh Runnable

- Lihat contoh: `../examples/C08-method-definitions-runtime-dan-evaluasi/example.js`
- Lihat contoh tambahan: `../examples/C08-method-definitions-runtime-dan-evaluasi/example-02.js`
- Lihat contoh tambahan: `../examples/C08-method-definitions-runtime-dan-evaluasi/example-03.js`
- Panduan: `../examples/C08-method-definitions-runtime-dan-evaluasi/README.md`