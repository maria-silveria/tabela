var qtdAlunos = 3;
var qtdNotas = 4;
var i;
function desenhaTabela(){
    for(i = 1; i<= qtdAlunos; i++){
        let dadoAntigo = document.getElementById('tbody').innerHTML;
        document.getElementById('tbody').innerHTML = dadoAntigo + `<tr id="linha${i}">
                                                                        <th>${i}</th>
                                                                        <td><input type="text" class="form-control" id="nome${i}" placeholder="nome"></td>
                                                                        <td><input type="number" class="form-control" id="nota${i}1" min="0" max="100" placeholder=""></td>
                                                                        <td><input type="number" class="form-control" id="nota${i}2" min="0" max="100" placeholder=""></td>
                                                                        <td><input type="number" class="form-control" id="nota${i}3" min="0" max="100" placeholder=""></td>
                                                                        <td><input type="number" class="form-control" id="nota${i}4" min="0" max="100" placeholder=""></td>
                                                                        <td><output id="media${i}"></output></td>
                                                                        <td><output id="situacao${i}"></output></td>
                                                                        <td><button class="btn btn-danger btn-lg" onclick="removeLinha(this)">Remover Aluno</button></td>
                                                                    </tr>`
    }
}
var a = qtdAlunos
function addColuna(){
   a++
    for (let x = 1;  x <= qtdAlunos; x++) {

            let coluna = document.getElementById(`linha${x}`).innerHTML;
            let i = coluna.indexOf('<td><output id="media');
            coluna= coluna.substring(0,i);

            coluna  += `<td><input type="number" class="form-control" id="nota${x}${a}" min="0" max="100" placeholder=""></td>`;

            coluna += `<td><output id="media${x}"></output></td>
                       <td><output id="situacao${x}"></output></td>`;

            document.getElementById(`linha${x}`).innerHTML = coluna;    
    }

}
function addLinha(){
    qtdAlunos++;
    for(let j = i; j<= qtdAlunos; j++){
        let linhaVelha = document.getElementById('tbody').innerHTML;
        document.getElementById('tbody').innerHTML = linhaVelha + `<tr id="linha${j}">
                                                                        <th>${i}</th>
                                                                        <td><input type="text" class="form-control" id="nome${i}" placeholder="nome"></td>
                                                                        <td><input type="number" class="form-control" id="nota${i}1" min="0" max="100" placeholder=""></td>
                                                                        <td><input type="number" class="form-control" id="nota${i}2" min="0" max="100" placeholder=""></td>
                                                                        <td><input type="number" class="form-control" id="nota${i}3" min="0" max="100" placeholder=""></td>
                                                                        <td><input type="number" class="form-control" id="nota${i}4" min="0" max="100" placeholder=""></td>
                                                                        <td><output id="media${i}"></output></td>
                                                                        <td><output id="situacao${i}"></output></td>
                                                                        <td><button class="btn btn-danger btn-lg" onclick="removeLinha(this)">Remover Aluno</button></td>
                                                                    </tr>`
    }
    i++;
}
function removeLinha(linha){
    var linha = linha.parentNode.parentNode.rowIndex;
    let table = document.getElementById('myTable');
    table.deleteRow(linha);
    qtdAlunos--;
}


function calcularMedia(){
    var somaMedia = 0;
    for(let aluno = 1; aluno <= qtdAlunos; aluno++){
        let nota;
        let notaTotal = 0;

        for(let notas = 1; notas <= qtdNotas; notas++){
            nota = Number(document.getElementById(`nota${aluno}${notas}`).value);
            notaTotal += nota;
        }

        let media = (notaTotal)/4;
        somaMedia = media + somaMedia;
        let mediaGeral = somaMedia / aluno;
        document.getElementById('mediaGeral').innerText = "Média Geral: " + mediaGeral;
        document.getElementById(`media${aluno}`).innerText = media;

        if(media >= 50){
            document.getElementById(`situacao${aluno}`).innerText = 'Aprovado';
            document.getElementById(`situacao${aluno}`).style.backgroundColor = 'green'; 
       
        }else{
            if(media >= 45 && media < 50){
                document.getElementById(`situacao${aluno}`).innerText = 'Recuperação'; 
                document.getElementById(`situacao${aluno}`).style.backgroundColor = 'yellow'; 
            }else{
                if(media < 45){
                    document.getElementById(`situacao${aluno}`).innerText = 'Reprovado';
                    document.getElementById(`situacao${aluno}`).style.backgroundColor = 'red'; 
                }
            }  
        }
    } 
}

