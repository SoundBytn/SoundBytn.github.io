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
		name: "SWAMP",
		path: "SWAMP1/SWAMP (PROD. SOLSA).mp3",
		img: "SWAMPCOVER/SWAMP_Cover.JPG",
		singer: ""
	  },
	  {
		name: "HANGING MYSELF WITH MY PHONE CHARGER",
		path: "SWAMP1/HANGING MYSELF WITH MY PHONE CHARGER (PROD. MKULTRA).mp3",
		img: "SWAMPCOVER/SWAMP_Cover.JPG",
		singer: ""
	  },
	  {
		name: "THE KIDS ARE ALL RETARDED",
		path: "SWAMP1/THE KIDS ARE ALL RETARDED (PROD. WENDIGO_MKULTRA_DARKIE).mp3",
		img: "SWAMPCOVER/SWAMP_Cover.JPG",
		singer: ""
	  },

	  {
		name: "I can see clearly now",
		path: "SWAMP1/i can see clearly now (PROD. WENDIGO).mp3",
		img: "SWAMPCOVER/SWAMP_Cover.JPG",
		singer: ""
	  },

	  {
		name: "tale of yehoshua",
		path: "SWAMP1/tale of yehoshua (interlude) (PROD. CHECKS).mp3",
		img: "SWAMPCOVER/SWAMP_Cover.JPG",
		singer: ""
	  },
	  {
		name: "ROBOT",
		path: "SWAMP1/ROBOT (PROD. SKOTSKR).mp3",
		img: "SWAMPCOVER/SWAMP_Cover.JPG",
		singer: ""
	  },
	  {
		name: "BACK IN LONG BEACH",
		path: "SWAMP1/BACK IN LONG BEACH (FT. CXRPSE_BRUHMANEGOD) (PROD. SOLSA).mp3",
		img: "SWAMPCOVER/SWAMP_Cover.JPG",
		singer: ""
	  },
	  {
		name: "HOW TO ROB A BANK",
		path: "SWAMP1/HOW TO ROB A BANK (FT. CHRIST DILLINGER) (PROD. SOLSA).mp3",
		img: "SWAMPCOVER/SWAMP_Cover.JPG",
		singer: ""
	  },
	  {
		name: "COMFORT IN DISCOMFORT",
		path: "SWAMP2/COMFORT IN DISCOMFORT (PROD. WENDIGO).mp3",
		img: "SWAMPCOVER/SWAMP_Cover.JPG",
		singer: ""
	  },
	  {
		name: "INCREDIBLE INSURRECTION",
		path: "SWAMP2/INCREDIBLE INSURRECTION (PROD. WENDIGO_MKULTRA_CUBENSIS).mp3",
		img: "SWAMPCOVER/SWAMP_Cover.JPG",
		singer: ""
	  },
	  {
		name: "SOUND OF GRINDING A POLITICIAN INTO POWDER",
		path: "SWAMP2/SOUND OF GRINDING A POLITICIAN'S SKULL INTO A FINE POWDER (FT. JOHNNASCUS) (PROD. WENDIGO).mp3",
		img: "SWAMPCOVER/SWAMP_Cover.JPG",
		singer: ""
	  },
	  {
		name: "BAR FIGHT MUSIC",
		path: "SWAMP2/BAR FIGHT MUSIC (PROD. WENDIGO_MKULTRA_DARKIE).mp3",
		img: "SWAMPCOVER/SWAMP_Cover.JPG",
		singer: ""
	  },
	  {
		name: "DISENTIGRATE",
		path: "SWAMP2/DISENTIGRATE (PROD. WENDIGO).mp3",
		img: "SWAMPCOVER/SWAMP_Cover.JPG",
		singer: ""
	  },
	  {
		name: "LA LA UNDERBELLY",
		path: "SWAMP2/LA LA UNDERBELLY (PROD. TRIPLESIXDELETE).mp3",
		img: "SWAMPCOVER/SWAMP_Cover.JPG",
		singer: ""
	  },
	  {
		name: "FRIED EGG",
		path: "SWAMP3/FRIED EGG (PROD. TRIPLESIXDELETE).mp3",
		img: "SWAMPCOVER/SWAMP_Cover.JPG",
		singer: ""
	  },
	  {
		name: "P.I.G.G.Y",
		path: "SWAMP3/P.I.G.G.Y. (FT. A14_TEENAGE DISASTER) (PROD. WENDIGO).mp3",
		img: "SWAMPCOVER/SWAMP_Cover.JPG",
		singer: ""
	  },
	  {
		name: "NOISEINSIDEMYHEAD",
		path: "SWAMP3/NOISESINSIDEMYHEAD (PROD. DARKIE_MKULTRA).mp3",
		img: "SWAMPCOVER/SWAMP_Cover.JPG",
		singer: ""
	  },
	  {
		name: "ballad of ganesha",
		path: "SWAMP3/ballad of ganesha (interlude) (PROD. DARKIE_MKULTRA).mp3",
		img: "SWAMPCOVER/SWAMP_Cover.JPG",
		singer: ""
	  },
	  {
		name: "i don't know",
		path: "SWAMP3/i don't know (FT. BLCKK) (PROD. MKULTRA_WENDIGO_DARKIE).mp3",
		img: "SWAMPCOVER/SWAMP_Cover.JPG",
		singer: ""
	  },
	  {
		name: "baby me",
		path: "SWAMP3/baby me (PROD. MKULTRA_DARKIE).mp3",
		img: "SWAMPCOVER/SWAMP_Cover.JPG",
		singer: ""
	  },
	  {
		name: "DARKIE CAN RAP",
		path: "SWAMP3/DARKIE CAN RAP (PROD. LIL JUDAS).mp3",
		img: "SWAMPCOVER/SWAMP_Cover.JPG",
		singer: ""
	  },
	  {
		name: "the credits",
		path: "SWAMP3/the credits (PROD. WENDIGO_DOC LAUNDRY).mp3",
		img: "SWAMPCOVER/SWAMP_Cover.JPG",
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