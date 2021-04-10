let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume= document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');


let timer;
let autoplay = 0;

let index_no = 0;
let Playing_song = false;

//create a audio Element
let track = document.createElement('audio');


//All songs list
let All_song = [
   {
     name: "rap music",
     path: "Brahman_Music_1/Brahman_RapMusic.mp3",
     img: "Brahman_Covers_Pics/Brahman_Cover.JPG",
     singer: ""
   },
   {
     name: "GOOD MOURNING!",
     path: "Brahman_Music_1/brahman_good_mourning.mp3",
     img: "Brahman_Covers_Pics/Brahman_Cover.JPG",
     singer: ""
   },
   {
     name: "COMPOSITION III IN RED, WHITE, AND BLACK",
     path: "Brahman_Music_1/brahman_compinRWB.mp3",
     img: "Brahman_Covers_Pics/Brahman_Cover.JPG",
     singer: ""
   },
   {
     name: "MOVE BECAUSE YOU CAN",
     path: "Brahman_Music_2/Brahman_MBYC.mp3",
     img: "Brahman_Covers_Pics/Brahman_Cover.JPG",
     singer: ""
   },
   {
     name: "THE PAINT WALKING",
     path: "Brahman_Music_2/brahman_paint_walking.mp3",
     img: "Brahman_Covers_Pics/Brahman_Cover.JPG",
     singer: ""
   },
   {
	name: "I AM ADDICTED TO DRUGS AND IM SICK OF IT",
	path:"Brahman_Music_2/Brahman_IMATDAIMSOI.mp3",
	img:"Brahman_Covers_Pics/Brahman_Cover.JPG",
	singer: ""
	},
	{
	name: "where is brahman?",
	path:"Brahman_Music_3/Brahman_WhereIsBrahman.mp3",
	img:"Brahman_Covers_Pics/Brahman_Cover.JPG",
	singer: ""
	},
	{
	name: "BLOOD MONEY",
	path:"Brahman_Music_3/Brahman_Blood_Money.mp3",
	img:"Brahman_Covers_Pics/Brahman_Cover.JPG",
	singer: ""
	},
	{
	name: "THE SANDS OF TIME",
	path:"Brahman_Music_3/Brahman_SandsOfTime.mp3",
	img:"Brahman_Covers_Pics/Brahman_Cover.JPG",
	singer: ""
	},
	{
	name: "EGO DEATH",
	path:"Brahman_Music_4/Brahman_EgoDeath.mp3",
	img:"Brahman_Covers_Pics/Brahman_Cover.JPG",
	singer: ""
	},
	{
	name: "COMPOSITION XI",
	path:"Brahman_Music_4/Brahman_CompXI.mp3",
	img:"Brahman_Covers_Pics/Brahman_Cover.JPG",
	singer: ""
	},
	{
	name: "IM GONNA STOP DOING DRUGS",
	path:"Brahman_Music_5/Brahman_IMGTSDD.mp3",
	img:"Brahman_Covers_Pics/Brahman_Cover.JPG",
	singer: ""
	},
	{
	name: "wrap music",
	path:"Brahman_Music_5/Brahman_Wrap_Music.mp3",
	img:"Brahman_Covers_Pics/Brahman_Cover.JPG",
	singer: ""
	},
];


// All functions


// function load the track
function load_track(index_no){
	clearInterval(timer);
	reset_slider();

	track.src = All_song[index_no].path;
	title.innerHTML = All_song[index_no].name;	
	track_image.src = All_song[index_no].img;
    artist.innerHTML = All_song[index_no].singer;
    track.load();

	timer = setInterval(range_slider ,1000);
	total.innerHTML = All_song.length;
	present.innerHTML = index_no + 1;
}

load_track(index_no);


//mute sound function
function mute_sound(){
	track.volume = 0;
	volume.value = 0;
	volume_show.innerHTML = 0;
}


// checking.. the song is playing or not
 function justplay(){
 	if(Playing_song==false){
 		playsong();

 	}else{
 		pausesong();
 	}
 }


// reset song slider
 function reset_slider(){
 	slider.value = 0;
 }

// play song
function playsong(){
  track.play();
  Playing_song = true;
  play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
}

//pause song
function pausesong(){
	track.pause();
	Playing_song = false;
	play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}


// next song
function next_song(){
	if(index_no < All_song.length - 1){
		index_no += 1;
		load_track(index_no);
		playsong();
	}else{
		index_no = 0;
		load_track(index_no);
		playsong();

	}
}


// previous song
function previous_song(){
	if(index_no > 0){
		index_no -= 1;
		load_track(index_no);
		playsong();

	}else{
		index_no = All_song.length;
		load_track(index_no);
		playsong();
	}
}


// change volume
function volume_change(){
	volume_show.innerHTML = recent_volume.value;
	track.volume = recent_volume.value / 100;
}

// change slider position 
function change_duration(){
	slider_position = track.duration * (slider.value / 100);
	track.currentTime = slider_position;
}

// autoplay function
function autoplay_switch(){
	if (autoplay==1){
       autoplay = 0;
       auto_play.style.background = "rgba(255,255,255,0.2)";
	}else{
       autoplay = 1;
       auto_play.style.background = "#d6292a";
	}
}


function range_slider(){
	let position = 0;
        
        // update slider position
		if(!isNaN(track.duration)){
		   position = track.currentTime * (100 / track.duration);
		   slider.value =  position;
	      }

       
       // function will run when the song is over
       if(track.ended){
       	 play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
           if(autoplay==1){
		       index_no += 1;
		       load_track(index_no);
		       playsong();
           }
	    }
     }