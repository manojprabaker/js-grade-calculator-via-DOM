






let cnt=document.getElementById("container");
function createInput(clsName)
{
	let ele=document.createElement("input");
	ele.setAttribute("type","text");
	cnt.appendChild(ele);
	ele.setAttribute("class",clsName);
	
}

let crtBtn=document.getElementById("create");
create.addEventListener("click",function(){
	
	createInput("maths");
	createInput("english");
	createInput("science");
	createInput("cs");
	createInput("tamil");
	createInput("total");
	createInput("average");
	
	
	
	
})

let avgBtn=document.getElementById("avg");
avgBtn.addEventListener("click",function(){
	
	let m=parseInt(document.getElementsByClassName("maths")[0].value);
	let e=parseInt(document.getElementsByClassName("english")[0].value);
	let s=parseInt(document.getElementsByClassName("science")[0].value);
	let c=parseInt(document.getElementsByClassName("cs")[0].value);
	let t=parseInt(document.getElementsByClassName("tamil")[0].value);
	
	total=m+e+s+c+t;
	
	let totEle=document.getElementsByClassName("total")[0];
	totEle.value=total;
	// console.log(totEle)
	
	let avgEle=document.getElementsByClassName("average")[0];
	avgEle.value=(total/5);
	
	let aV=(total/5);
	let res=document.getElementById("result");
	// console.log(averageValue);
	
	if(aV>=90)
	{
		res.innerText="You Got O Grade";
	}
	else if(aV>=80 && aV<=89)
	{
		res.innerText="You Got A Grade";
	}
	else if(aV>=70 && aV<=79)
	{
		res.innerText="You Got B Grade";
	}
	else if(aV>=60 && aV<=69)
	{
		res.innerText="You Got C Grade";
	}
	else if(aV>=50 && aV<=59)
	{
		res.innerText="You Got C Grade";
	}
	else{
		res.innerText="You are Unfit";
	}
	
})