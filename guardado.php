<?php  
session_start(); 
include 'conexion.php';
conectarse();
$v1=$_POST['val1'];
$v2=$_POST['val2'];
$v3=$_POST['val3'];
$v4=$_POST['val4'];
$v5=$_POST['val5'];

$c1=$_POST['cal1'];
$c2=$_POST['cal2'];
$c3=$_POST['cal3'];
$c4=$_POST['cal4'];
$c5=$_POST['cal5'];
$id_ip="";

$consultatot="select id_sucursal from tbl_sucursal where ips_computador like'%".$_SERVER['REMOTE_ADDR']."%'";
//$consultatot="select id_sucursal from tbl_sucursal where ips_computador like'%190.152.90.0%'";
  $resultadotot=pg_query($consultatot) or die (pg_last_error());

  while($filatot=pg_fetch_array($resultadotot)){
  	$id_ip=$filatot[0];
  } 
pg_query("insert into tbl_encuesta(id_sucursal,fecha,p1,p2,p3,p4,p5,c1,c2,c3,c4,c5) values(".$id_ip.",date 'now()','".$v1."','".$v2."','".$v3."','".$v4."','".$v5."','".$c1."','".$c2."','".$c3."','".$c4."','".$c5."')");
echo "<div class='alert alert-success'><strong>✓</strong></div>";
?>