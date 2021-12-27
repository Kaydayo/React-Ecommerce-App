const home = document.getElementById('home')
const chat = document.getElementById('chat')
const charts = document.getElementById('charts')
const Addresses = document.getElementById('Addresses')
const library = document.getElementById('library')
const logout = document.getElementById('logout')
const table = document.getElementById("pop-table")
const teacherPDashboard = document.getElementById("users-tab")
teacherPDashboard.addEventListener('click', (e) => {
    console.log(e.target.id)
    if (e.target.id === "teachers-table") {
        window.open("./teacher.html", "_self")
    } else if (e.target.id === "parents-table") {
        window.open("./parent.html", "_self")
    } else if (e.target.id === "students-table") {
        window.open("./dashboard.html", "_self")
    }

})
const myData = [
    {
        img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        name: "Charles Nonna",
        ID: "PD/112",
        Address: "2 Walnutwood Drive",
        Age: "33",
        Email: "charlesnonna@gmail.com"
    },
    {
        img: "https://images.unsplash.com/photo-1592334873219-42ca023e48ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w3NjA4Mjc3NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        name: "Andrew Nonna",
        ID: "PD/112",
        Address: "4 South Clark Avenue",
        Age: "34",
        Email: "charlesnonna@gmail.com"
    },
    {
        img: "https://images.unsplash.com/photo-1585837146751-a44118595680?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTR8NzYwODI3NzR8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        name: "Charles Nonna",
        ID: "PD/112",
        Address: "11 North Jefferson St.",
        Age: "23",
        Email: "charlesnonna@gmail.com"
    },
    {
        img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        name: "Charles Nonna",
        ID: "PD/112",
        Address: "585 SE. Vine St.",
        Age: "36",
        Email: "charlesnonna@gmail.com"
    },
    {
        img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        name: "Charles Nonna",
        ID: "PD/112",
        Address: "232 Lancaster Street",
        Age: "45",
        Email: "charlesnonna@gmail.com"
    },
    {
        img: "https://images.unsplash.com/photo-1592334873219-42ca023e48ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w3NjA4Mjc3NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        name: "James edugbon",
        ID: "PD/112",
        Address: "8439 Edgefield Road",
        Age: "26",
        Email: "charlesnonna@gmail.com"
    },
    {
        img: "https://images.unsplash.com/photo-1581824043583-6904b080a19c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mnw3NjA4Mjc3NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        name: "Chiamaka nna",
        ID: "PD/114",
        Address: "Jamestown, NY 14701",
        Age: "56",
        Email: "charlesnonna@gmail.com"
    }
]
document.addEventListener('DOMContentLoaded', () => {
    myData.map(data => {
        table.innerHTML += `
            <tr> 
                <td>
                    <img src="${data.img}" alt="photo">${data.name}
                </td>
                <td>
                    ${data.ID}
                </td>
                <td>
                    ${data.Address}
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
table.addEventListener('click', (e) => {

    const id = e.target.parentElement.dataset.id
    modal.style.display = "block"
})

const span = document.getElementsByClassName('close')[0]

span.addEventListener('click', () => {
    modal.style.display = "none";
})
