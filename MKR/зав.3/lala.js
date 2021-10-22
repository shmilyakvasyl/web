var num = 1;
document.getElementById('add').addEventListener("click",addInput);

function addInput(){
var demo = document.getElementById('demo');
demo.insertAdjacentHTML('beforeend','<div class="form-holder" style="width: 30%;"><a class="form-label">Billet type</a> <br><select name="ttype'+num+'"><option value="normal">Standard Billet</option><option value="add-on">Tilkøbs Billet</option></select></div><div class="form-holder" style="width: 31%; margin-left: 0.6%;"><a class="form-label">Billet navn</a> <br><input name="tname'+num+'" type="text" placeholder="F.eks. Entré Billet" style="width: 100%;" /></div><div class="form-holder" style="float: right; width: 18%; margin-left: 1%;"><a class="form-label">Antal</a> <br><input name="tquan'+num+'" type="text" placeholder="F.eks. 500" style="width: 100%;" /></div><div class="form-holder" style="float: right; width: 18%;"><a class="form-label">Pris (DKK)</a> <br><input name="tprice'+num+'" type="text" placeholder="F.eks. 100" style="width: 100%;" /></div> <br>');
 num++;
}