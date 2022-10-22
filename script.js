const getUser = async () => {
    try {
        let body = await fetch("https://randomuser.me/api/")
        let parseData = await body.json()
        console.log(parseData);
        let user = parseData.results[0]
    
        let userDisplay = document.createElement("div")
        userDisplay.innerHTML = (`
        <img src="${user.picture.medium}" style="height: 100px">
        <h2>${user.name.title} ${user.name.first} ${user.name.last}</h2>
        <h3>${user.location.country}</h3>
        <p>Email: ${user.email}</p>
        `)
        document.querySelector(".container-main").append(userDisplay)
    } catch (error) {
        console.log(error);
        let userDisplay = document.createElement("div")
        userDisplay.innerText = "Could not load data from randomuser-api"
        document.querySelector(".container-main").append(userDisplay)
    }  
}

let userButton = document.querySelector("#user")
userButton.addEventListener("click", getUser)
