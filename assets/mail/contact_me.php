<?php
// Check for empty fields
if(empty($_POST['name'])      ||
   empty($_POST['email'])     ||
   empty($_POST['phone'])     ||
   empty($_POST['message'])   ||
   empty($_POST['adress'])      ||
   empty($_POST['moving'])      ||
   empty($_POST['Postal'])      ||
   empty($_POST['CT_Main_0_ctl16_drpValue'])      ||
   empty($_POST['City'])      ||
   empty($_POST['CT_Main_0_ctl10_drpValue'])      ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
   echo "No arguments Provided!";
   return false;
   }
   
$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$message = strip_tags(htmlspecialchars($_POST['message']));
$adress = strip_tags(htmlspecialchars($_POST['adress']));
$moving = strip_tags(htmlspecialchars($_POST['moving']));
$Postal = strip_tags(htmlspecialchars($_POST['Postal']));
$CT_Main_0_ctl16_drpValue = strip_tags(htmlspecialchars($_POST['CT_Main_0_ctl16_drpValue']));
$City = strip_tags(htmlspecialchars($_POST['City']));
$CT_Main_0_ctl10_drpValue = strip_tags(htmlspecialchars($_POST['phone']));   


// Create the email and send the message
$to = 'info@kangmoving.com'; // Add your email address in between the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Website Contact Form:  $name";
$email_body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nPhone: $phone\n\nMessage:\n$message\n\nAdress: $adress\n\nMoving: $moving\n\nPostal: $Postal\n\nCT_Main_0_ctl16_drpValue: $CT_Main_0_ctl16_drpValue\n\nCity: $City\n\nCT_Main_0_ctl10_drpValue: $CT_Main_0_ctl10_drpValue";
$headers = "From: noreply@yourdomain.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";   
mail($to,$email_subject,$email_body,$headers);
return true;         
?>