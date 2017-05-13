<?php  
session_start(); 
include 'conexion.php';
conectarse();
$dni=$_POST['ci'];

$consultatot="select razon_social from tbl_cliente where ruc='".$dni."'";
//$consultatot="select id_sucursal from tbl_sucursal where ips_computador like'%190.152.90.0%'";
  $resultadotot=pg_query($consultatot) or die (pg_last_error());

if(pg_num_rows($resultadotot)==0){

echo '<div class="alert alert-danger">Cedula mal ingresada o Usted no es cliente.</div>';

}
else{
  echo '<iframe width="100%" height="1300px" src="http://190.152.90.95/encuesta/encuestaman.html" frameborder="no" ></iframe>';
}
?>