
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
    // let tableContent =
    //     `<tr class="border-b-2 py-4 justify-center">
    //   <td class="py-4"></td>
    //   <td class="py-4"></td>
    //   <td class="py-4"></td>
    //   <td class="py-4"></td>
    //   <td class="py-4"></td>
    //   <td class="py-4"></td>
    //   <td class="py-4"></td>
    // </tr>`
    let tableContent = '';

    students.forEach((student) => {
        let genderOfstudenr = ''
        if (student.gender == 1)
            genderOfstudenr = 'Male';
        else if (student.gender == 2) genderOfstudenr = 'Female';
        // tableContent =
        // // <tr class="border-b-2 py-4 justify-center">
        // `

        // <td class="py-4"> ${student.name}</td>
        // <td class="py-4">${student.email}</td>
        // <td class="py-4">${student.phone}</td>
        // <td class="py-4">${student.address}</td>
        // <td class="py-4">${genderOfstudenr}</td>
        // <td>
        // <button id="del-btn" class="font-bold px-1 bg-black text-white">Del</button>
        // or 
        // <button id="edit-btn" class="font-bold px-1 bg-black text-white">Edit</button>
        // </td>

        // `
        // </tr>
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td class="py-4"> ${student.name}</td>
        <td class="py-4">${student.email}</td>
        <td class="py-4">${student.phone}</td>
        <td class="py-4">${student.address}</td>
        <td class="py-4">${genderOfstudenr}</td>
        <td>
        <button id="del-btn" class="font-bold px-1 bg-black text-white">Del</button>
        or 
        <button id="edit-btn" class="font-bold px-1 bg-black text-white">Edit</button>
        </td>
        `;
        studentlist.appendChild(tr);


        // document.getElementById('table-student').innerHTML += tableContent;

    })
}
