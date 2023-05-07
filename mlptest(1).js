function start(){
document.getElementById('mlp').style.display="block";
document.getElementById('start').style.display="none";
}

function coreSum()
{
	var cores=0;
	var qestions=document.getElementsByClassName("question")
	for(var i=0;i<qestions.length;i++)
	{
		var count=0;
		var flag=1;
		var answer=document.getElementsByName("answer"+(i+1));
		for(var j=0;j<answer.length;j++)
		{
			if(answer[j].checked)
			{
				if(answer[j].value*1<0)
				{
					flag=0;
					break;
				}
				else
					count+=answer[j].value*1;
			}
		}
		if(flag==1)
			cores+=count;
	}
	alert("Your score is "+cores);
	document.getElementById('mlpend').style.display="block";
}

function wrongAnsewer()
{
	var qestions=document.getElementsByClassName("question")
	for(var i=0;i<qestions.length;i++)
	{
		var answer=document.getElementsByName("answer"+(i+1));
		for(var j=0;j<answer.length;j++)
		{
			if(answer[j].checked)
			{
				if(answer[j].value*1<=0)
				{
					x=document.getElementById(i+1);
					x.style.color="red";
				}
			}
		}
	}
	for(var i=0;i<qestions.length;i++)
		{
			var answer=document.getElementsByName("answer"+(i+1));
			for(var j=0;j<answer.length;j++)
			{
				if(!answer[j].checked)
				{
					if(answer[j].value*1>0)
					{
						answer[j].style.backgroundColor="red";
					}
				}
			}
		}
}
