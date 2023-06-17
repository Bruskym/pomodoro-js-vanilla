import { elements } from "./elements.js";

export default function Event({
    controls,
    timer,
    sounds,
    modal
}
){

    const {} = elements

    elements.playBtn.onclick = (event) => {
        event.preventDefault();
        controls.play();
        timer.countDown();
        sounds.btnPressOn()
    };
    
    elements.stopBtn.onclick = (event) => {
        event.preventDefault();
        controls.reset();
        timer.resetTimer();
        sounds.btnPressOn()
    };
    
    elements.pauseBtn.onclick = (event) => {
        event.preventDefault();
        controls.pause();
        timer.stopTimer();
        sounds.btnPressOn()
    };
    
    elements.buttonSoundOn.onclick = (event) => {
        event.preventDefault();
        controls.toggleSoundsBtn();
        sounds.backgroundSound.play()
    };
    
    elements.buttonSoundOff.onclick = (event) => {
        event.preventDefault();
        controls.toggleSoundsBtn();
        sounds.backgroundSound.pause()
    };
    
    elements.setBtn.onclick = () =>{
        modal.openModal();
    };

    elements.modalOkButton.onclick = (event) => {
        event.preventDefault();
        let newMinutes = controls.getMinutes();
    
        if(!newMinutes){
            timer.resetTimer();
            return;
        }
        timer.updateMinutes(newMinutes);
        timer.updateTimeDisplay(newMinutes, 0);
        modal.closeModal();
    }

    elements.modalCancelButton.onclick = (event) => {
        event.preventDefault();
        timer.resetTimer();
        modal.closeModal()
    }
}