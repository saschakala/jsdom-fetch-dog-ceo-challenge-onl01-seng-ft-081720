console.log('%c HI', 'color: firebrick')





document.addEventListener("DOMContentLoaded", () => {

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const breedSelect = document.getElementById("breed-dropdown")
const breedList = document.getElementById('dog-breeds')
    
    function fetchPics() {
        fetch (imgUrl)
        .then (resp => resp.json())
        .then (data => addPicsToPage(data)
        )}

    function addPicsToPage(pics){
        const imageContainer = document.getElementById('dog-image-container')
        pics.message.forEach(function(pic) {
            const imageElement = document.createElement('img')
            imageElement.src = pic
            imageElement.width = "200"
            imageContainer.appendChild(imageElement)
        })
    }

    function fetchBreed() {
        fetch (breedUrl)
        .then (resp => resp.json())
        .then (data => addBreedsToPage(data)
        )}

    function addBreedsToPage(breeds) {
        const breedNames = Object.keys(breeds.message)
        breedNames.forEach(function(breed) {
            const li = document.createElement('li')
            li.className = "breed-list-item"
            li.innerText = breed
            breedList.appendChild(li)
            li.addEventListener("click", function(){
                li.style.color = "purple"
            })
        })
        }

        function fetchBreedsAlphabetically() {
            fetch (breedUrl)
            .then (resp => resp.json())
            .then (data => addBreedsAlphabetically(data)
        )}

        function addBreedsAlphabetically(breeds) {
            breedList.innerText = ''
            const letter = document.getElementById("breed-dropdown").value
            const breedNames = Object.keys(breeds.message)
            breedNames.forEach(function(breed) {
                if (breed.charAt(0) == letter){
                    const li = document.createElement('li')
                    li.innerText = breed
                    breedList.appendChild(li)
                }
            })
        }

        
        breedSelect.addEventListener("change", fetchBreedsAlphabetically)



    
    fetchPics()
    fetchBreed()
    fetchBreedsAlphabetically()


  });

