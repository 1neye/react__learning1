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
        if (idx < 0) {
            a = 'idx less 0'
        } else if (idx > 0) {
            a = 'idx bigger then 0'
        } else if (idx == 0) {
            a = 'its 0'
        } else {
            a = 'Nan'
        }
        alert(a)
    }
    let whileFunc = () => {
        let i = 0;
        while (i < 5) {
            i++
            alert(i)
        }
    }

    let changeNumFunc = () => {
        let getNum = prompt('Num?')
        let alertVar = (getNum < 0) ? alert(-getNum) : alert(-getNum)
        // if (getNum < 0) {
        //     alert(-getNum)
        // }
        // else {
        //     alert(-getNum)
        // }
    }
    let equalArr = [4, 4, 4, 4, 5, 4, 4 ,4]
    let equalNumbersFunc = () => {
        if (equalArr[0] == equalArr[1]) {
            equalArr.shift()
            equalArr.shift()
        }
        else {
            return console.log(equalArr[0])
        }

    }
    return (
        <div>
            <span onClick={() => alert(`Privet ${name}`)}> Обратные кавычки ``</span>
            <div onClick={() => promtFunction()}>Тринарное выражение</div>
            <div onClick={() => ifTask()}> if else task</div>
            <div onClick={() => whileFunc()}>While loop</div>
            <div onClick={() => changeNumFunc()}>Change number</div>
            <div onClick={() => equalNumbersFunc()}>Find same numbers in one array</div>
        </div>
    )
}

export default LearnJs