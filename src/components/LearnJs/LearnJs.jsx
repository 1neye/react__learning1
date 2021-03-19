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
    let equalArr = [4, 4, 4, 4, 5, 4, 4, 4]
    let equalNumbersFunc = () => {
        if (equalArr[0] == equalArr[1]) {
            equalArr.shift()
            equalArr.shift()
        } else {
            return console.log(equalArr[0])
        }

    }
    let numPlusFunc = (num) => {
        num = prompt('Num?')
        let count = 1;
        let result = 0;
        while (num >= count) {
            result += count
            count++
        }
        alert(result)
    }

    let shortWordsFunc = () => {
        let words = 'loll kekkghj qweqweghj'
        let s = words.split(' ')
        let a = Infinity
        for (let i = 0; i < s.length; i++) {
            a = Math.min(s[i], a)
            console.log(a)
        }
    }

    let reverseWordsFunc = () => {
        let word = 'Anime';
        let arr = []
        let result = '';
        for (let i = 0; i < word.length; i++) {
            arr.push(word[i])
        }
        while (result.length < word.length) {
            result += arr.pop();
        }
        console.log(result)

    }
    let forInFunc = () => {
        let arr = [1, 2, 3, 4, 5, 6, 7]
        for (let key in arr) {
            console.log(arr[key])
        }
    }
    let forEachFunc = () => {
        let arr = [1, 2]
        arr.forEach(alert)
    }

    let oddOrEvenArrFunc = () => {
        let arr = [1, 2, ]
        let result = 0;
        for(let i = 0; i < arr.length; i++){
            result += arr[i];
        }

        if (result % 2 == 0) {
            alert('even')
        }
        else {
            alert('odd')
        }
    console.log(result)
}
    return (
        <div>
            <span onClick={() => alert(`Privet ${name}`)}> Обратные кавычки ``</span>
            <div onClick={() => promtFunction()}>Тринарное выражение</div>
            <div onClick={() => ifTask()}> if else task</div>
            <div onClick={() => whileFunc()}>While loop</div>
            <div onClick={() => changeNumFunc()}>Change number</div>
            <div onClick={() => equalNumbersFunc()}>Find same numbers in one array</div>
            <div onClick={() => numPlusFunc()}>Write a program that finds the summation of every number from 1 to num.
                The number will always be a positive integer greater than 0.
            </div>
            <div onClick={() => shortWordsFunc()}>Shortest words</div>
            <div onClick={() => reverseWordsFunc()}>Reverse words</div>
            <div onClick={() => forInFunc()}>for in for arr</div>
            <div onClick={() => forEachFunc()}>forEch</div>
            <div onClick={() => oddOrEvenArrFunc()}>Sum array. And output odd or even</div>
        </div>
    )
}

export default LearnJs