<?php
    header('Content-type: application/json');
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    $request = json_decode(file_get_contents("php://input"));
    $to_email = "mark.alex.smith@hotmail.co.uk";

    $name = $request->name;
    $email = $request->emailAddress;
    $number = $request->telephoneNumber;
    $number = $request->telephoneNumber;
    $message = $request->message;

    $to = "mark.alex.smith@hotmail.co.uk";
    $body= "";

    $body .= "From: ".$name."\r\n";
    $body .= "Subject: ".$subject."\r\n";
    $body .= "Email: ".$email."\r\n";
    $body .= "Number: ".$number."\r\n";
    $body .= "Message: ".$message."\r\n";

    mail($to, $subject, $body);
?>