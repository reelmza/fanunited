const searchText = document.querySelector('#searchBox')
const form = document.querySelector('form')
const alert = document.querySelector('#alert')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    // Split into two words and rerturn two arrays
    const getValue = searchText.value.toLowerCase()
    const playerName = getValue.split(" ")

    const firstName = "." + playerName[0] + 'S'
    const secondName = "." + playerName[1] + 'S'
    // console.log(firstName, secondName)

    const found1 = document.querySelector(firstName)
    const found2 = document.querySelector(secondName)
    // console.log(found1)

    if(found1 == undefined) {
        
        if(found2 == undefined) {
            
            alert.setAttribute('style', "display:block")
            // console.log('Name 2 Not Found')
        } else {
            found2.scrollIntoView(true)
            found2.setAttribute('style', 'background: #8effa6; font-weight:bold')
            alert.setAttribute('style', "display:none")

            setTimeout(()=> {
                found2.setAttribute('style','')
            }, 7000)
            // console.log('Name 2 Found')
        }

        
        // console.log('Name 1 not Found')

    } else {

        found1.scrollIntoView(true)
        found1.setAttribute('style', 'background: #8effa6; font-weight:bold')
        alert.setAttribute('style', "display:none")

        setTimeout(()=> {
            found1.setAttribute('style','')
        }, 7000)
        // console.log('Name 1 Found')
    }
})