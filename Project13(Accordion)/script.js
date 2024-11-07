function show_answer(id_num){
    const number = id_num.match(/\d+/)[0];
    if(document.getElementById(`answer${number}`).style.display==="flex"){
        document.getElementById(`answer${number}`).style.display="none";
    }
    else{
        document.getElementById(`answer${number}`).style.display="flex";
    }
}