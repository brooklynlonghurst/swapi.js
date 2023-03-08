let residents = document.querySelector('button')
const baseURL = 'https://swapi.dev/api/'

function buttonClick(){
    axios.get('https://swapi.dev/api/planets/2').then(res => {
        let links = res.data["residents"]
        for(let i = 0; i < links.length; i++){
            axios.get(links[i]).then(res => {
                let name = res.data["name"]
                let nameTxt =  document.createElement('h2')
                nameTxt.innerText = name
                document.body.appendChild(nameTxt)
            })
        }
        
    })
}

residents.addEventListener('click', buttonClick)
