<?php

    $recipient = "standerstian@gmail.com";
    $subject = $_POST["subject"];
    $name = $_POST["name"];
    $message = $_POST["message"];
    $email = $_POST["email"];
    $mailheader = "From:" . $name . "<" . $email . ">\r\n";
    $header .= "MIME-Version: 1.0\r\n";
    $header .= "Content-type: text/html\r\n";

    mail($recipient, $subject, $message, $mailheader);

    header("Location: index.html");
