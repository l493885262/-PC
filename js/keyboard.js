//定义当前是否大写的状态 
var CapsLockValue=0; 
var curEditName;
var check; 
var btn=1;
function gb1 () { btn=1; }
function gb2 () { btn=2; }
function gb3 () { btn=3; }
document.writeln("<div class=\"softkey\">");
document.write (' <DIV class="softkeyboard" id="softkeyboard" name="softkeyboard" style="display:; \">'); 
//document.write (' ------数字----'); 
document.write (' <div class=\"c_panel shuzi\" id="shuzi">'); 
document.write ('<table align=\"center\" width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">');
document.write (' <tr> '); 
document.write (' <td><input class="i_button i_button_num" type=button onclick=\"addValue(\'7\',btn);\" value=\" 7 \"></td>'); 
document.write (' <td><input class="i_button i_button_num" type=button onclick=\"addValue(\'8\',btn);\" value=\" 8 \"></td>'); 
document.write (' <td><input class="i_button i_button_num" type=button onclick=\"addValue(\'9\',btn);\" value=\" 9 \"></td>'); 
document.write (' <td><input class="i_button i_button_btn i_button_sz" onclick=\"changePanl(\'zimu\');\" type=button value=符号 ></td>'); 
document.write (' </tr>'); 
document.write (' <tr> '); 
document.write (' <td><input class="i_button i_button_num" type=button onclick=\"addValue(\'4\',btn);\" value=\" 4 \"></td>'); 
document.write (' <td><input class="i_button i_button_num" type=button onclick=\"addValue(\'5\',btn);\" value=\" 5 \"></td>'); 
document.write (' <td><input class="i_button i_button_num" type=button onclick=\"addValue(\'6\',btn);\" value=\" 6 \"></td>'); 
document.write (' <td><input class="i_button i_button_btn i_button_sz" onclick=\"changePanl(\'zimu\');\" type=button value=字母></td>'); 
document.write (' </tr>'); 
document.write (' <tr> '); 
document.write (' <td><input class="i_button i_button_num" type=button onclick=\"addValue(\'1\',btn);\" value=\" 1 \"></td>'); 
document.write (' <td><input class="i_button i_button_num" type=button onclick=\"addValue(\'2\',btn);\" value=\" 2 \"></td>'); 
document.write (' <td><input class="i_button i_button_num" type=button onclick=\"addValue(\'3\',btn);\" value=\" 3 \"></td>'); 
document.write (' <td><input class="i_button i_button_btn" type=button onclick=\"clearValue();\"  value=清空 ></td>'); 
document.write (' </tr>'); 
document.write (' <tr> '); 
document.write (' <td><input class="i_button i_button_num" type=button onclick=\"addValue(\'0\',btn);\" value=\" 0 \"></td>'); 
document.write (' <td></td>'); 
document.write (' <td colspan=2><input class="i_button i_button_bs" type=button value=\" BackSpace\" onclick=\"backspace();\"></td>'); 
document.write (' </tr>'); 
document.write (' </table>'); 
document.write ('</DIV>'); 
//document.write ('--------------------------------------------'); 
//document.write (' ------字母----');
document.write (' <div class=\"c_panel zimu\" id=\"zimu\"  style=\"display:none;\">'); 
document.write (' <table align=\"center\" width=\"98%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">'); 
document.write (' <tr> '); 
document.write (' <td><input class="i_button i_button_fh" type=button onclick=\"addValue(\'~\',btn);\" value=\" ~ \"></td>'); 
document.write (' <td><input class="i_button i_button_fh" type=button onclick=\"addValue(\'!\',btn);\" value=\" ! \"></td>'); 
document.write (' <td><input class="i_button i_button_fh" type=button onclick=\"addValue(\'@\',btn);\" value=\" @ \"></td>'); 
document.write (' <td><input class="i_button i_button_fh" type=button onclick=\"addValue(\'#\',btn);\" value=\" # \"></td>'); 
document.write (' <td><input class="i_button i_button_fh" type=button onclick=\"addValue(\'$\',btn);\" value=\" $ \"></td>'); 
document.write (' <td><input class="i_button i_button_fh" type=button onclick=\"addValue(\'%\',btn);\" value=\" % \"></td>'); 
document.write (' <td><input class="i_button i_button_fh" type=button onclick=\"addValue(\'^\',btn);\" value=\" ^ \"></td>'); 
document.write (' <td><input class="i_button i_button_fh" type=button onclick=\"addValue(\'*\',btn);\" value=\" * \"></td>'); 
document.write (' <td><input class="i_button i_button_fh" type=button onclick=\"addValue(\'(\',btn);\" value=\" ( \"></td>'); 
document.write (' <td><input class="i_button i_button_fh" type=button onclick=\"addValue(\')\',btn);\" value=\" ) \"></td>'); 
document.write (' <td><input class="i_button i_button_fh" type=button onclick=\"addValue(\'-\',btn);\" value=\" - \"></td>'); 
document.write (' <td><input class="i_button i_button_fh" type=button onclick=\"addValue(\'+\',btn);\" value=\" + \"></td>'); 
document.write (' <td><input class="i_button i_button_fh" type=button onclick=\"addValue(\'=\',btn);\" value=\" = \"></td>'); 
document.write (' <td><input class="i_button i_button_btn" type=button onclick=\"changePanl(\'shuzi\');\" value=\"切换数字\"></td>'); 
document.write (' </tr>');
document.write (' <tr> '); 
document.write (' <td><input class="i_button i_button_zm" type=button onclick=\"addValue(\'q\',btn);\" value=\" q \"></td>'); 
document.write (' <td><input class="i_button i_button_zm" type=button onclick=\"addValue(\'w\',btn);\" value=\" w \"></td>'); 
document.write (' <td><input class="i_button i_button_zm" type=button onclick=\"addValue(\'e\',btn);\" value=\" e \"></td>'); 
document.write (' <td><input class="i_button i_button_zm" type=button onclick=\"addValue(\'r\',btn);\" value=\" r \"></td>'); 
document.write (' <td><input class="i_button i_button_zm" type=button onclick=\"addValue(\'t\',btn);\" value=\" t \"></td>'); 
document.write (' <td><input class="i_button i_button_zm" type=button onclick=\"addValue(\'y\',btn);\" value=\" y \"></td>'); 
document.write (' <td><input class="i_button i_button_zm" type=button onclick=\"addValue(\'u\',btn);\" value=\" u \"></td>'); 
document.write (' <td><input class="i_button i_button_zm" type=button onclick=\"addValue(\'i\',btn);\" value=\" i \"></td>'); 
document.write (' <td><input class="i_button i_button_zm" type=button onclick=\"addValue(\'o\',btn);\" value=\" o \"></td>'); 
document.write (' <td><input class="i_button i_button_zm" type=button onclick=\"addValue(\'p\',btn);\" value=\" p \"></td>'); 
document.write (' <td><input class="i_button i_button_fh" type=button onClick=\"addValue(\'[\',btn);\" value=\" [ \"></td>'); 
document.write (' <td><input class="i_button i_button_fh" type=button onClick=\"addValue(\']\',btn);\" value=\" ] \"></td>'); 
document.write (' <td><input class="i_button i_button_fh" type=button onClick=\"addValue(\'{\',btn);\" value=\" { \"></td>'); 
document.write (' <td><input class="i_button i_button_btn" type=button onClick=\"setCapsLock(this);\" value=\"切换大写\"></td>'); 
document.write (' </tr>'); 
document.write (' <tr> '); 
document.write (' <td><input class="i_button i_button_fh" type=button onClick=\"addValue(\'|\',btn);\" value=\" | \"></td>'); 
document.write (' <td><input class="i_button i_button_zm" type=button onclick=\"addValue(\'a\',btn);\" value=\" a \"></td>'); 
document.write (' <td><input class="i_button i_button_zm" type=button onclick=\"addValue(\'s\',btn);\" value=\" s \"></td>'); 
document.write (' <td><input class="i_button i_button_zm" type=button onclick=\"addValue(\'d\',btn);\" value=\" d \"></td>'); 
document.write (' <td><input class="i_button i_button_zm" type=button onclick=\"addValue(\'f\',btn);\" value=\" f \"></td>'); 
document.write (' <td><input class="i_button i_button_zm" type=button onclick=\"addValue(\'g\',btn);\" value=\" g \"></td>'); 
document.write (' <td><input class="i_button i_button_zm" type=button onclick=\"addValue(\'h\',btn);\" value=\" h \"></td>'); 
document.write (' <td><input class="i_button i_button_zm" type=button onclick=\"addValue(\'j\',btn);\" value=\" j \"></td>'); 
document.write (' <td><input class="i_button i_button_zm" type=button onclick=\"addValue(\'k\',btn);\" value=\" k \"></td>'); 
document.write (' <td><input class="i_button i_button_zm" type=button onclick=\"addValue(\'l\',btn);\" value=\" l \"></td>'); 
document.write (' <td><input class="i_button i_button_fh" type=button onclick=\"addValue(\';\',btn);\" value=\" ; \"></td>'); 
document.write (' <td><input class="i_button i_button_fh" type=button onclick=\"addValue(\':\',btn);\" value=\" : \"></td>'); 
document.write (' <td><input class="i_button i_button_fh" type=button onClick=\"addValue(\'}\',btn);\" value=\" } \"></td>'); 
document.write (' <td><input class="i_button i_button_btn" type=button onclick=\"clearValue();\"  value=清空 ></td>'); 
document.write (' </tr>');
 
document.write (' <tr> '); 
document.write (' <td><input class="i_button i_button_fh" type=button onclick=\"addValue(\'_\',btn);\" value=\" _ \"></td>'); 
document.write (' <td><input class="i_button i_button_zm" type=button onclick=\"addValue(\'z\',btn);\" value=\" z \"></td>'); 
document.write (' <td><input class="i_button i_button_zm" type=button onclick=\"addValue(\'x\',btn);\" value=\" x \"></td>'); 
document.write (' <td><input class="i_button i_button_zm" type=button onclick=\"addValue(\'c\',btn);\" value=\" c \"></td>'); 
document.write (' <td><input class="i_button i_button_zm" type=button onclick=\"addValue(\'v\',btn);\" value=\" v \"></td>'); 
document.write (' <td><input class="i_button i_button_zm" type=button onclick=\"addValue(\'b\',btn);\" value=\" b \"></td>'); 
document.write (' <td><input class="i_button i_button_zm" type=button onclick=\"addValue(\'n\',btn);\" value=\" n \"></td>'); 
document.write (' <td><input class="i_button i_button_zm" type=button onclick=\"addValue(\'m\',btn);\" value=\" m \"></td>'); 
document.write (' <td><input class="i_button i_button_fh" type=button onClick=\"addValue(\'<\',btn);\" value=\" < \"></td>'); 
document.write (' <td><input class="i_button i_button_fh" type=button onClick=\"addValue(\'>\',btn);\" value=\" > \"></td>'); 
document.write (' <td><input class="i_button i_button_fh" type=button onClick=\"addValue(\'/\',btn);\" value=\" / \"></td>'); 
document.write (' <td><input class="i_button i_button_fh" type=button onClick=\"addValue(\'?\',btn);\" value=\" ? \"></td>'); 
document.write (' <td colspan=2><input class="i_button i_button_bs" type=button value=\" BackSpace\" onclick=\"backspace();\"></td>'); 
document.write (' </tr>'); 

document.write (' </table>'); 
document.write (' </div>'); 
//document.write ('--------------------------------------------'); 
document.write ('</DIV>'); 
document.writeln("</div>");

//给输入的密码框添加新值 
function addValue(newValue,newbtn) 
{ 
	CapsLockValue==0?$( ".input_cur"+btn).val($( ".shuru"+btn).val()+ newValue):$( ".input_cur"+btn).val($( ".shuru"+btn).val()+ newValue.toUpperCase());
} 
//清空 
function clearValue() 
{ 
	$(".input_cur"+btn).val(""); 
} 
//实现BackSpace键的功能 
function backspace() 
{ 
	var longnum=$(".input_cur"+btn).val().length; 
	var num ;
	num=$(".input_cur"+btn).val().substr(0,longnum-1); 
	$(".input_cur"+btn).val(num); 
} 
function changePanl(oj){
	$("#"+oj).siblings("div").hide();
	$("#"+oj).show();
}
//设置是否大写的值 
function setCapsLock(o) 
{ 
	  if (CapsLockValue==0){ 
	  		CapsLockValue=1; 
			$(o).val("转化小写");
			$.each($(".i_button_zm"),function(b, c) {  
			  $(c).val($(c).val().toUpperCase());
			});
	  }else{ 
	  		CapsLockValue=0; 
			$(o).val("转化大写");	
			$.each($(".i_button_zm"),function(b, c) {  
			  $(c).val($(c).val().toLowerCase());
			});
	  }
} 

window.onload=function(){
//	changePanl("zimu");
}
var divhtml=$(".softkey").html();
$(".jp-btn").click(function() {
	$(".jpp").html(divhtml);
	if ($(this).parents("dl").hasClass('active')) {
		$(this).parents("dl").removeClass('active');
	}else{
		$(this).parents("dl").addClass('active').siblings().removeClass('active');
		if ($(this).siblings('input').attr('placeholder')) {
			$(this).siblings('input').removeAttr('placeholder').val("");
		};
	};
	
});
