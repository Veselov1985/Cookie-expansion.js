# Cookie-expansion.js


$$.check() -checks included cookies or not (browser support)  return true or false;


$$.set(name,value,{}) -set Cookie
description:

name- name cookie(string);

value - value cookie (string or {} or []);

{} - additional settings object:

expires: - time the existence of Cookie (number(sec) or  Data in  UTC );
path: -way for cookie(string);

domain: - domian for cookie(string);

secure - true(https) or false(http)



$$.get("test") - get value cookie  With name "test";
$$.delete("test")-delete cookie with name ""test;
$$.deleteAll()-delete All cookie;
