/*
Lucid Generated Code
*/
function lucidDebug(uid,event) {
	try{
event.allAttributes_Lucid = "";
 for(var propertyName in event) {event.allAttributes_Lucid += propertyName+",";}		window.LucidWebPreviewDelegate.javascriptFunctionEntered_withEvent_(uid,event);
	} catch(err) { }
}


function lucidLog(uid,value) {
	try{
		console.log(value);
		window.LucidWebPreviewDelegate.lucidLog_withValue_(uid,value);
	} catch(err) { }
}




$(document).ready(function() {


//Lucid_LucidBinding_0_23_1943562231766619002113848747
/*lucidcode*/
$(/*luc!d_element*/document/*luc!d_element_end*/).bind(/*luc!d_event*/'ready'/*luc!d_event_end*/, function(event) {    
/*luc!d_debug*/	lucidDebug('1943562231766619002113848747',event);/*luc!d_debug_end*/
	/*luc!d_function*/ajaxRequest(this,event)/*luc!d_function_end*/;    });
/*lucidcode_end*/
//EndLucid


});

//Lucid_LucidCustomAction_29_579_6662699711019667139626102113
function initColorBox(senderObject, event) {
	lucidDebug('6662699711019667139626102113',event);
/*lucidcode*/$(".group1").colorbox({rel:'group1'});/*lucidcode_end*/

}
//EndLucid

//Lucid_LucidAJAXAction_5_166_16505799111028122311388314229
function ajaxRequest(senderObject, event) {
	lucidDebug('16505799111028122311388314229',event);
/*lucidcode*/
    var request = $.ajax({
    url: /*luc!d_url*/'file.txt'/*luc!d_url_end*/,
    type: /*luc!d_requesttype*/'GET'/*luc!d_requesttype_end*/,
    data: /*luc!d_data*/null/*luc!d_data_end*/,
    dataType: /*luc!d_datatype*/'text'/*luc!d_datatype_end*/
    });
    
    request.done(function (msg) {/*luc!d_donecode*/event.data = msg;/*luc!d_donecode_end*/ 
 /*luc!d_donecallback*/convertFiledataToArray(senderObject,event);/*luc!d_donecallback_end*/});
    
    request.fail(function (jqXHR, textStatus) {/*luc!d_failcode*/alert("An error occurred while processing XML file.");/*luc!d_failcode_end*/ 
 /*luc!d_failcallback*//*luc!d_failcallback_end*/});
/*lucidcode_end*/


/*luc!d_callback*/convertFiledataToArray(senderObject,event);/*luc!d_callback_end*/
/*lucidcode_end*/

}
//EndLucid

//Lucid_LucidCustomAction_28_264_8743482692088244309796858442
function convertFiledataToArray(senderObject, event) {
	lucidDebug('8743482692088244309796858442',event);
/*lucidcode*/event.pathArray = event.data.split('\n');/*lucidcode_end*/

/*luc!d_callback*/loop(senderObject,event);/*luc!d_callback_end*/

}
//EndLucid

//Lucid_LucidLoopAction_127_388_20495237497079515631482514961
function loop(senderObject, event) {
	lucidDebug('20495237497079515631482514961',event);
/*lucidcode*/
    /*luc!d_setup*/var i = 0;/*luc!d_setup_end*/ 
    while(/*luc!d_condition*/i < event.pathArray.length/*luc!d_condition_end*/) {
    /*luc!d_body*/event.pathString = event.pathArray[i];
defineImagePath(senderObject, event);
i++;/*luc!d_body_end*/
    }
    /*luc!d_after*//*luc!d_after_end*/
    /*lucidcode_end*/


}
//EndLucid

//Lucid_LucidCustomAction_30_455_63985948616677606731097070467
function defineImagePath(senderObject, event) {
	lucidDebug('63985948616677606731097070467',event);
/*lucidcode*/var fileNameIndex = event.pathString.lastIndexOf("/") + 1;
event.filename = event.pathString.substr(fileNameIndex);
$('#mydiv').append("<p><a class='group1 cboxElement' href='content/" + event.filename + "'" +  "style='display:none'></a></p>");/*lucidcode_end*/

/*luc!d_callback*/initColorBox(senderObject,event);/*luc!d_callback_end*/

}
//EndLucid

