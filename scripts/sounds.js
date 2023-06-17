export default function Sounds(){
    const backgroundSound = new Audio("../assets/sounds/audios_bg-audio.mp3");
    const buttonPress = new Audio("../assets/sounds/audios_button-press.wav");
    const endTime = new Audio("../assets/sounds/audios_kichen-timer.mp3");

    backgroundSound.loop

    function btnPressOn(){
        buttonPress.play()
    }

    function timeEnd(){
        endTime.play()
    }


    return {
        backgroundSound,
        btnPressOn,
        timeEnd
    }
}