btn.onclick = ()=>{
    let password = "";
    let characterList = "";
    let inputsFileds = document.querySelectorAll('input')
    if(inputsFileds[2].checked){
        characterList += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if(inputsFileds[3].checked){
        characterList += "abcdefghijklmnopqrstuvwxyz";
    }
    if(inputsFileds[4].checked){
        characterList += "~`@#$%^&*()_-+=}]{[|?/.>,<";
    }
    if(inputsFileds[5].checked){
        characterList += "0123456789";
    }
    let passwordLength = inputsFileds[1].value;
    
    for(let i=1; i<=passwordLength; i++){
        password += characterList.charAt(Math.floor(Math.random()*characterList.length));
    }
    inputsFileds[0].value = password;

    copyPassword.onclick = ()=>{
        inputsFileds[0].select();
        document.execCommand("copy");
    }
}