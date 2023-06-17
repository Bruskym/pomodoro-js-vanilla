export default function Controls({
    playBtn,
    stopBtn,
    pauseBtn,
    setBtn,
    buttonSoundOn,
    buttonSoundOff,
    modalInput,
})
{

    function play(){
        playBtn.classList.add("hide");
        stopBtn.classList.remove("hide");
        pauseBtn.classList.remove("hide");
        setBtn.classList.add("hide");

    }

    function pause(){
        playBtn.classList.remove("hide");
        pauseBtn.classList.add("hide");
    }

    function toggleSoundsBtn(){
        buttonSoundOn.classList.toggle("hide");
        buttonSoundOff.classList.toggle("hide");
    }

    function reset(){
        playBtn.classList.remove("hide");
        stopBtn.classList.add("hide");
        pauseBtn.classList.add("hide");
        setBtn.classList.remove("hide");
    }

    function getMinutes(){
        const newMinutes = modalInput.value

        const newMinutesIsNotANumber = isNaN(newMinutes);

        if(!newMinutes || newMinutesIsNotANumber){
            return false;
        }
        
        return newMinutes;
    }

    return{
        reset,
        play,
        pause,
        getMinutes,
        toggleSoundsBtn,
    };
}