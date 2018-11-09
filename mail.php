<?php
require 'PHPMailer/PHPMailerAutoload.php';
$mail = new PHPMailer;
$mail->SMTPDebug;
$name=$_POST['txtName'];
$email=$_POST['txtEmail'];
$subject=$_POST['txtMessage'];
$no=$_POST['txtMobile'];

 
$msg='name:-'.$name.'<br><br>'.'message:-'.$subject.' <br><br> '.'contact no:-'.$no.' <br><br>'.'email:-'.$email;


$mail->isSMTP();                                    
$mail->Host = 'smtp.gmail.com';                       
$mail->SMTPAuth = true;                              
$mail->Username = '9914103225krishna@gmail.com';      
$mail->Password = 'krishna.singh12';             
$mail->Port = 25;                                    
$mail->setFrom('krishnansingh1995@gmail.com', 'krishna narayan singh'); 
$mail->addReplyTo($email,$name);    
$mail->addAddress('enquiry@tedxjiit.in', 'enquiry');  
$mail->WordWrap = 50;                                 
$mail->isHTML(true);                                  
$mail->Subject = 'enquiry';
$mail->Body    = $msg;
if(!$mail->send()) {
   header("refresh:3; url=https://tedxjiit.in/index.html"); 
   echo 'Message could not be sent.';
  
   //echo 'Mailer Error: ' . $mail->ErrorInfo;
   exit;
}
 header("refresh:1; url=https://tedxjiit.in/index.html"); 
  echo '<script> alert("Message send our team will contact you.");</script>';
  exit();
?>  
 