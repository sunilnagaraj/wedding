<?php
if ($_POST) {
    $name  = $_POST['name'];
    $number = $_POST['number'];
	$emailAddr = $_POST['emailAddr'];
	$numOfGuests = $_POST['numOfGuests'];
	$guestsNames = $_POST['guestsNames'];
	$mailAddr = $_POST['mailAddr'];
	$number = $_POST['number'];	
    $text  = $_POST['text'];
    $radio  = $_POST['radio'];

    
    $headers = "Name: " . $name . "\r\n\r\nEmail: ". $emailAddr . "\r\n\r\nAttending: ". $radio . "\r\n\r\nNumber of Guests: ". $numOfGuests . "\r\n\r\nNames of Guests: \r\n". $guestsNames . "\r\n\r\nMailing Address: \r\n ". $mailAddr . "\r\n\r\nPhone Number: ". $number  ."\r\n\r\n Message: \r\n". $text;
    
    //send email   
    mail("sunil+rsvp@sunilnagaraj.com", "Wedding RSVP from ". $name, $headers, $name);
}

?>	