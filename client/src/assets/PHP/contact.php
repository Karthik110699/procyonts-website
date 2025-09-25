<?php

  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Methods: POST, DELETE, OPTIONS");
  header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
  // Replace contact@example.com with your real receiving email address
  $receiving_email_address = 'hello@procyonts.com';

  if( file_exists($php_email_form = './php-email-form.php' )) {
    include( $php_email_form );
  } else {
    die( 'Unable to load the "PHP Email Form" Library!');
  }

  $contact = new PHP_Email_Form;
  $contact->ajax = true;
  
  $contact->to = $receiving_email_address;
  $contact->from_name = $_POST['firstName'] . ' ' . $_POST['lastName'];
  $contact->from_email = $_POST['email'];
  $contact->subject = $_POST['subject'] ? $_POST['subject'] : 'Contact Form Message';

  // Uncomment below code if you want to use SMTP to send emails. You need to enter your correct SMTP credentials
  /*
  $contact->smtp = array(
    'host' => 'example.com',
    'username' => 'example',
    'password' => 'pass',
    'port' => '587'
  );
  */

  $contact->add_message( $_POST['firstName'] . ' ' . $_POST['lastName'], 'Name');
  $contact->add_message( $_POST['email'], 'Email');
  if( $_POST['company'] ) {
    $contact->add_message( $_POST['company'], 'Company');
  }
  if( $_POST['phone'] ) {
    $contact->add_message( $_POST['phone'], 'Phone');
  }
  if( $_POST['subject'] ) {
    $contact->add_message( $_POST['subject'], 'Subject');
  }
  $contact->add_message( $_POST['message'], 'Message', 10);


  echo $contact->send();
?>