import { formatNumberWithLeadingZeros } from "./utils.js";
import Sounds from "./sounds.js";

export default function Timer(
{
    minutesDisplay,
    secondsDisplay,
    resetControls,
}
){
    let timerTimeout;
    let initialMinutes = Number(minutesDisplay.innerText);

    function updateTimeDisplay(minutes, seconds){
        minutesDisplay.innerText = formatNumberWithLeadingZeros(minutes);
        secondsDisplay.innerText = formatNumberWithLeadingZeros(seconds);
    }

    function updateMinutes(newMinutes){
        initialMinutes = newMinutes
    }

    function resetTimer(){
        clearTimeout(timerTimeout);
        updateTimeDisplay(initialMinutes, 0)
    }

    function stopTimer(){
        clearTimeout(timerTimeout);
    }

    function counter(){
        let minutes = Number(minutesDisplay.innerText);
        let seconds = Number(secondsDisplay.innerText);

        if(seconds <= 0){
            seconds = 60;
            minutes -= 1;
        }
        seconds -= 1;
            
        if(minutes >= 0){
            updateTimeDisplay(minutes, seconds);
            countDown();
        }
        else{    
            resetControls();
            resetTimer();
            Sounds().timeEnd();
            return;
        }
    }

    function countDown(){
        timerTimeout = setTimeout(counter, 998);
    }

    return {
        countDown,
        resetTimer,
        updateTimeDisplay,
        stopTimer,
        updateMinutes
    };

}
