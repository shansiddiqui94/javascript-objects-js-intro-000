var playlist = {
  Fray: 'Found Me'
  Slowdive: 'Alison'
  }

  function updatePlaylist(playlist, artistName, songTitle){
    playlist['Slowdive'] = 'Alison'
    playlist['My Bloody Valentine'] = 'Sometimes'
    playlist['Phil Ochs'] = 'Here/s to the State of Mississippi'
        // This is braket Notation and we use it to assign key-value pairs
    return playlist
  }

  function removeFromPlaylist(playlist, artistName){

   delete playlist.artistName;
   return playlist
  }
