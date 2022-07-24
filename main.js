document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {
    const url = `https://mhw-db.com/monsters`
    const arrayNumber = Math.floor(Math.random() * 58)
    console.log(arrayNumber)
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
            document.querySelector('h1').innerText = data[arrayNumber].name
            document.querySelector('#monster-description').innerText = data[arrayNumber].description
            document.querySelector('#monster-locations').innerText = ""
            data[arrayNumber].locations.forEach(element => document.querySelector('#monster-locations').innerText += ' ' + element.name);
            document.querySelector('#monster-elements').innerText = data[arrayNumber].elements
            document.querySelector('#monster-type').innerText = data[arrayNumber].type
            document.querySelector('#monster-ailments').innerText = ""
            data[arrayNumber].ailments.forEach(element => document.querySelector('#monster-ailments').innerText += ' ' + element.name)
            document.querySelector('#monster-species').innerText = data[arrayNumber].species
            document.querySelector('#monster-weaknesses').innerText = ""
            data[arrayNumber].weaknesses.forEach(element => document.querySelector('#monster-weaknesses').innerText += ' ' + element.element);
            document.querySelector('button').innerText = 'Get Another Monster'

            if (!data[arrayNumber].elements[0]) {
                document.querySelector('#monster-elements').innerText = 'No Elemental Damage'
            }
            if (!data[arrayNumber].elements[0]) {
                document.querySelector('#monster-ailments').innerText = 'No Ailments'
            }

        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}

