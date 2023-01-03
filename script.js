window.addEventListener('load',()=>{
    
    const dice = document.getElementById('play');
    const editName = document.getElementById('editName');
    const player1Name = document.querySelector('.player1Name');
    const player2Name = document.querySelector('.player2Name');
    const winer = document.querySelector('.winer');
    function entername(){
        var p1name = window.prompt("Enter the First Player Name:");
       var p2name = window.prompt("Enter the Second Player Name:");
       player1Name.value = p1name;
       player2Name.value = p2name;
       document.querySelector('#pName1').innerHTML=toCamelCase(p1name);
       document.querySelector('#pName2').innerHTML=toCamelCase(p2name);
    }
    editName.addEventListener('click',()=>{
       entername();
    })

    dice.addEventListener('click',()=>{
   
        if(player1Name.value == "" || player2Name.value == ""){
            alert('Enter the Name of Players');
            entername();
        }
            const player1 = Math.floor(Math.random() * 6) + 1;
            const player2 = Math.floor(Math.random() * 6) + 1;
            const cells1 = document.querySelectorAll(".cell-p1");
            const cells2 = document.querySelectorAll('.cell-p2');
            var name1 = toCamelCase( player1Name.value);
            var name2 = toCamelCase(player2Name.value);

            console.log(player1)
            var winerstr = player1 === player2 ? `${name1} and ${name2} WINS` : player1 > player2 ? `${name1} WINS` : `${name2} WINS`;
            winer.classList.add('no-after');
            winer.innerHTML = winerstr;
            console.log(winerstr);
            switch(player1.toString()){
                case '1':
                    cells1.forEach((cell)=>{
                        // console.log(cell);
                        if(cell.getAttribute('data-cell') == '5'){ 
                            cell.classList.remove('hidden');
                            cell.classList.add('show');
                        }else{
                            cell.classList.add('hidden');
                            cell.classList.remove('show');
                        }
                    })
                break;
                case '2':
                    cells1.forEach((cell)=>{
                        //console.log(cell);
                        if(cell.getAttribute('data-cell') == '1' || cell.getAttribute('data-cell') == '9'){ 
                            cell.classList.remove('hidden');
                            cell.classList.add('show');
                        }else{
                            cell.classList.add('hidden');
                            cell.classList.remove('show');
                        }
                    })
                    
                break;
                case '3':
                    cells1.forEach((cell)=>{
                       // console.log(cell);
                        if(cell.getAttribute('data-cell') == '1' || cell.getAttribute('data-cell') == '3' || cell.getAttribute('data-cell') == '9'){ 
                            cell.classList.remove('hidden');
                            cell.classList.add('show');
                        }else{
                            cell.classList.add('hidden');
                            cell.classList.remove('show');
                        }
                    })
                break;
                case '4':
                    cells1.forEach((cell)=>{
                        //console.log(cell);
                        if(cell.getAttribute('data-cell') == '1' || cell.getAttribute('data-cell') == '3' || cell.getAttribute('data-cell') == '9' || cell.getAttribute('data-cell') == '7'){ 
                            cell.classList.remove('hidden');
                            cell.classList.add('show');
                        }else{
                            cell.classList.add('hidden');
                            cell.classList.remove('show');
                        }
                    })
                break;
                case '5':
                    cells1.forEach((cell)=>{
                       // console.log(cell);
                        if(cell.getAttribute('data-cell') == '1' || cell.getAttribute('data-cell') == '3' || cell.getAttribute('data-cell') == '5' || cell.getAttribute('data-cell') == '7' || cell.getAttribute('data-cell') == '9'){ 
                            cell.classList.remove('hidden');
                            cell.classList.add('show');
                        }else{
                            cell.classList.add('hidden');
                            cell.classList.remove('show');
                        }
                    })
                break;
                case '6':
                    cells1.forEach((cell)=>{
                        //console.log(cell);
                        if(cell.getAttribute('data-cell') == '1' || cell.getAttribute('data-cell') == '3' || cell.getAttribute('data-cell') == '4' || cell.getAttribute('data-cell') == '6' || cell.getAttribute('data-cell') == '7' || cell.getAttribute('data-cell') == '9'){ 
                            cell.classList.remove('hidden');
                            cell.classList.add('show');
                        }else{
                            cell.classList.add('hidden');
                            cell.classList.remove('show');
                        }
                    })
                break;
        
            }
            switch(player2.toString()){
                case '1':
                    cells2.forEach((cell)=>{
                       // console.log(cell);
                        if(cell.getAttribute('data-cell') == '5'){ 
                            cell.classList.remove('hidden');
                            cell.classList.add('show');
                        }else{
                            cell.classList.add('hidden');
                            cell.classList.remove('show');
                        }
                    })
                break;
                case '2':
                    cells2.forEach((cell)=>{
                       // console.log(cell);
                        if(cell.getAttribute('data-cell') == '1' || cell.getAttribute('data-cell') == '9'){ 
                            cell.classList.remove('hidden');
                            cell.classList.add('show');
                        }else{
                            cell.classList.add('hidden');
                            cell.classList.remove('show');
                        }
                    })
                    
                break;
                case '3':
                    cells2.forEach((cell)=>{
                       // console.log(cell);
                        if(cell.getAttribute('data-cell') == '1' || cell.getAttribute('data-cell') == '3' || cell.getAttribute('data-cell') == '9'){ 
                            cell.classList.remove('hidden');
                            cell.classList.add('show');
                        }else{
                            cell.classList.add('hidden');
                            cell.classList.remove('show');
                        }
                    })
                break;
                case '4':
                    cells2.forEach((cell)=>{
                        //console.log(cell);
                        if(cell.getAttribute('data-cell') == '1' || cell.getAttribute('data-cell') == '3' || cell.getAttribute('data-cell') == '9' || cell.getAttribute('data-cell') == '7'){ 
                            cell.classList.remove('hidden');
                            cell.classList.add('show');
                        }else{
                            cell.classList.add('hidden');
                            cell.classList.remove('show');
                        }
                    })
                break;
                case '5':
                    cells2.forEach((cell)=>{
                       // console.log(cell);
                        if(cell.getAttribute('data-cell') == '1' || cell.getAttribute('data-cell') == '3' || cell.getAttribute('data-cell') == '5' || cell.getAttribute('data-cell') == '7' || cell.getAttribute('data-cell') == '9'){ 
                            cell.classList.remove('hidden');
                            cell.classList.add('show');
                        }else{
                            cell.classList.add('hidden');
                            cell.classList.remove('show');
                        }
                    })
                break;
                case '6':
                    cells2.forEach((cell)=>{
                       // console.log(cell);
                        if(cell.getAttribute('data-cell') == '1' || cell.getAttribute('data-cell') == '3' || cell.getAttribute('data-cell') == '4' || cell.getAttribute('data-cell') == '6' || cell.getAttribute('data-cell') == '7' || cell.getAttribute('data-cell') == '9'){ 
                            cell.classList.remove('hidden');
                            cell.classList.add('show');
                        }else{
                            cell.classList.add('hidden');
                            cell.classList.remove('show');
                        }
                    })
                break;
        
            }
        
    })
});
function toCamelCase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}