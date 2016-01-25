<?php

const SUCCESS = 1;
const FAILURE = 2;

$postdata = file_get_contents("php://input");
$_POST = json_decode($postdata, true);

$result = array('rc'=>FAILURE, 'msg'=>'密码错误');

if ($_POST['passwd'] != 'zhimakaimenba') {
  $result['msg'] = '密码错误:' . $_POST['passwd'];
} else if (empty($_POST['brief']) ||
  empty($_POST['href']) ||
  empty($_POST['title'])) {
  $result['msg'] = '填写的内容均不可为空';
} else {

  $imgTypes = array("abstract","animals","business",
    "cats","city","food",
    "night","life","fashion",
    "people","nature","sports",
    "technics","transport");
  $imgType = $imgTypes[array_rand($imgTypes)];
  $newItem = array(
    'title'=>$_POST['title'],
    'subtitle'=>'',
    'thumb'=>"http://lorempixel.com/300/200/{$imgType}",
    'href'=>$_POST['href'],
    'brief'=>$_POST['brief'],
    'tags'=>'');

  $filename = "./data.json";
  $json_string = file_get_contents($filename);
  $jsonObj = json_decode($json_string, true);

  $exist = false;
  foreach ($jsonObj as $obj) {
    if ($obj['href'] == $newItem['href']) {
      $exist = true;
      break;
    }
  }

  if (false == $exist) {
    $jsonObj[] = $newItem;
    $json_string = json_encode($jsonObj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    $ret = file_put_contents($filename, $json_string);
    if ($ret === FALSE) {
      $result['msg'] = '保存数据失败';
    } else {
      $result['rc'] = SUCCESS;
      $result['msg'] = '保存成功';
    }
  } else {
      $result['msg'] = '已经在收藏夹中了';
  }
}
echo json_encode($result);

