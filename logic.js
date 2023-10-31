loadJSON()

async function loadJSON() { 
    data = await askForData()

    for (let index = 0; index < data.length; index++) {

        profileContainer = document.createElement("div")
        profileContainer.classList.add("profile_container")
        
        imageWrapper = document.createElement("div")
        imageWrapper.classList.add("img_wrapper")
        
        profileImage = document.createElement("img")
        profileImage.classList.add("profile_image")
        // profileImage.classList.add("main_content")
        profileImage.id = data[index]["Name"]     // maybe this should be a parameter in the event listener
        profileImage.src = data[index]["Image"]

        profileImage.addEventListener("click", function() {getProfileInfo(index)})

        profileTextNode = document.createTextNode(data[index]["Name"])
        profileName = document.createElement("div")
        profileName.classList.add("profile_name")
        profileName.appendChild(profileTextNode)

        imageWrapper.appendChild(profileImage)
        profileContainer.appendChild(imageWrapper)
        imageWrapper.appendChild(profileName)
        
        document.getElementById("profiles_container").appendChild(profileContainer)
    }
}

async function askForData() {
    let res = await fetch("./information.json");
    return res.json()
  }

function getProfileInfo(index) {

    console.log(data[index]["Name"])

    document.getElementById("info_background").classList.remove("hidden")
    document.getElementById("info_container").classList.remove("hidden")

    bioImage = document.createElement("img")
    bioImage.classList.add("bio_image")
    bioImage.id = data[index]["Name"]
    bioImage.src = data[index]["Image"]

    bioTextNode = document.createTextNode(data[index]["Biography"])
    bioText = document.createElement("div")
    bioText.classList.add("bio_text")
    bioText.appendChild(bioTextNode)

    document.getElementById("bio_image_container").appendChild(bioImage)
    document.getElementById("info_container").appendChild(bioText)

    // later add bioVideoContainer for fav compositions/solos
}
