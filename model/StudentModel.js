import {student_db_array} from "../db/db.js";

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

const addToStudents = (id, name, nic, phone, address) => {
    let student = new Student(id, name, nic, phone, address);

    student_db_array.push(student);
}
// ===================== Update Student ===========================

const updateStudentData = (id,name, nic, phone, address) => {
    let obj = student_db_array.find(item => item.id == id);

    if(obj){
        obj.id = id;
        obj.name = name;
        obj.nic = nic;
        obj.phone = phone;
        obj.address = address;
    }
}

// ===================== Delete Student ===========================

const deleteStudent = (id) => {
    let index = student_db_array.findIndex(item => item.id == id);
    student_db_array.splice(index, 1);
    addToStudentTable();
}

// ===================== Get Student ===========================

const getStudentData = () => {
    return student_db_array;
}
// ===================== Get Student By Index ===========================

const getStudentDataByIndex = (index) => {
    return student_db_array[index];
}

// ===================== Get Student By Id ===========================

const getStudentDataById = (id) => {
    return student_db_array.find(item => item.id == id);
}

export {addToStudents,updateStudentData,deleteStudent,getStudentDataById,getStudentData,getStudentDataByIndex};