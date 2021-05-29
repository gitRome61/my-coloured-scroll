
    /*  UNO (al refresh dello schermo ritorna a Home)
        $(document).ready(function(){
            $(this).scrollTop(0);
        });
    */

    /*  DUE (al refresh dello schermo ritorna a Home con un ritardo)
        $("html, body").animate({ scrollTop: "0" }, 1000);
    */

    /*  TRE (funziona come la DUE)  */
        $(document).ready(function(){
            $("html, body").animate({ scrollTop: "0" }, 1000);
        });
    /*------------------------------*/


    /*==== scroll al click ===*/
        $(function(){
            $(".menu-links a").on('click', function(){
                $("html, body").animate({
                   scrollTop: $($.attr(this, 'href')).offset().top
                }, 700);             
            });
        });

    /*=======*/
    

    /*==== spy su navbar al click ===*/
        let menuLinks = document.querySelectorAll('.menu-links li');        
        menuLinks.forEach (v=> {
            v.onclick = (()=> {
                setTimeout(()=> { 
                    menuLinks.forEach (j=> j.classList.remove('active'))
                    v.classList.add('active')
                    }, 100);
                console.log(v);
            })
            
        })

    /*=======*/

    
   /*==== spy su navbar allo scroll ===*/

	window.onscroll = (()=> {

	  let mainSection = document.querySelectorAll('main section');

	  mainSection.forEach((v,i)=> {

	    let rect = v.getBoundingClientRect().y;

	    if (rect < window.innerHeight-200) {
		menuLinks.forEach (v=> v.classList.remove('active'))
	       	menuLinks[i].classList.add('active')
	    }

	  })

	})

    /*=======*/

