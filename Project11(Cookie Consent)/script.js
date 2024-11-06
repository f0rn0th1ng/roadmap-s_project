let sign_num=1;

function test_need(){
    let info = localStorage.getItem("accept_cookies");
    if(info==="false"|| info === null){
        document.getElementById("cookie_card").style.display="block";
        document.getElementById("whole_container").classList.add("special_time");
    }
    else{
        document.getElementById("cookie_card").style.display="none";
        document.getElementById("whole_container").classList.remove("special_time");
    }
}   

document.addEventListener("DOMContentLoaded", function(){
    if (localStorage.getItem("accept_cookies") === null) {
        localStorage.setItem("accept_cookies", "false");
    }
    console.log(localStorage);
    test_need();
})

document.getElementById("btn_accept").addEventListener("click", function(){
    let info=JSON.parse(localStorage.getItem("accept_cookies"));
    info=true;
    localStorage.setItem("accept_cookies", info);
    console.log(localStorage);
    test_need();
})

document.getElementById("btn_x").addEventListener("click", function(){
    document.getElementById("cookie_card").style.display="none";
    document.getElementById("whole_container").classList.remove("special_time");
})

function change_table(id_num){
    document.getElementById(`content_for_table${sign_num}`).classList.remove("show");
    document.getElementById(`content_for_table${sign_num}`).classList.add("fade");
    setTimeout(function(){
        document.getElementById(`content_for_table${id_num}`).classList.remove("fade");
        document.getElementById(`content_for_table${id_num}`).classList.add("show");
    },400)
    sign_num=id_num;
}
document.getElementById("btn_for_table1").addEventListener("click", function(){
    change_table(1);
})

document.getElementById("btn_for_table2").addEventListener("click", function(){
    change_table(2);
})

document.getElementById("btn_for_table3").addEventListener("click", function(){
    change_table(3);
})

document.getElementById("btn_for_table4").addEventListener("click", function(){
    change_table(4);
})