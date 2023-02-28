
function generatePassword(length,charset) {
  // var length = 8,
      // charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      var retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}
function userPrompt() {
var userlenth=parseInt(prompt('lenth'))
console.log (typeof userlenth,userlenth)
if (8<=userlenth&&userlenth<=128){
var UpperCase=confirm('UperCase?')
var LowerCase=confirm('LowerCase?')
var Numbers=confirm('Numbers?')
var Symbols=confirm('Symbols?')
if (UpperCase||LowerCase||Numbers||Symbols){
  var lower='abcdefghijklmnopqrstuvwxyz'
  var Upper='ABCDEFGHIJKLMNOPQRSTUVWXY'
  var number="1234567890"
  var symbols='!@#$%^&*()_+~'
  var car=''
  if(UpperCase) {
    car+=Upper
  }
  if(LowerCase){
    car+=lower
  }
  if(Numbers){
    car+=number
  }
  if(Symbols){
    car+=symbols
  }
 return  generatePassword(userlenth,car)
}
else {
  return'Please select LowerCase or UpperCase'
}
}else {
  return 'Please Enter A Number Between 8-128'
}

}
function handleClick () {
console.log ('hi')
var newPassword=userPrompt()
console.log (newPassword)
document.getElementById('password').value=newPassword
copyPassword()
}
  function copyPassword() {
  var copyText = document.getElementById('password');
  copyText.select();
  copyText.setSelectionRange(0, 999);
  document.execCommand('copy');
  }
  document.getElementById('generate').addEventListener('click',handleClick)
  

