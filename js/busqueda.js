function datosguardados(v1, v2, v3, v4, v5, c1, c2, c3, c4, c5)
{

var xmlhttp;
var va1=v1;
var va2=v2;
var va3=v3;
var va4=v4;
var va5=v5;

var ca1=c1;
var ca2=c2;
var ca3=c3;
var ca4=c4;
var ca5=c5;

if (window.XMLHttpRequest)
{// code for IE7+, Firefox, Chrome, Opera, Safari
xmlhttp=new XMLHttpRequest();
}
else
{// code for IE6, IE5
xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}
xmlhttp.onreadystatechange=function()
{
	if (xmlhttp.readyState==4 && xmlhttp.status==200)
	{
		document.getElementById("guardad").innerHTML=xmlhttp.responseText;
	}
}
for (var i = 0; i < 1; i++) {
	xmlhttp.open("POST","guardado.php",true);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send("val1="+va1+"&val2="+va2+"&val3="+va3+"&val4="+va4+"&val5="+va5+"&cal1="+ca1+"&cal2="+ca2+"&cal3="+ca3+"&cal4="+ca4+"&cal5="+ca5);
};

}

function consulta(ci)
{

var dni=ci;

if (window.XMLHttpRequest)
{// code for IE7+, Firefox, Chrome, Opera, Safari
xmlhttp=new XMLHttpRequest();
}
else
{// code for IE6, IE5
xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}
xmlhttp.onreadystatechange=function()
{
	if (xmlhttp.readyState==4 && xmlhttp.status==200)
	{
		document.getElementById("encuesta").innerHTML=xmlhttp.responseText;
	}
}
for (var i = 0; i < 1; i++) {
	xmlhttp.open("POST","consult.php",true);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send("ci="+dni);
};

}

