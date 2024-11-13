const all_question=10;
let num_now=0;

document.addEventListener("DOMContentLoaded", function(){
    const width_percentage = (num_now/all_question)*100;
    document.getElementById("progress_bar").style.width = width_percentage+"%";
    update_progress(num_now);
})

function update_progress(num){
    const width_percentage = (num/all_question)*100;
    document.getElementById("progress").innerHTML = `${width_percentage}%`;
    document.getElementById("progress_text").innerHTML = `${num} of ${all_question}`;
}

function show_question_or_answer(num){
    if(num>0){
        if(document.getElementById(`q${num}`).classList.contains("fade")){
            document.getElementById(`q${num}`).classList.remove("fade");
            document.getElementById(`q${num}`).classList.add("show");
            document.getElementById(`a${num}`).classList.remove("show");
            document.getElementById(`a${num}`).classList.add("fade");
            document.getElementById("show_answer_btn").innerHTML="Show Answer"
        }
        else{
            document.getElementById(`q${num}`).classList.remove("show");
            document.getElementById(`q${num}`).classList.add("fade");
            document.getElementById(`a${num}`).classList.remove("fade");
            document.getElementById(`a${num}`).classList.add("show");
            document.getElementById("show_answer_btn").innerHTML="Show Question"
        }
    }
}

document.getElementById("previous_btn").addEventListener("click", function(){
    num_now--;
    const num=num_now+1;
    if(num_now<0){
        num_now=0;
        // show_question_or_answer(num_now);
        const width_percentage = (num_now/all_question)*100;
        document.getElementById("progress_bar").style.width = width_percentage+"%";
    }
    else{
        if(num!=11){
            document.getElementById(`q${num}`).classList.remove("show");
            document.getElementById(`q${num}`).classList.add("fade");
            document.getElementById(`a${num}`).classList.remove("show");
            document.getElementById(`a${num}`).classList.add("fade");
        }
        show_question_or_answer(num_now);
        const width_percentage = (num_now/all_question)*100;
        document.getElementById("progress_bar").style.width = width_percentage+"%";
    }
    update_progress(num_now);
})

document.getElementById("next_btn").addEventListener("click", function(){
    num_now++;
    const num=num_now-1;
    if(num_now>10){
        num_now=10;
        // show_question_or_answer(num_now);
        const width_percentage = (num_now/all_question)*100;
        document.getElementById("progress_bar").style.width = width_percentage+"%";
    }
    else{
        if(num!=0){
            document.getElementById(`q${num}`).classList.remove("show");
            document.getElementById(`q${num}`).classList.add("fade");
            document.getElementById(`a${num}`).classList.remove("show");
            document.getElementById(`a${num}`).classList.add("fade");
        }
        show_question_or_answer(num_now);
        const width_percentage = (num_now/all_question)*100;
        document.getElementById("progress_bar").style.width = width_percentage+"%";
    }
    update_progress(num_now);
})

document.getElementById("show_answer_btn").addEventListener("click", function(){
    show_question_or_answer(num_now);
})