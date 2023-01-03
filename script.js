window.addEventListener('load',()=>{
    const player1 = Math.floor(Math.random() * 6) + 1;
    const player2 = Math.floor(Math.random() * 6) + 1;
    const cells1 = document.querySelectorAll(".cell-p1");
    const cells2 = document.querySelectorAll('.cell-p2');

    console.log(player1.toString());
  
   
    switch(player1.toString()){
        case '1':
            cells1.forEach((cell)=>{
                console.log(cell);
                if(cell.getAttribute('data-cell') !== '5'){ 
                    cell.classList.add('hidden');
                }else{
                    cell.classList.remove('hidden');
                    cell.classList.add('show');
                }
            })
        break;
        case '2':
            cells1.forEach((cell)=>{
                console.log(cell);
                if(cell.getAttribute('data-cell') == '1' || cell.getAttribute('data-cell') == '9'){ 
                    cell.classList.remove('hidden');
                    cell.classList.add('show');
                }else{
                    cell.classList.add('hidden');
                }
            })
            
        break;
        case '3':
            cells1.forEach((cell)=>{
                console.log(cell);
                if(cell.getAttribute('data-cell') == '1' || cell.getAttribute('data-cell') == '3' || cell.getAttribute('data-cell') == '9'){ 
                    cell.classList.remove('hidden');
                    cell.classList.add('show');
                }else{
                    cell.classList.add('hidden');
                }
            })
        break;
        case '4':
            cells1.forEach((cell)=>{
                console.log(cell);
                if(cell.getAttribute('data-cell') == '1' || cell.getAttribute('data-cell') == '3' || cell.getAttribute('data-cell') == '9' || cell.getAttribute('data-cell') == '7'){ 
                    cell.classList.remove('hidden');
                    cell.classList.add('show');
                }else{
                    cell.classList.add('hidden');
                }
            })
        break;
        case '5':
            cells1.forEach((cell)=>{
                console.log(cell);
                if(cell.getAttribute('data-cell') == '1' || cell.getAttribute('data-cell') == '3' || cell.getAttribute('data-cell') == '5' || cell.getAttribute('data-cell') == '7' || cell.getAttribute('data-cell') == '9'){ 
                    cell.classList.remove('hidden');
                    cell.classList.add('show');
                }else{
                    cell.classList.add('hidden');
                }
            })
        break;
        case '6':
            cells1.forEach((cell)=>{
                console.log(cell);
                if(cell.getAttribute('data-cell') == '1' || cell.getAttribute('data-cell') == '3' || cell.getAttribute('data-cell') == '4' || cell.getAttribute('data-cell') == '6' || cell.getAttribute('data-cell') == '7' || cell.getAttribute('data-cell') == '9'){ 
                    cell.classList.remove('hidden');
                    cell.classList.add('show');
                }else{
                    cell.classList.add('hidden');
                }
            })
        break;

    }
    switch(player2.toString()){
        case '1':
            cells2.forEach((cell)=>{
                console.log(cell);
                if(cell.getAttribute('data-cell') !== '5'){ 
                    cell.classList.add('hidden');
                }else{
                    cell.classList.remove('hidden');
                    cell.classList.add('show');
                }
            })
        break;
        case '2':
            cells2.forEach((cell)=>{
                console.log(cell);
                if(cell.getAttribute('data-cell') == '1' || cell.getAttribute('data-cell') == '9'){ 
                    cell.classList.remove('hidden');
                    cell.classList.add('show');
                }else{
                    cell.classList.add('hidden');
                }
            })
            
        break;
        case '3':
            cells2.forEach((cell)=>{
                console.log(cell);
                if(cell.getAttribute('data-cell') == '1' || cell.getAttribute('data-cell') == '3' || cell.getAttribute('data-cell') == '9'){ 
                    cell.classList.remove('hidden');
                    cell.classList.add('show');
                }else{
                    cell.classList.add('hidden');
                }
            })
        break;
        case '4':
            cells2.forEach((cell)=>{
                console.log(cell);
                if(cell.getAttribute('data-cell') == '1' || cell.getAttribute('data-cell') == '3' || cell.getAttribute('data-cell') == '9' || cell.getAttribute('data-cell') == '7'){ 
                    cell.classList.remove('hidden');
                    cell.classList.add('show');
                }else{
                    cell.classList.add('hidden');
                }
            })
        break;
        case '5':
            cells2.forEach((cell)=>{
                console.log(cell);
                if(cell.getAttribute('data-cell') == '1' || cell.getAttribute('data-cell') == '3' || cell.getAttribute('data-cell') == '5' || cell.getAttribute('data-cell') == '7' || cell.getAttribute('data-cell') == '9'){ 
                    cell.classList.remove('hidden');
                    cell.classList.add('show');
                }else{
                    cell.classList.add('hidden');
                }
            })
        break;
        case '6':
            cells2.forEach((cell)=>{
                console.log(cell);
                if(cell.getAttribute('data-cell') == '1' || cell.getAttribute('data-cell') == '3' || cell.getAttribute('data-cell') == '4' || cell.getAttribute('data-cell') == '6' || cell.getAttribute('data-cell') == '7' || cell.getAttribute('data-cell') == '9'){ 
                    cell.classList.remove('hidden');
                    cell.classList.add('show');
                }else{
                    cell.classList.add('hidden');
                }
            })
        break;

    }
});