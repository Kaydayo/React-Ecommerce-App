const home = document.getElementById('home')
const chat = document.getElementById('chat')
const dashboard = document.getElementById('dashboard')
const charts = document.getElementById('charts')
const Addresses = document.getElementById('Addresses')
const library = document.getElementById('library')
const logout = document.getElementById('logout')
const table = document.getElementById("pop-table")
const teacherDashboard = document.getElementById("users-tab")

const myData = [
    {
        img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        name: "Charles Nonna",
        ID: "TC/112",
        Address: "Mathematics",
        Age: "33",
        Email: "charlesnonna@gmail.com"
    },
    {
        img: "https://images.unsplash.com/photo-1592334873219-42ca023e48ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w3NjA4Mjc3NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        name: "Andrew Nonna",
        ID: "TC/112",
        Address: "English",
        Age: "34",
        Email: "charlesnonna@gmail.com"
    },
    {
        img: "https://images.unsplash.com/photo-1585837146751-a44118595680?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTR8NzYwODI3NzR8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        name: "Charles Nonna",
        ID: "TC/112",
        Address: "Yoruba",
        Age: "23",
        Email: "charlesnonna@gmail.com"
    },
    {
        img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        name: "Charles Nonna",
        ID: "TC/112",
        Address: "Physics",
        Age: "36",
        Email: "charlesnonna@gmail.com"
    },
    {
        img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        name: "Charles Nonna",
        ID: "TC/112",
        Address: "Biology",
        Age: "45",
        Email: "charlesnonna@gmail.com"
    },
    {
        img: "https://images.unsplash.com/photo-1592334873219-42ca023e48ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w3NjA4Mjc3NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        name: "James edugbon",
        ID: "TC/112",
        Address: "Agriculture",
        Age: "26",
        Email: "charlesnonna@gmail.com"
    },
    {
        img: "https://images.unsplash.com/photo-1581824043583-6904b080a19c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mnw3NjA4Mjc3NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        name: "Chiamaka nna",
        ID: "TC/114",
        Address: "Computer-Science",
        Age: "56",
        Email: "charlesnonna@gmail.com"
    }
]

home.addEventListener('click', () => {
    window.open("../admin/admin.html", "_self")
})
charts.addEventListener('click', () => {
    window.open("../chart/chart.html", "_self")
})
dashboard.addEventListener('click', () => {
    window.open("../dashboard/dashboard.html", "_self")
})