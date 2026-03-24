# SEC-01: First-class Functions (Energy Units)

> **"Di JavaScript, fungsi bisa diperlakukan seperti data biasa: disimpan, dikirim, dan dikembalikan."**

Kemampuan inilah yang membuat JavaScript sangat fleksibel dalam membangun callback, pabrik fungsi, dan pola modular.

## Source Hub
- **Primary Source**: [MDN Web Docs - First-class Function](https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function)
- **Technical Reference**: [ECMA-262 - Function Objects](https://tc39.es/ecma262/#sec-function-objects)

## Senior Terminology
- **First-class Citizen**: Entitas yang bisa diperlakukan seperti nilai biasa.
- **Function Expression**: Fungsi yang disimpan dalam variabel atau ekspresi.
- **Callback Pattern**: Pengiriman fungsi sebagai argumen untuk dipanggil oleh fungsi lain.

## 1. Mental Model: "Energy Units"

Bayangkan fungsi sebagai unit fisik yang bisa dipindahkan ke mana saja.

Tiga pilar utamanya:
1. **Dapat disimpan** di dalam variabel.
2. **Dapat dikirim** ke fungsi lain.
3. **Dapat dikembalikan** sebagai hasil.

![First-class Function Units](./assets/first_class_units.svg)

---

## 2. Fungsi sebagai Data

```javascript
const transformEnergy = function(input) {
    return input * 0.85;
};

console.log(transformEnergy(100));
```

---

## 3. Fungsi sebagai Callback

```javascript
function processGrid(callback) {
    console.log("Memulai pemrosesan grid...");
    callback();
}

const alertSystem = () => console.log("Grid diproses!");

processGrid(alertSystem);
```

---

## 4. Fungsi sebagai Hasil

```javascript
function createMultiplier(factor) {
    return function(value) {
        return value * factor;
    };
}

const doublePower = createMultiplier(2);
console.log(doublePower(50));
```

---

## Arsitek Mindset: Fleksibilitas Modular

Saat fungsi bisa diperlakukan seperti data, kita dapat membangun sistem yang lebih fleksibel dan tidak tergantung pada satu jalur logika kaku.

---

## Hands-on: Pabrik Transformator

Buka file `examples/functions_lab.js` untuk melihat bagaimana fungsi dipakai sebagai unit modular.

---
*Status: [status.md](../../../status.md)*

---
*Back to [The Functional Engine](../README.md)*
