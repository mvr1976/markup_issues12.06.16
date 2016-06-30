//flipover welcome
$('.welcome_login').on('click', function(){
		console.log('jquery is working');
		$('.front').css('transform','rotateY(-180deg)');		
		$('.back').css('transform','rotateY(0deg)');
		});
$('.login_nav_link').on('click', function(){
		console.log('jquery is working');
		$('.front').css('transform','rotateY(0deg)');		
		$('.back').css('transform','rotateY(180deg)');
		});

//flipover welcome

//modal window navigation
$('.hamburger').on('click', function(){
		$('.modal_window').css('display','block').animate({opacity:1},500);
		});
$('.modal_close').on('click', function(){
		$('.modal_window').css('display','none').animate({opacity:0},500);
		// $('modal_close:before').animate({transform:rotate(45deg)},300);
		});

//initMap
var map;
function initMap() {
	var latLng = new google.maps.LatLng(44.58527143, 37.98389912);
	var styles = {
		      stylers: [
		        { hue: "#07ac99" },
		        { saturation: -20 }
		      ]
		    };
  
  	map = new google.maps.Map(document.getElementById('google-map'), {
    center: {lat: 44.58527143, lng: 37.98389912},
    zoom: 12
  });

  	marker = new google.maps.Marker({
	position: latLng,
	map: map,
	draggable: false,
	// animation: google.maps.Animation.DROP
	});
  
  	var styledMap = new google.maps.StyledMapType(styles,
    {name: "Styled Map"});
  	map.mapTypes.set(styledMap);  
}