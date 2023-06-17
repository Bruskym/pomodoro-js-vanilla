export default function Modal({modalWrapper, modalInput}){
    function openModal(){
        modalWrapper.classList.add("open");
        modalInput.value = "";
    }

    function closeModal(){
        modalWrapper.classList.remove("open");
    }

    return {
        openModal,
        closeModal
    }
}