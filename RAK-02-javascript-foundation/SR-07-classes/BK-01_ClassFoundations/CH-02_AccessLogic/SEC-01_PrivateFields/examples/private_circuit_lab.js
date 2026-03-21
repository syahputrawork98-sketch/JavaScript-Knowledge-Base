/**
 * LAB: Private Fields (The Internal Vault)
 * Level: Gold Standard Implementation
 */

// 1. Dasar: Melindungi State Vital
class SecureBankHub {
    #balance = 0; // Private Field

    constructor(initialDeposit) {
        if (initialDeposit > 0) {
            this.#balance = initialDeposit;
        }
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            this.#logTransaction(`Deposited ${amount}`);
        }
    }

    // 2. Lanjutan: Private Method (#)
    // Hanya bisa dipanggil dari dalam class ini.
    #logTransaction(msg) {
        console.log(`[LOG] ${new Date().toLocaleTimeString()} : ${msg}`);
    }

    getBalance() {
        return `Current Balance: $${this.#balance}`;
    }
}

const myWall = new SecureBankHub(1000);
myWall.deposit(500);
console.log(myWall.getBalance());

// Mencoba akses ilegal
// console.log(myWall.#balance); // SyntaxError
// myWall.#logTransaction("Hack!"); // SyntaxError

console.log("---");

// 3. Arsitektur: Parent-Child Isolation
class ParentHub {
    #secret = "PARENT_SECRET";
}

class ChildHub extends ParentHub {
    tryAccessParent() {
        try {
            // Anak tidak bisa mengakses rahasia orang tua!
            console.log(this.#secret);
        } catch (e) {
            console.log("Architect Warning: ChildHub cannot access #secret of ParentHub.");
        }
    }
}

const node = new ChildHub();
node.tryAccessParent();

console.log("---");

// 4. Architect Drill: Private Field Initialization
class ThermalCore {
    // Harus dideklarasikan di sini!
    #temp; 
    
    constructor(t) {
        this.#temp = t;
    }
    
    get temp() { return this.#temp; }
}

const core = new ThermalCore(50);
console.log("Core Temp:", core.temp);
