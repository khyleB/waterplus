window.onscroll = function() {scrollFunction()};
 
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    
    document.getElementById("navbar").style.background = "#091C2B";
  } else {
   
    document.getElementById("navbar").style.background = "none";
  }
}



let box = document.querySelectorAll('.textbox-light');

window.addEventListener('DOMContentLoaded', ( ) => {
	
	setTimeout(( ) => {

		box.forEach((span, idx) => {
			setTimeout(( ) => {
				span.classList.add('active');
			}, (idx + 1) * 300)
		});

    });
})