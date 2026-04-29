import {addToStudents,updateStudentData,deleteStudent,getStudentData,getStudentDataByIndex,getStudentDataById} from "../model/StudentModel.js";
import {check_nic,check_phone} from "../utils/regex_utils.js";
// student section

// student save

$('#student_save_btn').on('click', function () {

    let student_id = $('#student_id_input').val();
    let student_name = $('#student_name_input').val();
    let student_nic = $('#student_nic_input').val();
    let student_phone = $('#student_phone_input').val();
    let student_address = $('#student_address_input').val();

    (student_id == "") ? alert('ID Missing') : !check_nic(student_nic)? alert('Invalid NIC')
        : (student_name == "") ? alert('Name Missing') : !check_phone(student_phone) ?
            alert('Invalid Phone Number') : (student_address == "") ? alert('Address Missing') : (addToStudents(student_id, student_name, student_nic, student_phone, student_address),addToStudentTable(),$('#student_reset_btn').trigger('click'));
})

// load student table

const addToStudentTable = () => {
    $('#student_tbody').empty();

    let student_db_array = getStudentData();

    student_db_array.map((item, index) => {
        let data = `${item.id},${item.name},${item.nic},${item.phone},${item.address}`;
        let newRow = `<tr data-index="${data}"><td>${item.id}</td><td>${item.name}</td><td>${item.nic}</td><td>${item.phone}</td><td>${item.address}</td></tr>`;
        $('#student_tbody').append(newRow);
    })
}

// student reset

$('#student_reset_btn').on('click', function () {
    $('#student_id_input').val("");
    $('#student_name_input').val("");
    $('#student_nic_input').val("");
    $('#student_phone_input').val("");
    $('#student_address_input').val("");
})

// load Student Data
$('#student_tbody').on('click', 'tr' ,function () {
    let obj = getStudentDataByIndex($(this).index());

    $('#student_id_input').val(obj.id);
    $('#student_name_input').val(obj.name);
    $('#student_nic_input').val(obj.nic);
    $('#student_phone_input').val(obj.phone);
    $('#student_address_input').val(obj.address);

    $(this).css('cursor', 'pointer');
})

// student update
$('#student_update_btn').on('click', function () {
    let student_id = $('#student_id_input').val();
    let student_name = $('#student_name_input').val();
    let student_nic = $('#student_nic_input').val();
    let student_phone = $('#student_phone_input').val();
    let student_address = $('#student_address_input').val();

    (student_id == "") ? alert('ID Missing') : !check_nic(student_nic)? alert('Invalid NIC')
        : (student_name == "") ? alert('Name Missing') : !check_phone(student_phone) ?
            alert('Invalid Phone Number') : (student_address == "") ? alert('Address Missing') : (updateStudentData(student_id, student_name, student_nic, student_phone, student_address),addToStudentTable(), $('#student_reset_btn').trigger('click'));

})

// student delete
$('#student_delete_btn').on('click', function () {
    let student_id = $('#student_id_input').val();

    (student_id == "")? alert('ID Missing') : (!getStudentDataById(student_id)) ? alert('Student Not Found') : (deleteStudent(student_id),addToStudentTable(), $('#student_reset_btn').trigger('click'));
})
