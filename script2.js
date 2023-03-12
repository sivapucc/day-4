var res=new XMLHttpRequest();
res.open('GET',"https://restcountries.com/v2/all");
res.send();
res.onload=function(){
    var result=JSON.parse(res.response);
    for(i=0;i<result.length;i++){
        console.log(result[i].name,result[i].region,result[i].subregion,result[i].population);
    }
}