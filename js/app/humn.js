
export function humn(Left, Right){

    for (let i = 0; i <= 5; i++) {
        let soupLeft = document.querySelector('.hymn-left')
        let soupRight = document.querySelector('.hymn-right')
        soupLeft.innerHTML += `<span class="humn-text">О, горячий суп наварили,</span>
        <span class="humn-text">О, великий суп наварили,</span>
        <span class="humn-text">О, шикарный суп наварили</span>
        <span class="humn-text">О, великий суп наварили,</span>
        <span class="humn-text">Суп, горячий суп,</span>
        <span class="humn-text">Ешь суп, горячий суп.</span>
        <span class="humn-text"></span>`
        soupRight.innerHTML += `<span class="humn-text">О, горячий суп наварили,</span>
        <span class="humn-text">О, великий суп наварили,</span>
        <span class="humn-text">О, шикарный суп наварили</span>
        <span class="humn-text">О, великий суп наварили,</span>
        <span class="humn-text">Суп, горячий суп,</span>
        <span class="humn-text">Ешь суп, горячий суп.</span>
        <span class="humn-text"></span>`
    }
}

