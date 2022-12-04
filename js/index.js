

const init = () =>{
    document.getElementById("github-form").addEventListener("submit", (e) =>{
        e.preventDefault()
        getUserInfo(e.target.search.value)
    })
}

const getUserInfo = user =>{
    return fetch(`https://api.github.com/users/${user}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        const img = document.createElement("img")
        img.src=data.avatar_url
        document.getElementById("user-list").append(img)
        document.getElementById("user-list").append(document.createElement("li").innerText=data.login)
        document.getElementById("user-list").append(document.createElement("a").href=data.html_url.innerText=data.html_url)


    })
    .catch(err => console.error(err))
}


document.addEventListener("DOMContentLoaded", init)