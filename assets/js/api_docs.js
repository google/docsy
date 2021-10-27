document.addEventListener("DOMContentLoaded", (event) => {
    document.querySelectorAll("div.method > .signature").forEach(
        signatureBox => {
            const boxHeight = signatureBox.clientHeight
            const textElem = signatureBox.querySelector(".name")
            const textElemHeight = textElem.offsetHeight
            console.log([boxHeight, textElemHeight])
            if (boxHeight >= (textElemHeight * 2.5)) {
                signatureBox.classList.add("wrapped-method-signature")
                // signatureBox.querySelectorAll(".param-list .param").forEach(
                //     paramElem => {
                //         paramElem.classList.add("wrapped-param")
                //     }
                // )
            }
        }
    )

    document.querySelectorAll('li.param-item > span.description').forEach(
        paramDescription => {
            if (paramDescription.innerHTML.includes("TODO_DESCRIPTION")) {
                paramDescription.style.display = 'none'

                if (paramDescription.previousElementSibling.classList.contains("param-desc-divider")) {
                    paramDescription.previousElementSibling.style.display = 'none'
                }
            }
        }
    )

    document.querySelectorAll('div.returns > span').forEach(
        returnValue => {
            if (returnValue.innerHTML === "TYPE") {
                returnValue.style.display = 'none'
            }
            else if (returnValue.innerHTML === "TODO") {
                returnValue.style.display = 'none'
            }
        }
    )
})
