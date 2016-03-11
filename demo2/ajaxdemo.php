<?php
$a=array("人","人生","Anna","Brittany","Cinderella","Diana","Eva","Fiona","Gunda","Hege","Inga","Johanna"
,"Kitty","Linda","Nina","Ophelia","Petunia","Amanda","Raquel","Cindy","Doris","Eve"
,"Evita","Sunniva","Tove","Unni","Violet","Liza","Elizabeth","Ellen","Wenche","Vicky","人生在于奋斗","赵薇","赵永卫","赵珂","php","python","html","xhtml");//创建新数组作为搜索的数据库
$q=$_GET["qqq"];//以get方式得到传来的数据，qqq为"ajaxdemo.php?qqq+str"中传来的值.
if (strlen($q)>0)
  {
    $data="";
  for($i=0;$i<sizeof($a);$i++)
    {
    if (strtolower($q)==strtolower(substr($a[$i],0,strlen($q))))//判断值是否和数据库中数据匹配，匹配的话就获取该数据
      {
      if ($data=="")
        {
        $data=$a[$i];
        }
      else
        {
        $data=$data.",".$a[$i];
        }
      }
    }
  }
if ($data == "")//没有匹配上
  {
   $response="查不到数据";
  }
else
  {
  $response=$data;
  }
$str = explode(",",$response);
$length=sizeof($str);
for($j=0;$j<$length;$j++){
echo <<< ETO
    <p onclick="get$j()">$str[$j]</p>
ETO;
}
?>
