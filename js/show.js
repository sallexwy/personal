$(document).ready(function(){
	$("div.projectsContent").click(function(){
		$(".projectLinks").each(function(i) {
			$(this).delay(i * 100).fadeIn();
		});
	});
});

function make_show(id) {
	var x = document.getElementById(id);
	if (x.style.display == "none") {
		setTimeout(function(){
			x.style.display = "block";
			}, 30);
	} 
	else {		
		setTimeout (function(){
			x.style.display = "none";
			}, 30);
	}
}
			
function make_clear(id){
	var x = document.getElementById(id);
	x.style.display= "none";
}


