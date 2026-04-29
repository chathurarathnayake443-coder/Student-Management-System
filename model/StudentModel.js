class Student{
    #id;
    #name;
    #nic;
    #phone;
    #address;

    constructor(id, name, nic, phone, address){
        this.#id = id;
        this.#name = name;
        this.#nic = nic;
        this.#phone = phone;
        this.#address = address;
    }

    get id() {
        return this.#id;
    }
    get name() {
        return this.#name;
    }
    get nic() {
        return this.#nic;
    }
    get phone() {
        return this.#phone;
    }
    get address() {
        return this.#address;
    }
    set id(id) {
        this.#id = id;
    }
    set name(name) {
        this.#name = name;
    }
    set nic(nic) {
        this.#nic = nic;
    }
    set phone(phone) {
        this.#phone = phone;
    }
    set address(address) {
        this.#address = address;
    }
}

// ===================== Add Student ===========================

// ===================== Update Student ===========================

// ===================== Delete Student ===========================

// ===================== Load Student Data ===========================