window.onscroll = function() {scrollFunction()};
 
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    
    document.getElementById("navbar").style.background = "#091C2B";
  } else {
   
    document.getElementById("navbar").style.background = "none";
  }
}



let blob = document.querySelectorAll('.text-blob-container');

window.addEventListener('DOMContentLoaded', ( ) => {
	
	setTimeout(( ) => {

		blob.forEach((span, idx) => {
			setTimeout(( ) => {
				span.classList.add('active');
			}, (idx + 1) * 300)
		});

    });
})