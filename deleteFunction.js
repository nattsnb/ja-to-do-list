export function deleteOnClick (button, whatToDelete) {
    button.addEventListener("click", function () {
        whatToDelete.remove();
    })
}

