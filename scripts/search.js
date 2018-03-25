$(function(){  
	$('#inputSearch').val("搜索你感兴趣的内容").addClass("search1");
	$('#inputSearch').focus(function(){  //搜索框获得焦点
		if ($('#inputSearch').val()=="搜索你感兴趣的内容"){
			$('#inputSearch').val("").addClass(search2).removeClass("search1");
		}
	});
	$('#inputSearch').blur(function(){
		if($('#inputSearch').val()==""){
			$('#inputSearch').val("搜索你感兴趣的内容").addClass("search1").removeClass("search2");
		}
	});
});