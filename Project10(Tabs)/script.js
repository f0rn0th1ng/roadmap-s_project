let sign_num=1;
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