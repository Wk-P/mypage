<?php
static $user_data_array = array();

header("Content-Type: application/json; charset=UTF-8");
$user_data_set = json_decode($_POST['json'], true);
$user_data_array[] = $user_data_set;
echo("Successfully!");

?>