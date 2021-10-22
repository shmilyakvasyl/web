function W()
{
    let word = document.getElementById("words").value;
    let b = word.split(" ");
   
    let c=0;
    for(let i = 0; i < b.length; i++)
    {
       let a = b[i].split();
      
       if(a[0] == a[a.length - 1])
       {
           c++;
       }
        
    }
    alert(c);
}

