let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume = document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let artist = document.querySelector('#artist');

let timer;
let autoplay = 0;
let total, present;

let index_no = 0;
let Playing_song = false;

//create a audio Element
let track = document.createElement('audio');

let All_song = [
  {
    name: '5 Prateek Kuhad Songs',
    path: 'music/5 Prateek Kuhad Songs.mp3',
    img: 'images/img 1.jpg',
    singer: 'Prateek Kuhad',
  },
  {
    name: 'Apocalypse',
    path: 'music/Apocalypse.mp3',
    img: 'images/img 2.jpg',
    singer: 'Cigarettes After Sex',
  },
  {
    name: 'Blinding Lights',
    path: 'music/Blinding Lights.mp3',
    img: 'images/img 3.jpg',
    singer: 'The weekend',
  },
  {
    name: 'Free love',
    path: 'music/Free love.mp3',
    img: 'images/img 4.jpg',
    singer: 'Honne',
  },
  {
    name: 'Ghost',
    path: 'music/Ghost.mp3',
    img: 'images/img 5.jpg',
    singer: 'Justin Bieber',
  },
  {
    name: 'Home',
    path: 'music/Home.mp3',
    img: 'images/img 6.jpg',
    singer: 'Edith Whiskers',
  },
  {
    name: 'I am a ghost but it hurts',
    path: 'music/I am a ghost but it hurts.mp3',
    img: 'images/img 7.jpg',
    singer: 'Rxseboy',
  },
  {
    name: 'I Like Me Better',
    path: 'music/I Like Me Better.mp3',
    img: 'images/img 8.jpg',
    singer: 'Lauv',
  },
  {
    name: 'I love you baby',
    path: 'music/I love you baby.mp3',
    img: 'images/img 9.jpg',
    singer: 'Surf Mesa',
  },
  {
    name: 'I Will Survive',
    path: 'music/I Will Survive.mp3',
    img: 'images/img 10.jpg',
    singer: 'Demi Lovato',
  },
  {
    name: 'Khaabon Ke Parinday',
    path: 'music/Khaabon Ke Parinday.mp3',
    img: 'images/img 11.jpg',
    singer: 'Mohit Alyssa Mendonsa & Mohit Chauhan',
  },
  {
    name: 'Kho Gaye Hum Kaha',
    path: 'music/Kho Gaye Hum Kaha.mp3',
    img: 'images/img 12.jpg',
    singer: 'Jasleen Royal',
  },
  {
    name: 'Khwaja Mere Khwaja',
    path: 'music/Khwaja Mere Khwaja.mp3',
    img: 'images/img 13.jpg',
    singer: 'A. R. Rahman',
  },
  {
    name: 'Let Her Go',
    path: 'music/Let Her Go.mp3',
    img: 'images/img 14.jpg',
    singer: 'Passenger',
  },
  {
    name: 'Levitating',
    path: 'music/Levitating.mp3',
    img: 'images/img 15.jpg',
    singer: 'Dua Lipa',
  },
  {
    name: 'Lose Yourself',
    path: 'music/Lose Yourself.mp3',
    img: 'images/img 16.jpg',
    singer: 'Eminem',
  },
  {
    name: 'Memories',
    path: 'music/Memories.mp3',
    img: 'images/img 17.jpg',
    singer: 'Maroon 5',
  },
  {
    name: 'Night changes',
    path: 'music/Night changes (slowed reverb).mp3',
    img: 'images/img 18.jpg',
    singer: 'One Direction',
  },
  {
    name: 'Peaches',
    path: 'music/Peaches.mp3',
    img: 'images/img 19.jpg',
    singer: 'Justin Bieber',
  },
  {
    name: 'PLAY DATE',
    path: 'music/PLAY DATE.mp3',
    img: 'images/img 20.jpg',
    singer: 'Melanie Martinez',
  },
  {
    name: 'Rockabye',
    path: 'music/Rockabye.mp3',
    img: 'images/img 21.jpg',
    singer: 'ANNE MARIE',
  },
  {
    name: 'Adore You',
    path: 'music/Adore You.mp3',
    img: 'images/img 22.jpg',
    singer: 'Harry Styles',
  },
  {
    name: 'Watermelon Sugar',
    path: 'music/Watermelon Sugar.mp3',
    img: 'images/img 23.jpg',
    singer: 'Harry Styles',
  },
  {
    name: 'Treat People with Kindness',
    path: 'music/Treat People with Kindness.mp3',
    img: 'images/img 24.jpg',
    singer: 'Harry Styles',
  },
  {
    name: 'S U R R E N D E R',
    path: 'music/S U R R E N D E R - (slowed down).mp3',
    img: 'images/img 25.jpg',
    singer: 'Natalie Taylor',
  },
  {
    name: 'See You Again',
    path: 'music/See You Again.mp3',
    img: 'images/img 26.jpg',
    singer: 'Wiz Khalifa',
  },
  {
    name: 'Story of my life',
    path: 'music/Story of my life.mp3',
    img: 'images/img 27.jpg',
    singer: 'One Direction',
  },
  {
    name: 'Sunflower',
    path: 'music/Sunflower.mp3',
    img: 'images/raw.png',
    singer: 'Post Malone',
  },
  {
    name: 'The Real Slim Shady',
    path: 'music/The Real Slim Shady.mp3',
    img: 'images/img 28.jpg',
    singer: 'Eminem',
  },
  {
    name: 'Thinking out loud',
    path: 'music/Thinking out loud (slowed reverb).mp3',
    img: 'images/img 29.jpg',
    singer: 'Ed Sheeran',
  },
];

// Function to load the track
function load_track(index_no) {
  clearInterval(timer);
  reset_slider();

  track.src = All_song[index_no].path;
  title.innerHTML = All_song[index_no].name;
  track_image.src = All_song[index_no].img;
  artist.innerHTML = All_song[index_no].singer;
  track.load();

  timer = setInterval(range_slider, 1000);
  // total = All_song.length;
  // present = index_no + 1;
}

load_track(index_no);

//mute sound function
function mute_sound() {
  track.volume = '0';
  volume.value = '0';
  volume_show.innerHTML = 0;
}

// reset song slider
function reset_slider() {
  slider.value = 0;
}

// check the song is playong or not
function justplay() {
  if (Playing_song == false) {
    playsong();
  } else {
    pausesong();
  }
}

// play song
function playsong() {
  track.play();
  Playing_song = true;
  play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
}

//pause song
function pausesong() {
  track.pause();
  Playing_song = false;
  play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}

// next song
function next_song() {
  if (index_no < All_song.length - 1) {
    index_no += 1;
    load_track(index_no);
    playsong();
  } else {
    index_no = 0;
    load_track(index_no);
    playsong();
  }
}

// previous song
function previous_song() {
  if (index_no > 0) {
    index_no -= 1;
    load_track(index_no);
    playsong();
  } else {
    index_no = All_song.length;
    load_track(index_no);
    playsong();
  }
}

// change volume
function volume_change() {
  volume_show.innerHTML = recent_volume.value;
  track.volume = recent_volume.value / 100;
}

// change slider position
function change_duration() {
  slider_position = track.duration * (slider.value / 100);
  track.currentTime = slider_position;
}

// autoplay function
function autoplay_switch() {
  if (autoplay == 1) {
    autoplay = 0;
    auto_play.style.background = 'rgba(255,255,255,0.2)';
  } else {
    autoplay = 1;
    auto_play.style.background = '#40c057';
  }
  console.log(autoplay);
}

function range_slider() {
  let position = 0;

  // update slider position
  if (!isNaN(track.duration)) {
    position = track.currentTime * (100 / track.duration);
    slider.value = position;
  }

  // function will run when the song is over
  if (track.ended) {
    play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
    if (autoplay === 1) {
      index_no += 1;
      load_track(index_no);
      pausesong();
      playsong();
    }
  }
}
