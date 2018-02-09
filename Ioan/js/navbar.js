window.onload = function getMenu() {
    fetch('http://localhost:3000/JohnnyMenu')
        .then((res) => res.json())
        .then((data) => {           
            console.log(data)
            let output = '';
            for (let i = 0; i < data.length; i++) {

                output += `                                            
                <a href="${data[i].url}" target="_blank" id="${data[i].id}" >
                    ${data[i].name}
                </a>                    
                `;

                if (data[i].children && data[i].children.length > 0) {

                    console.log(data[i].children)
                    var subMenu = '<ul id="subMenu">';

                    for (let y = 0; y < data[i].children.length; y++) {
                        subMenu += `
                            <li><a href="` + data[i].children[y].url + `">
                                ${data[i].children[y].name}                            
                            </a></li>
                            `
                    }
                    subMenu += '</ul>';

                    console.log(data[i].id);                   
                                                     
                } 

            }

            var dropdown = document.createElement('div');
            dropdown.innerHTML = subMenu;
            document.getElementById('output').innerHTML = output;
            document.getElementById(data[4].id).appendChild(dropdown);
            
        })
}
