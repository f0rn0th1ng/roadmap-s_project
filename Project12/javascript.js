document.getElementById("input").addEventListener("input", function() {
const currentLength = this.value.length;
const maxLength = this.getAttribute("maxlength");
const where_to_change=document.getElementById("count");
where_to_change.innerHTML=`${currentLength} / ${maxLength}`;
});