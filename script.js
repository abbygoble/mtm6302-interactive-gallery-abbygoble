console.log('hi')


// adds array to hold all images
const pictureArray = [
    {
        image: 'images/barley-big.jpg',
        thumbnail: 'images/barley-small.jpg',
        name: 'Barley'
    },
    {
        image: 'images/hudson-big.jpg',
        thumbnail: 'images/hudson-small.jpg',
        name: 'Hudson'
    },
    {
        image: 'images/pepe-big.jpg',
        thumbnail: 'images/pepe-small.jpg',
        name: 'Pepe'
    },
    {
        image: 'images/marley-big.jpg',
        thumbnail: 'images/marley-small.jpg',
        name: 'Marley'
    },
    {
        image: 'images/eloise-big.jpg',
        thumbnail: 'images/eloise-small.jpg',
        name: 'Eloise'
    },
    {
        image: 'images/otis-big.jpg',
        thumbnail: 'images/otis-small.jpg',
        name: 'Otis'
    },
    {
        image: 'images/shrimp-big.jpg',
        thumbnail: 'images/shrimp-small.jpg',
        name: 'Shrimp'
    },
    {
        image: 'images/maurice-big.jpg',
        thumbnail: 'images/maurice-small.jpg',
        name: 'Maurice'
    },
    {
        image: 'images/delilah-big.jpg',
        thumbnail: 'images/delilah-small.jpg',
        name: 'Delilah'
    },
    {
        image: 'images/jeffrey-big.jpg',
        thumbnail: 'images/jeffrey-small.jpg',
        name: 'Jeffrey'
    },
    {
        image: 'images/heidi-big.jpg',
        thumbnail: 'images/heidi-small.jpg',
        name: 'Heidi'
    },
    {
        image: 'images/grunter-big.jpg',
        thumbnail: 'images/grunter-small.jpg',
        name: 'Grunter'
    }



]

// collects section in a variable for container
const $container = document.getElementById('section')

// creates empty array to push for of loop to
const template = []

// for of loop to add content to the page
for (const picture of pictureArray) {
    template.push(`
        <img src="${picture.thumbnail}"
        class="galleryPhoto"
        data-large="${picture.image}"
        data-source="${picture.name}"
        </img>
      `)
}

// joins the inner html to the container variable
$container.innerHTML = template.join('')

// collects content in class modal and puts it in a variable
const $modal = document.querySelector('.modal')

// adds event listener by clicking to show the small image
$container.addEventListener('click', function (e) 
{ if(e.target.classList.contains('galleryPhoto')) {
    console.log(e.target);
    $modal.innerHTML = `
    <img src="${e.target.dataset.large}">   
    <small>${e.target.dataset.source}</small>`
    $modal.classList.add('show')
    }
})

// adds event listener by clicking to remove show
$modal.addEventListener('click', function () {
  $modal.classList.remove('show')
})
