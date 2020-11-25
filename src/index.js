console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

document.addEventListener("DOMContentLoaded", () => {

    fetchPics()


    function fetchPics() {
        return fetch (imgUrl)
        .then (resp => resp.json())
        .then (json => addPicsToPage(json)
        )}

    function addPicsToPage(pics){
        const imageContainer = document.getElementById('dog-image-container')
        pics.message.forEach(function(url) {
            const imageElement = document.createElement('img')
            imageElement.src = url
            imageElement.width = "300"
            imageContainer.appendChild(imageElement)
        })
    }



  });

