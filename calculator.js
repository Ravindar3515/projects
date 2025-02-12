function calculator(a){
    let b=a.value
     let valueBefore=document.getElementById("display").value
      let valueafter=valueBefore+b
      document.getElementById("display").value=valueafter
    }
    function remove(){
        document.getElementById("display").value=""
    }
    function evl(){
        document.getElementById("display")
        .value=eval(document.getElementById("display").value)
    }