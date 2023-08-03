<?php
//create server and database connection constants
$host = "localhost";
$user = "root";
$pwd = "";
$db = "hospital";

$con= new mysqli ($host, $user, $pwd, $db);

//Check server connection
if ($con->connect_error){
	die ("Connection failed:". $con->connect_error);
}else {
	echo "Connected successfully <br />";
}
//receive  values from user form and trim white spaces
$full_name = $_POST['Name'];
$gender = $_POST['Gender'];
$idno = $_POST['ID'];
$dob = $_POST['DOB'];
$phone = $_POST['Phone'];
$email = $_POST['Email'];
$status = $_POST['Marital_Status'];
$address = $_POST['Address'];
$county = $_POST['County'];

$kin_name = $_POST['Kin_Name'];
$kin_gender = $_POST['Kin_Gender'];
$kin_idno = $_POST['Kin_ID'];
$kin_dob = $_POST['Kin_DOB'];
$kin_phone = $_POST['Kin_Phone'];
$relationship = $_POST['Relationship'];

//now insert the received values into database using defined variables
$sqli ="INSERT INTO hospital.patients_details ('Name', Gender, ID, DOB, Phone, Email, Marital_Status, 'Address', County, 
Kin_Name, Kin_Gender, Kin_ID, Kin_DOB, Kin_Phone, Relationship) VALUES ('$full_name','$gender','$idno','$dob','$phone','$email','$status','$address''$county',
'$kin_name','$kin_gender','$kin_idno','$kin_dob,'$kin_phone','$relationship')";
if ($con->query($sqli) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sqli . "<br>" . $con->error;
}
$con->close(); //close the connection for security reasons
?>