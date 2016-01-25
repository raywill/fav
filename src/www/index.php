<!doctype html>
<html class="no-js" lang="">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>晓楚的收藏夹</title>
  <meta name="description" content="晓楚觉得很优秀的资源，不断增加中。">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="favicon.ico" rel="shortcut icon">
  <link rel="stylesheet" type="text/css" href="main.css">
  <link rel="stylesheet" href="http://cdn.amazeui.org/amazeui/2.5.0/css/amazeui.min.css"/>

</head>

<body>
<script>
var gFavList = JSON.parse('<?php
  $filename = "./data.json";
  // make it one line json string
  $json_string = file_get_contents($filename);
  $jsonObj = json_decode($json_string, true);
  $jsonObj = array_reverse($jsonObj);
  $json_string = json_encode($jsonObj);
  echo $json_string;
?>');
</script>
  <div id="app"></div>
  <script src="app.js"></script>
</body>

</html>
