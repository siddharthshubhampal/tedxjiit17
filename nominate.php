<?php
require 'PHPMailer/PHPMailerAutoload.php';
$mail = new PHPMailer;
$mail->SMTPDebug;
$firstn=$_POST['firstname'];
$lastn=$_POST['lastname'];
$email=$_POST['email'];
$no=$_POST['contact'];

$nomname=$_POST['name_nom'];
$nommail=$_POST['email_nom'];
$nomno=$_POST['contact_nom'];
$nomcity=$_POST['city_nom'];
$nomcountry=$_POST['country_nom'];
$nomgender=$_POST['gender_nom'];
$brief=$_POST['brief_nom'];
$talk=$_POST['talk_nom'];
$choice='';
foreach($_POST['checkbox-list-row'] as $value)
{
  $choice=$choice.'--'.$value;
}
$before=$_POST['before_nom'];
$vlink=$_POST['vlinks_nom'];
$alinks=$_POST['alinks_nom'];
$know=$_POST['know_nom'];
 
$msg='<center>PERSON WHO HAS NOMIATED</center> <br>First Name:-'.$firstn.'<br><br>'.'Last Name:-'.$lastn.' <br><br> '.'Contact Email:-'.$email.'<br><br>Contact Number:-'.$no.'<br><br><center>NOMIATED PERSON DETAIL</center><br><br>Nominee Name:-'.$nomname.'<br><br>Nominee Email:-'.$nommail.'<br><br>Nominee No.:-'.$nomno.'<br><br>Nominee City:-'.$nomcity.'<br><br>Nominee Country:-'.$nomcountry.'<br><br>Nominee Gender:-'.$nomgender.'<br><br>Brief about speaker:-'.$brief.'<br><br>About talk:-'.$talk.'<br><br>Catogory:-'.$choice.'<br><br>Spoken Publicly:-'.$before.'<br><br>Online video and audo link:-'.$vlink.'<br><br>Article Link:-'.$alinks.'<br><br>Personal contact:-'.$know;


$mail->isSMTP();                                    
$mail->Host = 'smtp.gmail.com';                       
$mail->SMTPAuth = true;                              
$mail->Username = '9914103225krishna@gmail.com';      
$mail->Password = 'krishna.singh12';             
$mail->Port = 25;                                    
$mail->setFrom('krishnansingh1995@gmail.com', 'krishna narayan singh');  
$mail->addReplyTo($email,$firstn);   
$mail->addAddress('speakers@tedxjiit.in', 'nominated');  
$mail->WordWrap = 50;                                 
$mail->isHTML(true);                                  
$mail->Subject = 'nominate';
$mail->Body    = $msg;
if(!$mail->send()) {
   echo 'Message could not be sent.';
   echo 'Mailer Error: ' . $mail->ErrorInfo;
   exit;
}
header("refresh:1; url=https://tedxjiit.in/index.html"); 
  echo '<script> alert("Message send our team will contact you.");</script>';
  exit();
  ?>