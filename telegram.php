<?php

/* https://api.telegram.org/bot5064368512:AAECq7gEWBIyMYOVBOpUCFzTl7u7k211z8k/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['lname'];
$mes = $_POST['messanger'];
$mesid = $_POST['id'];
$token = "5064368512:AAECq7gEWBIyMYOVBOpUCFzTl7u7k211z8k";
$chat_id = "-1001785310476";
$arr = array(
  'Называет себя: ' => $name,
  'Зовет нас в: ' => $mes,
  'Его ID там: ' => $mesid
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thank-you.html');
} else {
  echo "Error";
}
?>