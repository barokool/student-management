
const button = document.getElementById('button');
let students = [];
const studentlist = document.getElementById('table-student');
button.addEventListener('click', (e) => {
    e.preventDefault();
    let fullname = document.getElementById('fullname').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let address = document.getElementById('address').value;
    let gender = '';
    if (document.getElementById('male').checked) {
        gender = document.getElementById('male').value;
    }
    else if (document.getElementById('female').checked)
        gender = document.getElementById('female').value;

    if (fullname === '' || email === '' || phone === '' || address === '' || gender === '') {
        alert("please fill out the form ");
        return;
    }

    students.push({
        name: fullname,
        email: email,
        phone: phone,
        address: address,
        gender: gender,
    });


    addTolocalStorage(students);




})

const clearbtn = document.getElementById("clear-btn");
clearbtn.addEventListener("click", () => {

})

function addTolocalStorage(students) {
    localStorage.setItem("students", JSON.stringify(students));
    renderStudent(students);
}

function getLocalStorage() {
    const reference = localStorage.getItem('students');
    if (reference) {
        students = JSON.parse(reference);
        renderStudent(students);
    }
}
getLocalStorage();

function renderStudent(students) {
    let tableContent =
        `<tr class="border-b-2 py-4 items-center justify-center">
        <td class="py-4">Number</td>
      <td class="py-4">Name</td>
      <td class="py-4">Email</td>
      <td class="py-4">Phone</td>
      <td class="py-4">Address</td>
      <td class="py-4">Gender</td>
      <td class="py-4">Action</td>
    </tr>`

    if (students.length <= 0)
        document.getElementById("table-student").style.display = "none";

    students.forEach((student, index) => {
        let studentid = index;
        index++;
        let genderOfstudenr = ''
        if (student.gender == 1)
            genderOfstudenr = 'Male';
        else if (student.gender == 2) genderOfstudenr = 'Female';

        tableContent +=
            `
        <tr class="border-b-2 py-4 items-center justify-center">
        <td class="py-4">${index}</td>
        <td class="py-4"> ${student.name}</td>
        <td class="py-4">${student.email}</td>
        <td class="py-4">${student.phone}</td>
        <td class="py-4">${student.address}</td>
        <td class="py-4">${genderOfstudenr}</td>
        <td>
        <button id="del-btn" onclick="del(${studentid})"  class="font-bold px-1 bg-black text-white">Del</button>
        or 
        <button id="edit-btn" onclick="edit(${studentid})" class="font-bold px-1 bg-black text-white">Edit</button>
        </td>
        </tr>

        `
        const tableStudent = document.getElementById('table-student');
        tableStudent.innerHTML = tableContent;

    })
}

function del(id) {
    const student = JSON.parse(localStorage.getItem("students"));
    console.log(student);
    student.splice(id, 1);
    localStorage.setItem("students", JSON.stringify(student));
    renderStudent(student);

}

function edit(id) {
    const container = document.getElementById("container");
    container.classList.add("active");
}

const closebtn = document.getElementById("close-btn");
closebtn.addEventListener("click", (e) => {
    const container = document.getElementById("container");
    container.classList.remove("active");
    e.preventDefault();

})