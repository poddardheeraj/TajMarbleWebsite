;
$(document).ready(function(){


  $('.mapAddressContainer img').bind('contextmenu', function(e){
      return false;
  });



	// Tipso
	
  // product enquiry tab
  /*$('.gotoEnquiryForm').click(function(event) {
      $('.enquiryFormWrap').addClass('active');
      $('.productDetailsInner').addClass('disable');

  });
  $('.goBackToProductDetail').click(function(event) {
      $('.enquiryFormWrap').removeClass('active');
      $('.productDetailsInner').removeClass('disable');
      
  });*/
  
  /*$('.popUpCloseBtn').click(function(event) {
    event.preventDefault();
    $(this).parents().find('.active').removeClass('active');
  });

  // product enquiry tab
  $('.gotoEnquiryForm').click(function() {
    var tab_id = $(this).attr('data-tab');

    setTimeout(function () {
        $('.normalproductPopupWrapper').removeClass('active');
        $('.productComparePopupWrap').removeClass('active');
    }, 500);

    setTimeout(function () {
        $(document).find('.productEnquiryPopUp'+tab_id).addClass('active');
    }, 900);

  });
  // product enquiry tab

  // product popup
  $('.productpopup').click(function() {
    var tab_id = $(this).attr('data-tab');
    $(document).find('.productPopUp'+tab_id).addClass('active');
  });*/



   // Menu Active Temp script
    var url = window.location.pathname;
    var filename = url.substring(url.lastIndexOf('/')+1);
    
    if(filename != ''){
        $( ".navbar-nav a[href='"+filename+"']" ).parent().addClass('active-main-menu');
    }else{
        $( ".navbar-nav a[href='index.php']" ).parent().addClass('active-main-menu');
    }
    
    // menu active

  // product popup

	// menu  responsive fix
	$('.arrow-submenu').click(function(){
        $(this).parent().siblings().removeClass('copen');
        if($(this).parent().hasClass('copen')){
            $(this).parent().removeClass('copen');
        }else{
            $(this).parent().addClass('copen');
        }
    });
	// menu  responsive fix	


  // accordien
  $(".mapAccordienWrap .accordienBtn").click(function () {
   //  alert('cxvxcv');
    // google.maps.event.trigger(map, 'resize');

      $header = $(this);
      //getting the next element
      $content = $header.next();
      //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
      $content.slideToggle(500, function () {

          if ($content.is(":visible")) {
            //console.log('visible');
            $header.addClass('active');
          }
          else
          {
            // console.log('invisible');
            $header.removeClass('active');
          }
      });


  });


 
    // $('.mapAccordienContainer .accordion > li:eq(0) .accordien-Title').addClass('active').next().slideDown();

    $('.mapAccordienContainer .accordion > li a').click(function(j) {
        // scroll top
        /*var self = this;
            setTimeout(function() {
                theOffset = $(self).offset();
                $('body,html').animate({ scrollTop: theOffset.top - 100 });
            }, 510); */
        // scroll top
        //var dropDown = $(this).closest('li').find('.accordien-Content');
        var _this = $(this);
        var yPos = $('.accordion').offset().top ;

          $('body').animate({
              scrollTop: yPos -250
          },'slow', slideFunc );
            function slideFunc(){
                if(_this.hasClass('active')){
                  _this.next('.accordien-Content').slideUp();
                  _this.removeClass('active');
                }else{
                  !_this.parents('.accordion').find('.accordien-Content').slideUp();
                  _this.next('.accordien-Content').slideDown();
                  $('.accordien-Title ').removeClass('active');
                  _this.addClass('active');
                }  
            }
          
          
        


        /*$(this).closest('.accordion').find('.accordien-Content').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.accordion').find('a.active').removeClass('active');
            $(this).addClass('active');
        }*/

        // dropDown.stop(false, true).slideToggle();

        // j.preventDefault();
    });


  // accordien


	// go top
	// go to top
    var wh = $(window).height();
    //alert(wh);

    

    //var ch =  $('.contentHeader').height();
    var ch = $('.contentSection').height();
   // alert(ch);
    if(ch>860){
      $(window).scroll(function () {
          if ($(this).scrollTop() > 100) {
              $('#toTop').fadeIn();
          } else {
              $('#toTop').fadeOut();
          }


          var scroll = $(window).scrollTop();
            if (scroll >= 100) {
              // console.log(ch);
              $("body").addClass("bodyScrolled");
          } else {
              $("body").removeClass("bodyScrolled"); 
          }

      });
      //alert('1');
    }
   /* else{
      alert('2');
    }*/
    

    $('#toTop').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
    // go to top
	// go top

	// floating social
	var name = "#floatMenu";
	var menuYloc = null;
	
		$(document).ready(function(){
			menuYloc = parseInt($(name).css("top").substring(0,$(name).css("top").indexOf("px")))
			$(window).scroll(function () { 
				offset = menuYloc+$(document).scrollTop()+"px";
				$(name).animate({top:offset},{duration:500,queue:false});
			});
		}); 
	// floating social

	// tool tip
	// $('.tipso').tipso();
	//$('[data-toggle="tooltip"]').tooltip();  
	// tool tip


  // menu active
    $('.navbar-toggle').click(function() {
      $(this).toggleClass('active');
    });
    // menu active


	// WOW
	var wow = new WOW(
        {
          boxClass:     'wow',      // animated element css class (default is wow)
          animateClass: 'animated', // animation css class (default is animated)
          offset:       0,          // distance to the element when triggering the animation (default is 0)
          mobile:       true,       // trigger animations on mobile devices (default is true)
          live:         true,       // act on asynchronously loaded content (default is true)
          callback:     function(box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
          },
          scrollContainer: null // optional scroll container selector, otherwise use window
        }
      );
      wow.init(); 
	// WOW	

  	RESPONSIVEUI.responsiveTabs();
  	$('.fancybox').fancybox({

  		maxWidth	: 860,
     // scrolling:'no',
		maxHeight	: 600,
		fitToView	: true, 
		width		: '90%', 
		height		: '80%',
  		padding: 1 ,
  		helpers:  {
	        title : {
	            type : 'inside'
	        },
	        overlay : {
	            showEarly : false
	        }
	    }

  	});



    

    function loadSlider() {
        $('.productPopupGallerySlider').addClass('productPopupGallerySliderActive')
          $('.popUpproductsSliderTop').slick({
          slidesToShow: 1,
          slidesToScroll: 1,

          arrows: false,
          fade: true,
          nextArrow: '<i class="icon icon-icons-next"></i>',
          prevArrow: '<i class="icon icon-icons-previous"></i>',
          asNavFor: '.popUpproductsSliderBottom'
        });


          $('.popUpproductsSliderBottom').slick({
          slidesToShow: 7,

         // slidesToShow: 4,
          slidesToScroll: 1,
          asNavFor: '.popUpproductsSliderTop',
          dots: false,
          arrows: false,
          centerMode: false,
          focusOnSelect: true,
          responsive: [{
              breakpoint: 1280,
              settings: {
                slidesToShow: 4
              }
            },{
              breakpoint: 768,
              settings: {
                slidesToShow: 3
              }
          }]
        });

    }

  	// fancy box
  /*	$(".productpopup").fancybox({
      maxWidth  : 792,
      maxHeight : '95%',
      fitToView : false,
      //scrollOutside:false,
      padding: 0 ,
      width   : '94%',
      height    : '720',
      autoSize  : false,
      closeClick  : false,
      openEffect  : 'none',
      closeEffect : 'none'
      afterLoad: function() {
        setTimeout(loadSlider, 500);
      }
    });*/



});


// header search
function buttonUp(){
     var valux = $('.sb-search-input').val(); 
        valux = $.trim(valux).length;
        if(valux !== 0){
            $('.sb-search-submit').css('z-index','99');
        } else{
            $('.sb-search-input').val(''); 
            $('.sb-search-submit').css('z-index','-999');
        }
}

$(document).ready(function(){
    var submitIcon = $('.sb-icon-search');
    var submitInput = $('.sb-search-input');
    var searchBox = $('.sb-search');
    var isOpen = false;
    
    $(document).mouseup(function(){
        if(isOpen == true){
        submitInput.val('');
        $('.sb-search-submit').css('z-index','-999');
       // submitIcon.click();
        }
    });
    
    submitIcon.mouseup(function(){
        return false;
    });
    
    searchBox.mouseup(function(){
        return false;
    });
            
    submitIcon.click(function(){
        if(isOpen == false){
            searchBox.addClass('sb-search-open');
            isOpen = true;
        } else {
            searchBox.removeClass('sb-search-open');
            isOpen = false;
        }
});

});
// header search




head.ready(document, function () {
    // some big function
   // console.log('Hello HEAD');
});


$(document).on('click', '.yamm .dropdown-menu', function(e) { 
  e.stopPropagation()
})


var glaze = {

	

	// youtube video bg
	/*youtubeBgVideo: function() {
		$('#background-video').YTPlayer({
	        fitToBackground: true,
	        videoId: 'xzfJepG1TFs',
	        pauseOnScroll: true,
	        callback: function() {
	          videoCallbackEvents();
	        }
	      });
	      
	      var videoCallbackEvents = function() {
	        var player = $('#background-video').data('ytPlayer').player;
	      
	      
	      }
    },*/
   
  normalProductPopupSlider: function() {
    $('.productPopupGallerySlider').addClass('productPopupGallerySliderActive')
          $('.popUpproductsSliderTop').slick({
          slidesToShow: 1,
          slidesToScroll: 1,

          arrows: false,
          fade: true,
          nextArrow: '<i class="icon icon-icons-next"></i>',
          prevArrow: '<i class="icon icon-icons-previous"></i>',
          asNavFor: '.popUpproductsSliderBottom'
        });


          $('.popUpproductsSliderBottom').slick({
          slidesToShow: 7,

         // slidesToShow: 4,
          slidesToScroll: 1,
          asNavFor: '.popUpproductsSliderTop',
          dots: false,
          arrows: false,
          centerMode: false,
          focusOnSelect: true,
          responsive: [{
              breakpoint: 1280,
              settings: {
                slidesToShow: 4
              }
            },{
              breakpoint: 768,
              settings: {
                slidesToShow: 3
              }
          }]
        });
  },
	// youtube video bg
  compareProductsSlider: function() {
 // function compareProductsSlider(){
        // $('.productPopupGallerySlider').addClass('productPopupGallerySliderActive')
          $('.compareProductsSliderTop').slick({
          //slidesToShow: 1,
          slidesToScroll: 1,

         // dots: true,
          arrows: true,
          fade: true,
          nextArrow: '<i class="icon icon-icons-next"></i>',
          prevArrow: '<i class="icon icon-icons-previous"></i>',
         // asNavFor: '.compareProductsSliderBottom'
        });


          $('.compareProductsSliderBottom').slick({
          slidesToShow: 4,

         // slidesToShow: 4,
          slidesToScroll: 1,
          asNavFor: '.compareProductsSliderTop',
          dots: false,
          arrows: false,
          centerMode: false,
          focusOnSelect: true,
          responsive: [{
              breakpoint: 1280,
              settings: {
                slidesToShow: 4
              }
            },{
              breakpoint: 768,
              settings: {
                slidesToShow: 3
              }
          }]
        });

    },
  // WAREHOUSE SORTING
	wareHouseSoring: function() {
      $('#Container').mixItUp({
          load: {
            filter: '.category-1'
          },
      });
	},
  // WAREHOUSE SORTING


  // image as background
  //sitemapImg
  //var windowHeight = $(window).height();
  imageAsBg:function(elem){
    var windowWidth = $(window).width();
    
     if(windowWidth>1025){
       // console.log(windowWidth);
        $(elem).each(function(){
           $item = $(this).find('img');
           $(this).css( 'background-image', 'url(' + $item.attr( 'src' ) + ')' );
           $item.remove(); 

        });
     }
     
    

  },


  // image as background  

	glazeSlider: function(elem, item){
		var slider = $(elem).slick({
				pauseOnHover: true, 
		        dots: false,
		        pauseOnHover: true,
		        pauseOnFocus : false,

		        arrows: true, 
		        slidesToShow: item, 
		        speed: 800,
		        infinite: true,
		        autoplay: true,
	  			autoplaySpeed: 4000,
	  			cssEase: 'linear', 
		        infinite: true, 
		        responsive: [
				    {
				      breakpoint: 1024,
				      settings: {
				        slidesToShow: 4,
				        slidesToScroll: 4,
				        infinite: true,
				        dots: false
				      }
				    },
				    {
				      breakpoint: 600,
				      settings: {
				        slidesToShow: 2,
				        slidesToScroll: 2
				      }
				    },
				    {
				      breakpoint: 480,
				      settings: {
				        slidesToShow: 1,
				        slidesToScroll: 1
				      }
				    }
				    // You can unslick at a given breakpoint now by adding:
				    // settings: "unslick"
				    // instead of a settings object
				  ]
		       
		    
		});
  //  console.log(slider);
		 return slider;

	},
	
  calcHeight: function(container){

       var currentTallest = 0,
             currentRowStart = 0,
             rowDivs = new Array(),
             $el,
             topPosition = 0;
         $(container).each(function() {

           $el = $(this);
           $($el).height('auto')
           topPostion = $el.position().top;

           if (currentRowStart != topPostion) {
             for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
               rowDivs[currentDiv].height(currentTallest);
             }
             rowDivs.length = 0; // empty the array
             currentRowStart = topPostion;
             currentTallest = $el.height();
             rowDivs.push($el);
           } else {
             rowDivs.push($el);
             currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
          }
           for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
             rowDivs[currentDiv].height(currentTallest);
           }
         });
  },

 

	glazeSingleSubSlider: function(elem, speed, delay){
    var slider = $(elem).slick({
            //pauseOnHover: true, 
            dots: false,
            pauseOnHover: false,
            pauseOnFocus : false,
            autoplaySpeed: delay,
            arrows: true, 
            //slidesToShow: item, 
            speed: speed,
            autoplay: true,
            
            cssEase: 'linear', 
            infinite: true,
            fade: true
            
           
        
    });
     return slider;
  },
  //alert('dfsf');
  basicTab: function(){

 //   $(".normal-tabs-menu a").click(function(event) {
   //     event.preventDefault();
       // alert('zxc');
       // $(".flipbook").turn("resize");
    //   $(".flipbook").turn();
       // $(".flipbook").turn("destroy").remove();
      //  $(".flipbook").turn("display", "single");
        //var size = $(".flipbook").turn("size");
       // alert("Width: "+size.width + ", Height:"+size.height);



      //  $(this).parent().addClass("current");
      //  $(this).parent().siblings().removeClass("current");
     //   var tab = $(this).attr("href");

     //   $(".tab-content").not(tab).addClass('test')
        
   //     $(".tab-content").not(tab).css("display", "none");
     //   $(tab).fadeIn();
  //  }); 
      
      var tabContentHeight = $('.catelogWrap').height();
      //alert(tabContentHeight);
      
      $('.catelogWrap').css({
        "min-height" : tabContentHeight
      });



      $('.normal-tabs-menu li').click(function(){
        var tab_id = $(this).attr('data-tab');
        
      //  $(window).trigger('resize');

       // flipBOOK.init("#flip-book2", "pdf/pdf-3.pdf");

        $('.normal-tabs-menu li').removeClass('current');
        $('.tab-content').removeClass('current');
        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
      });
  },

  





  // slider with thumb
  glazeThumbnailSlider: function(thumbItem){
    // pause
    $('.productsSliderTop').on('mouseenter', function(){
       // $('.productsSliderBottom').slick('slickPause');
    });
    $('.productsSliderTop').on('mouseleave', function(){
       // $('.productsSliderBottom').slick('slickPlay');
    });
    // pause
    $('.productsSliderTop').each(function() {
        var this_ = $(this);
            ch_th = this_.parent().find('.productsSliderBottom');
            
            this_.slick({
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: true,
              fade: true,
              autoplay: false,
              
              autoplaySpeed: 2000,
            
              pauseOnHover: true,
              nextArrow: '<i class="icon icon-icons-next"></i>',
              prevArrow: '<i class="icon icon-icons-previous"></i>',
              asNavFor: ch_th,
            });
            ch_th.slick({
              slidesToShow: thumbItem,
        
             // slidesToShow: 4,
              slidesToScroll: 1,
              asNavFor: this_,
              dots: false,
              arrows: false,
              pauseOnHover: true,
              centerMode: false,
              focusOnSelect: true,
              autoplay: false,
              autoplaySpeed: 2000,
              pauseOnHover: true,
              responsive: [{
                  breakpoint: 1280,
                  settings: {
                    slidesToShow: 4
                  }
                },{
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 3
                  }
              }]
            });
    });
    /*$('.productsSliderTop').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      autoplay: false,
      
      autoplaySpeed: 2000,
    
      pauseOnHover: true,
      nextArrow: '<i class="icon icon-icons-next"></i>',
      prevArrow: '<i class="icon icon-icons-previous"></i>',
      asNavFor: '.productsSliderBottom',
    });
    $('.productsSliderBottom').slick({
      slidesToShow: thumbItem,

     // slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.productsSliderTop',
      dots: false,
      arrows: false,
      pauseOnHover: true,
      centerMode: false,
      focusOnSelect: true,
      autoplay: false,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      responsive: [{
          breakpoint: 1280,
          settings: {
            slidesToShow: 4
          }
        },{
          breakpoint: 768,
          settings: {
            slidesToShow: 3
          }
      }]
    });*/

  },
  // slider with thumb


  // slider with thumb
/*  glazePopupThumbnailSlider: function(thumbItem){
    $('.popUpproductsSliderTop').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      nextArrow: '<i class="icon icon-icons-next"></i>',
      prevArrow: '<i class="icon icon-icons-previous"></i>',
      asNavFor: '.productsSliderBottom',
    });
    $('.popUpproductsSliderBottom').slick({
      slidesToShow: thumbItem,

     // slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.productsSliderTop',
      dots: false,
      arrows: false,
      centerMode: false,
      focusOnSelect: true,
      responsive: [{
          breakpoint: 1280,
          settings: {
            slidesToShow: 4
          }
        },{
          breakpoint: 768,
          settings: {
            slidesToShow: 3
          }
      }]
    });

  },*/
  // slider with thumb


  // flip book
  flipBook:function(){
     /*(function () {
        'use strict';

        var module = {
            ratio: 1.38,
            init: function (id) {
                var me = this;

                // if older browser then don't run javascript
                if (document.addEventListener) {
                    this.el = document.getElementById(id);
                    this.resize();
                    this.plugins();

                    // on window resize, update the plugin size
                    window.addEventListener('resize', function (e) {
                        var size = me.resize();
                        $(me.el).turn('size', size.width, size.height);
                    });
                }
            },
            resize: function () {
                // reset the width and height to the css defaults
                this.el.style.width = '';
                this.el.style.height = '';

                var width = this.el.clientWidth,
                    height = Math.round(width / this.ratio),
                    padded = Math.round(document.body.clientHeight * 0.9);

                // if the height is too big for the window, constrain it
                if (height > padded) {
                    height = padded;
                    width = Math.round(height * this.ratio);
                }

                // set the width and height matching the aspect ratio
                this.el.style.width = width + 'px';
                this.el.style.height = height + 'px';

                return {
                    width: width,
                    height: height
                };
            },
            plugins: function () {
                // run the plugin
                $(this.el).turn({
                    gradients: true,
                    autoCenter: true,
                    
                    //elevation: 50,
                    acceleration: true
                });
                // hide the body overflow
                document.body.className = 'hide-overflow';
            },
            prev: function(){
              $(this.el).turn("previous");
            },
            next: function(){
              $(this.el).turn("next");
            }
        };

        module.init('book');
        module.init('book1');
        module.init('book2');
        module.init('book3');
        $("#prev").click(function(e){
          e.preventDefault();
          module.prev();
        });

        $("#next").click(function(e){
          e.preventDefault();
          module.next();
          //oTurn.turn("next");
        });
    }());*/
  },
  // flip book


 


	contactBanner:function(){
    // google.maps.event.addDomListener(window, 'load', init);

            init = function(){
                // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom:14,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(25.286037, 55.442924), // New York

                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.
                    styles: [
                        {
                            "featureType": "all",
                            "elementType": "all",
                            "stylers": [
                                {
                                    "visibility": "on"
                                }
                            ]
                        }
                    ]
                };

                // Get the HTML DOM element that will contain your map 
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById('map');

                // Create the Google Map using our element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);

                // Let's also add a marker while we're at it
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(25.286037, 55.442924),
                    map: map,
                    title: 'Glaze!'
                });
               
            }();
            
  },
 
	contactBannerTwo:function(){
    //google.maps.event.addDomListener(window, 'load', init);
          
            init = function() {
                // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom:12,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(24.352362, 54.492710), // New York

                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.
                    styles: [
                        {
                            "featureType": "all",
                            "elementType": "all",
                            "stylers": [
                                {
                                    "visibility": "on"
                                }
                            ]
                        }
                    ]
                };

                // Get the HTML DOM element that will contain your map 
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById('mapTwo');

                // Create the Google Map using our element and options defined above
                var mapTwo = new google.maps.Map(mapElement, mapOptions);

                // Let's also add a marker while we're at it
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(24.352362, 54.492710),
                    map: mapTwo,
                    title: 'Glaze!'
                });

                
            }();
  },
 

    contactBannerThree:function(){
    //google.maps.event.addDomListener(window, 'load', init);
          
            init = function() {
                // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom:12,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(25.322327, 55.513643), // New York

                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.
                    styles: [
                        {
                            "featureType": "all",
                            "elementType": "all",
                            "stylers": [
                                {
                                    "visibility": "on"
                                }
                            ]
                        }
                    ]
                };

                // Get the HTML DOM element that will contain your map 
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById('mapThree');

                // Create the Google Map using our element and options defined above
                var mapTwo = new google.maps.Map(mapElement, mapOptions);

                // Let's also add a marker while we're at it
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(25.322327, 55.513643),
                    map: mapThree,
                    title: 'Glaze!'
                });

                
            }();
  },

	/*giesOverview: function(){
		RESPONSIVEUI.responsiveTabs();
	},*/ 


}


$(document).keyup(function(e) {
     if (e.keyCode == 27) { // escape key maps to keycode `27`
       $('.popupWrp').removeClass('active'); 
       $('html').removeClass('customPopUpActive')
    }
});


// scroll animation 

// scroll animation 

$(document).keydown(function(e) {
    // ESCAPE key pressed
    if (e.keyCode == 27) {
       // window.close();
       $('.productDetailsInner').removeClass('disable');
       $('.enquiryFormWrap').removeClass('active');
    }
});

      
      

      
        
            /*function init (){
                // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom:14,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(25.286037, 55.442924), // New York

                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.
                    styles: [
                        {
                            "featureType": "all",
                            "elementType": "all",
                            "stylers": [
                                {
                                    "visibility": "on"
                                }
                            ]
                        }
                    ]
                };

                // Get the HTML DOM element that will contain your map 
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById('map');

                // Create the Google Map using our element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);

                // Let's also add a marker while we're at it
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(25.286037, 55.442924),
                    map: map,
                    title: 'Glaze!'
                });
            }
*/
            //google.maps.event.addDomListener(window, 'load', init);


$(window).load(function() { 
    var ch = $('.contentSection').height();
   // alert(ch);
    if(ch>860){
      $(window).scroll(function () {
         
          var scroll = $(window).scrollTop();
            if (scroll >= 100) {
              // console.log(ch);
              $("body").addClass("bodyScrolled");
          } else {
              $("body").removeClass("bodyScrolled"); 
          }

      });
      //alert('1');
    }
});
