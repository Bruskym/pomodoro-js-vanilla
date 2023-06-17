import Controls from "./controls.js";
import Timer from "./timer.js";
import Sounds from "./sounds.js";
import { elements } from "./elements.js";
import Modal from "./modal.js";
import Event from "./events.js";

const minutesDisplay = document.querySelector(".minutes");
const secondsDisplay = document.querySelector(".seconds");


const controls = Controls(elements)

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset,
});

const sounds = Sounds();

const modal = Modal({
    modalWrapper: elements.modalWrapper,
    modalInput: elements.modalInput,
})

Event({controls, timer, sounds, modal})