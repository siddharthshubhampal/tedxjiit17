<?php
require 'PHPMailer/PHPMailerAutoload.php';
$mail = new PHPMailer;
$mail->SMTPDebug;
$firstn=$_POST['firstname'];
$lastn=$_POST['lastname'];
$orname=$_POST['or_name'];
$des=$_POST['des'];
$email=$_POST['email'];
$no=$_POST['contact'];

 
$msg='First Name:-'.$firstn.'<br><br>'.'Last Name:-'.$lastn.' <br><br> '.'Organization Name:-'.$orname.' <br><br>'.'Desgination:-'.$des.'<br><br>'.'Contact Email:-'.$email.'<br><br> Contact Number:-'.$no;


$mail->isSMTP();                                    
$mail->Host = 'smtp.gmail.com';                       
$mail->SMTPAuth = true;                              
$mail->Username = '9914103225krishna@gmail.com';      
$mail->Password = 'krishna.singh12';             
$mail->Port = 25;                                    
$mail->setFrom('krishnansingh1995@gmail.com', 'krishna narayan singh');
$mail->addReplyTo($email,$firstn);     
$mail->addAddress('sponsor@tedxjiit.in', 'sponsor');  
$mail->WordWrap = 50;                                 
$mail->isHTML(true);                                  
$mail->Subject = 'sponsor';
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

 