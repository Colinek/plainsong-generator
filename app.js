// A 65; B 66; C 67; D 68; E 69; F 70; G 71
// find notes list
var note = document.getElementById('notes');

// add EventListener to check for 'input' in the box
var pitch = note.addEventListener("input", function() {

  // get names of notes (the string)
  pitches = note.value.toUpperCase();
  // find length of song
  var lengthOfSong = pitches.length - 1;
  // change last note value to ascii
  var asc = pitches.charCodeAt(lengthOfSong);

  // calculate stepwise
  // calculate the next note:
  var nextAscUp = asc + 1;
  if(nextAscUp > 71) {
    nextAscUp = 65;
  }
  var nextAscDown = asc -1;
  if(nextAscDown < 65) {
    nextAscDown = 71;
  }
  // convert ascii to string
  var nextNoteUp = String.fromCharCode(nextAscUp);
  var nextNoteDown = String.fromCharCode(nextAscDown);
  // display the next notes
  var nextNotes = document.getElementById('propose');
  nextNotes.innerHTML = nextNoteUp + " or " + nextNoteDown;

  // calculate leaping
  // calculate the next note:
  var ascLeapUp = asc + 2;
  switch(ascLeapUp) {
    case 73:
    ascLeapUp = 66;
    break;
    case 72:
    ascLeapUp = 65;
    break;
    default:
    ascLeapUp;
  }
  var ascLeapDown = asc - 2;
  switch(ascLeapDown) {
    case 64:
    ascLeapDown = 71;
    break;
    case 63:
    ascLeapDown = 70;
    break;
    default:
    ascLeapDown;
  }
  // convert ascii to string
  var nextLeapUp = String.fromCharCode(ascLeapUp);
  var nextLeapDown = String.fromCharCode(ascLeapDown);
  // display the next notes
  var leapNotes = document.getElementById('leapropose');
  leapNotes.innerHTML = nextLeapUp + " or " + nextLeapDown;

  });
