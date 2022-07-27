<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
   header('Access-Control-Allow-Origin: *');
   header('Access-Control-Allow-Methods: GET, POST');
   header("Access-Control-Allow-Headers: X-Requested-With");
   $Name = htmlspecialchars($_REQUEST['Name']);
   $Phone = htmlspecialchars($_REQUEST['Phone']);
   $ClientEmail = htmlspecialchars($_REQUEST['ClientEmail']);
   $Activity = htmlspecialchars($_REQUEST['Activity']);
   if(!$_REQUEST['ClientEmail'] || $_REQUEST['ClientEmail'] == ""){
      $ClientEmail = "None";
   }
   if($Activity == "0"){
      $Activity = "None";
   }

   $from = "mirna@aznetsul.com";
   $to = "ahmad.adel.saad@gmail.com";

   $headers = "From:abc@somedomain.com \r\n";
   $headers = "Reply-To:abc@somedomain.com \r\n";
   $headers .= "MIME-Version: 1.0\r\n";
   $headers .= "Content-type: text/html\r\n";
    
    // Compose a simple HTML email message
    $message = 'Client:'.$Name."\r\n";
    $message .= 'Phone:'.$Phone."\r\n";
    $message .= 'Email:'.$ClientEmail."\r\n";
    $message .= 'Activity:'.$Activity."\r\n";


    $subject = "Website Needs";
      
   $Test = mail($to,$subject,$message,$headers);
   var_dump($Test);
}

?>
