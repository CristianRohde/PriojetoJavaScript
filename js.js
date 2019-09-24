function trocar(obj1, obj2, obj3){ // faz a troca formulario, o objeto que recever primeiro vai ser visualizado, os outros ficam ocultos
    obj1.style.display = "block";
    obj2.style.display = "none";
    obj3.style.display = "none";
}
//----------------------------------------------------------------------------Aluno-----------------------------------------------------------------------

function CadastrarAluno(){
    //Salvando Dados Alunos em Variaveis
    var nomeDigitado = document.getElementById("nomeAluno").value;
    var mailDigitado = document.getElementById("emailAluno").value;
    var telefoneDigitado = document.getElementById("telefoneAluno").value;
    var nascDigitado = document.getElementById("nascAluno").value;
    expresionMail = /\w+@\w+\.+[a-z]/; 
    expresaoNomeA = /[0-9]/;
    
    //Validando campos vazios
    if(nomeDigitado.length == "" || nomeDigitado.length < 4 || expresaoNomeA.test(nomeDigitado)){
        alert("Favor Preencha Corretamente o Nome Completo!")
    }else{
        if(mailDigitado.length == "" ){
            alert("Favor Preencha Corretamente o E-Mail!")
        }else{
            if(!expresionMail.test(mailDigitado)){
                alert("Favor Preencha Corretamente o E-Mail!")
            }else if(telefoneDigitado == ""){
                alert("Favor Preencha Corretamente o Telefone!")
            }else{
                if(nascDigitado == ""){
                    alert("Favor Preencha Corretamente o Nascimento!")
                }else{
                       // Criando Construtor Aluno
                    function Aluno(nome,mail,telefone,nasc){
                        this.nome=nome;
                        this.mail=mail;
                        this.telefone=telefone;
                        this.nasc=nasc;
                    }
                    //Criando novo objeto global, e passamos os parametros 
                    novoAluno = new Aluno(nomeDigitado,mailDigitado,telefoneDigitado,nascDigitado);

                    //executamos a function para salvar em arrays 
                    acrescentarAluno();
                    alert("Cadastrado");
                }           
            }
        }
    }
}
 
//salvando em array como objeto
var dadosAluno=[]; 
function acrescentarAluno(){
    dadosAluno.push(novoAluno);
    document.getElementById("tablaA").innerHTML += ' <tbody><td>'+novoAluno.nome+'</td><td>'+novoAluno.mail+
    '</td><td>'+novoAluno.telefone+'</td><td>'+novoAluno.nasc+'</td></tbody> ';
    
    document.getElementById("nomeAluno").value="";
    document.getElementById("emailAluno").value="";
    document.getElementById("telefoneAluno").value="";
    document.getElementById("nascAluno").value="";

}

// Mostrar/Oculta os Cadastros de Alunos já Feitos
function ConsultarAluno(){
    if(document.getElementById('dadosAlunos').style.display == 'block'){
        document.getElementById('dadosAlunos').style.display= 'none'
    }else{
        document.getElementById('dadosAlunos').style.display= 'block'
    }
}
//---------------------------------------------------------------------------Funcionarios----------------------------------------------------------------------

function CadastrarFuncionario(){
    //Salvando Dados Funcionario em Variaveis
    var nomeDigitado = document.getElementById("nomef").value;
    var cpfDigitado = document.getElementById("cpff").value;
    var setorDigitado = document.getElementById("Setorf").value;
    espresaoNomeF = /[0-9]/;
    expresionCPF = /[a-z]/; 
 
    //Valdando campos vazios
    if(nomeDigitado.length == "" || nomeDigitado.length < 4 || espresaoNomeF.test(nomeDigitado)){
        alert("Favor Preencha Corretamente o Nome Completo!")
    }else{
        if(cpfDigitado.length == "" || expresionCPF.test(cpfDigitado)|| cpfDigitado.value <11 ){
            alert("Favor Preencha Corretamente o CPF!")
        }else{
            if(setorDigitado.length == ""){
                alert("Favor Preencha Corretamente o Setor!")
            }else{
                // Criando Construtor Funcionario
                function Funcionario(nome,cpf,setor){
                    this.nome=nome;
                    this.cpf=cpf;
                    this.setor=setor;
                }
 
                //Criando novo objeto global, e passamos os parametros 
                novoFuncionario = new Funcionario(nomeDigitado,cpfDigitado,setorDigitado);
 
                //executamos a function para salvar em arrays 
                acrescentarFuncionario();
                alert("Cadastrado")
            }
        }
    }
}

//salvando em array como objeto
var dadosFuncionario=[]; 
function acrescentarFuncionario(){
    dadosAluno.push(dadosFuncionario);
    document.getElementById("tablaF").innerHTML += ' <tbody><td>'+novoFuncionario.nome+'</td><td>'+novoFuncionario.cpf+
    '</td><td>'+novoFuncionario.setor+'</td></tbody> ';
    document.getElementById("nomef").value="";
    document.getElementById("cpff").value="";
    document.getElementById("Setorf").value="";
}

// Mostrar/Oculta os Cadastros de Alunos já Feitos
function ConsultarFuncionario(){
    if(document.getElementById('dadosFuncionarios').style.display == 'block'){
        document.getElementById('dadosFuncionarios').style.display= 'none'
    }else{
        document.getElementById('dadosFuncionarios').style.display= 'block'
    }
}
//----------------------------------------------------------------------------Professor-----------------------------------------------------------------------
// Criando Construtor Professor
function CadastrarProfessor(){
    //Salvando Dados Funcionario em Variaveis
    var nomeDigitado = document.getElementById("nomeProfessor").value;
    var cpfDigitado = document.getElementById("cpfProfessor").value;
    var materiaDigitado = document.getElementById("MateriasProfessor").value;
    espresaoNomeP = /[0-9]/;
    expresionCPFprof = /[a-z]/; 

    //Valdando campos vazios
    if(nomeDigitado.length == "" || nomeDigitado.length < 4 || espresaoNomeP.test(nomeDigitado)){
        alert("Favor Preencha Corretamente o Nome!")
    }else if(cpfDigitado.length == "" || cpfDigitado.length < 11 || expresionCPFprof.test(cpfDigitado)){
        alert("Favor Preencha Corretamente o CPF!")
    }else if(materiaDigitado.length == ""){
        alert("Favor Preencha Corretamente a Materia!")
    }else{
        function Professor(nome,cpf,materia){
        this.nome=nome;
        this.cpf=cpf;
        this.materia=materia;
    }
       //Criando novo objeto global, e passamos os parametros 
       novoProfessor = new Professor(nomeDigitado,cpfDigitado,materiaDigitado);
 
       //executamos a function para salvar em arrays 
       acrescentarProfessor();
       alert("Cadastrado")
    }

    
}

//salvando em array como objeto
var dadosProfessor=[]; 
function acrescentarProfessor(){
    dadosProfessor.push(dadosProfessor);
    document.getElementById("tablaP").innerHTML += ' <tbody><td>'+novoProfessor.nome+'</td><td>'+novoProfessor.cpf+
    '</td><td>'+novoProfessor.materia+'</td></tbody> ';
    document.getElementById("nomeProfessor").value="";
    document.getElementById("cpfProfessor").value="";
    document.getElementById("MateriasProfessor").value="";
}

// Mostrar/Oculta os Cadastros de Alunos já Feitos
function ConsultarProfessor(){
    if(document.getElementById('dadosProfessor').style.display == 'block'){
        document.getElementById('dadosProfessor').style.display= 'none'
    }else{
        document.getElementById('dadosProfessor').style.display= 'block'
    }
}