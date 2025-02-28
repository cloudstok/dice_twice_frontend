// // soundSettings.js
import { Howl, Howler } from "howler";
import BgMusic from "../sound/music_first_8s.4f9c6ce0.mp3";
import PlaceBet from "../sound/placebet.ea58996c.mp3";
// import WinSound from "../sound/hit_win.mp4";
// import WhiteLineSound from "../sound/line_result_start (1).mp4";
import ButtonSound from "../sound/buttons.a48a7a1a.mp3";
import ClickSound from "../sound/b2.0f43697c.mp3";

let bgMusic;
let placedBet;
// let winSound;
// let whiteLineSound;
let buttonSound;
let clickSound;
let sound = true;

export function loadSounds() {
  bgMusic = new Howl({
    src: [BgMusic],
    html5: false,
    volume: 0.5,
    loop: true,
    onloaderror: (error) => { },
    onload: () => { },
    onplayerror: (error) => { },
  });

  placedBet = new Howl({
    src: [PlaceBet],
    html5: false,
    volume: 1,
    loop: false,
    onloaderror: (error) => { },
    onload: () => { },
    onplayerror: (error) => { },
  });

  clickSound = new Howl({
    src: [ClickSound],
    html5: false,
    volume: 1,
    loop: false,
    onloaderror: (error) => { },
    onload: () => { },
    onplayerror: (error) => { },
  });

  //   winSound = new Howl({
  //     src: [WinSound],
  //     html5: false,
  //     volume: 1,
  //     loop: false,
  //     onloaderror: (error) => {},
  //     onload: () => {},
  //     onplayerror: (error) => {},
  //   });

  //   whiteLineSound = new Howl({
  //     src: [WhiteLineSound],
  //     html5: false,
  //     volume: 1,
  //     loop: false,
  //     onloaderror: (error) => {},
  //     onload: () => {},
  //     onplayerror: (error) => {},
  //   });

  buttonSound = new Howl({
    src: [ButtonSound],
    html5: false,
    volume: 0.7,
    loop: false,
    onloaderror: (error) => { },
    onload: () => { },
    onplayerror: (error) => { },
  });
}
// export function setBgMusicVolume(volume) {
//   if (bgMusic) {
//     bgMusic.volume(volume);
//   }
// }
// export function setSoundVolume(volume) {
//   if (lossSound) lossSound.volume(volume);
//   if (winSound) winSound.volume(volume);
//   if (whiteLineSound) whiteLineSound.volume(volume);
// }
export function playBgMusic() {
  if (bgMusic && !bgMusic.playing()) {
    bgMusic.play();
  }
}

export function pauseBgMusic() {
  if (bgMusic && bgMusic.playing()) {
    bgMusic.pause();
  }
}

export function playPlacedBet() {
  if (placedBet && !placedBet.playing()) {
    placedBet.play();
  }
}

export function pausePlacedBet() {
  if (placedBet && placedBet.playing()) {
    placedBet.pause();
  }
}

export function playClickSound() {
  if (clickSound && !clickSound.playing()) {
    clickSound.play();
  }
}

export function pauseClickSound() {
  if (clickSound && clickSound.playing()) {
    clickSound.pause();
  }
}

// export function playWinSound() {
//   if (winSound && !winSound.playing()) {
//     winSound.play();
//   }
// }

// export function pauseWinSound() {
//   if (winSound && winSound.playing()) {
//     winSound.pause();
//   }
// }

// export function playWhiteLine() {
//   if (whiteLineSound && !whiteLineSound.playing()) {
//     whiteLineSound.play();
//   }
// }

// export function pauseWhiteLine() {
//   if (whiteLineSound && whiteLineSound.playing()) {
//     whiteLineSound.pause();
//   }
// }

export function playButtonSound() {
  if (buttonSound && !buttonSound.playing()) {
    buttonSound.play();
  }
}

export function pauseButtonSound() {
  if (buttonSound && buttonSound.playing()) {
    buttonSound.pause();
  }
}

export function playSound() {
  if (sound) {
    placedBet.mute(false);
    // winSound.mute(false);
    // whiteLineSound.mute(false);
    buttonSound.mute(false);
    clickSound.mute(false);
  }
}

export function pauseSound() {
  placedBet.mute(true);
  // winSound.mute(true);
  // whiteLineSound.mute(true);
  buttonSound.mute(true);
  clickSound.mute(true);
}

export const setMuted = (muted) => {
  Howler.mute(muted);
};

loadSounds();
