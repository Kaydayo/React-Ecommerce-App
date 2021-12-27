const home = document.getElementById('home')
const chat = document.getElementById('chat')
const charts = document.getElementById('charts')
const classes = document.getElementById('classes')
const library = document.getElementById('library')
const logout = document.getElementById('logout')
const table = document.getElementById("pop-table")
const teachersDashboard = document.getElementById("users-tab")


teachersDashboard.addEventListener('click', (e) => {
    if (e.target.id === "teachers-table") {
        window.open("./teacher.html", "_self")
    } else if (e.target.id === "parents-table") {
        window.open("./parent.html", "_self")
    } else if (e.target.id === "parents-table") {
        window.open("./dashboard.html", "_self")
    }
})
const myData = [
    {
        img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        name: "Charles Nonna",
        ID: "SD/112",
        Class: "ss1",
        Age: "13",
        Email: "charlesnonna@gmail.com"
    },
    {
        img: "https://images.unsplash.com/photo-1592334873219-42ca023e48ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w3NjA4Mjc3NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        name: "Andrew Nonna",
        ID: "SD/113",
        Class: "ss3",
        Age: "13",
        Email: "charlesnonna@gmail.com"
    },
    {
        img: "https://images.unsplash.com/photo-1585837146751-a44118595680?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTR8NzYwODI3NzR8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        name: "Charles Nonna",
        ID: "SD/114",
        Class: "ss1",
        Age: "13",
        Email: "charlesnonna@gmail.com"
    },
    {
        img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        name: "Charles Nonna",
        ID: "SD/115",
        Class: "ss1",
        Age: "13",
        Email: "charlesnonna@gmail.com"
    },
    {
        img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        name: "Charles Nonna",
        ID: "SD/116",
        Class: "ss1",
        Age: "13",
        Email: "charlesnonna@gmail.com"
    },
    {
        img: "https://images.unsplash.com/photo-1592334873219-42ca023e48ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w3NjA4Mjc3NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        name: "James edugbon",
        ID: "SD/117",
        Class: "jss1",
        Age: "13",
        Email: "charlesnonna@gmail.com"
    },
    {
        img: "https://images.unsplash.com/photo-1581824043583-6904b080a19c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mnw3NjA4Mjc3NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        name: "Chiamaka nna",
        ID: "SD/118",
        Class: "ss3",
        Age: "13",
        Email: "charlesnonna@gmail.com"
    }
]
document.addEventListener('DOMContentLoaded', () => {
    myData.map(data => {
        table.innerHTML += `
            <tr class="openModal" data-id='${data.ID}'> 
                <td>
                    <img src="${data.img}" alt="photo">${data.name}
                </td>
                <td>
                    ${data.ID}
                </td>
                <td>
                    ${data.Class}
                </td>
                <td>
                    ${data.Age}
                </td>
                <td>
                    ${data.Email}
                </td>
            </tr>`
    })

})
home.addEventListener('click', () => {
    window.open("../admin/admin.html", "_self")
})
charts.addEventListener('click', () => {
    window.open("../chart/chart.html", "_self")
})


const modal = document.getElementById('myModal')
const modalDetails = document.getElementById('modal-details')
console.log(modalDetails)
table.addEventListener('click', (e) => {

    const id = e.target.parentElement.dataset.id
    modal.style.display = "block"
    const user = myData.find(user => user.ID == id)
    modalDetails.innerHTML = `
    <div id="modal-container" style="display: flex; flex-direction: column; align-items: center">
    <div><p>${user.ID}</p></div>
    <div><img style="width: auto; height: 100px; border-radius: 50%; border: 3px solid white; box-shadow: 0 0 10px #35558d78" src="${user.img}" alt=""></div>
    <div id="form" style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-top: 1rem">
    <div>
        <div><Label for="user-name">Name:</Label></div>
        <div class="modal-inputs"><input type="text" name="user-name" id="user-name" value='${user.name}''></div>
    </div>
    <div>
        <div><Label for="user-email">Email:</Label></div>
        <div class="modal-inputs"><input type="email" name="user-email" id="user-email" value=${user.Email}></div>
    </div>
    <div>
        <div><Label for="user-age">Age:</Label></div>
        <div class="modal-inputs"><input type="number" name="user-age" id="user-age" value=${user.Age}></div>
    </div>
    <div>
        <div><Label for="user-class">Class:</Label></div>
        <div class="modal-inputs"><input type="text" name="user-class" id="user-class" value='${user.Class}'></div>
    </div>
</div>

    
    
</div>
    
    `

})

const span = document.getElementsByClassName('close')[0]

span.addEventListener('click', () => {
    modal.style.display = "none";
})

