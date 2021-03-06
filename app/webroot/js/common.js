
/*
function trim(str) 
    posL = 0;
    posR = str.length - 1;
    while (str.charAt(posL) == ' ' && posL <= posR)
        posL++;
    while (str.charAt(posR) == ' ' && posL <= posR)
        posR--;
    if (posL > posR)
        return "";
    return str.substring(posL, posR + 1);
}
$(function() {
    $("#dialog").dialog({
        autoOpen: false,
        show: {
            effect: "blind",
            duration: 300
        },
        hide: {
            effect: "explode",
            duration: 300
        }
    });
    
    
});
*/

//弹出层函数，调用artDialog5.0.3
/**
 * 警告弹出层
 * @param string warning 弹出消息
 */
function artWarning(warning,callback){
	var dialog=artBase(warning,"warning");
	dialog.title("警告");
	dialog.button({
		id:'close',
	    value:'确定',
	    callback:callback
	})
}
/**
 * 操作成功弹出层
 * @param string success 弹出消息
 * @param int time 显示弹出层的毫秒，0表示常显示
 * @param callback 点击确定触发的函数
 */
function artSuccess(success,time,callback){
	if(!checkVar(time)) time=0;
	var dialog=artBase(success,"succeed");
	dialog.time(time);
	dialog.button({
		id:'close',
	    value:'确定',
	    callback:callback
	})
}
/**
 * 错误弹出层
 * @param string error 弹出消息
 * @param callback 点击关闭触发的函数
 */
function artError(error,callback){
	var dialog=artBase(error,"error");
	dialog.title("错误");
	dialog.button({
		id:'close',
	    value:'关闭',
	    callback:callback
	})
}
/**
 * 提示弹出层，弹出层标题隐藏
 * @param string tip 弹出消息
 */
function artTip(tip){
	var dialog=artBase(tip,"succeed",function(){
		$(".d-header").css("display","none");
	});
	dialog.time(time);
}
/**
 * 确认弹出层
 * @param confirm
 * @param success
 * @param error
 */
function artConfirm(confirm,success,error,title){
	var dialog=artBase(confirm,"question");
	if(checkVar(title)) dialog.title(title);
	if(!checkVar(success)){
		success=function(){
			return true;
		}
	}
	if(!checkVar(error)){
		error=function(){
			return true;
		}
	}
	dialog.button({
		id:"success",
		value:"确认",
		callback:success
	},{
		id:"cancel",
		value:"取消",
		callback:error
	})
}
/**
 * 弹出层基本配置
 * @param string icon 图标名称
 * @param string info 提示信息
 * @param function initialize 初始化函数
 */
function artBase(info,icon,initialize){
	var content;
	if(checkVar(icon)){
		content="<div style='float:left'><img src='/img/icons/"+icon+".png'></div>";
	}
	content+="<div style='float:left;margin-left:10px;line-height: 42px;'>"+info+"</div>";
	var dialog=art.dialog({
		id:"dialog",
		title:"提示",
		content:content,
		fixed:true,
		lock:true,
		padding:"20px 30px",
		initialize:initialize
	})
	return dialog;
}
//其他全局函数
/**
 * 检查变量是否存在，0能通过验证
 * @param Var 变量
 * @returns boolean
 */
function checkVar(Var){
	if(Var==null || typeof(Var)=="undefined" || Var=="")return false;
	return true;
}
