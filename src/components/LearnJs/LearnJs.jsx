import React from "react"

let LearnJs = () => {
    let name = 'Illya'
    let promtFunction = () => {
        let allowed
        let age = prompt('Age?', '')
        allowed = (age >= 18) ? true : false
        alert(allowed)
    }

    let ifTask = () => {
        let a
        let idx = prompt('Число?', '')
        if (idx < 0 ) {
            a = 'idx less 0'
        }
        else if (idx > 0 ) {
            a = 'idx bigger then 0'
        }
        else if ( idx == 0) {
            a = 'its 0'
        }
        else {
            a = 'Nan'
        }
        alert(a)
    }
    return (
        <div>
            <span onClick={() =>alert(`Privet ${name}`)}> Обратные кавычки ``</span>
            <div onClick={() => promtFunction()}>Тринарное выражение</div>
            <div onClick={() => ifTask()}> if else task</div>
        </div>
    )
}

export default LearnJs