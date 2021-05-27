const submit = document.getElementById('submit');
const tabethetable = document.getElementById('table');

    const one = document.querySelector('.one');
    const two = document.querySelector('.two');
    const three = document.querySelector('.three');
    const four = document.querySelector('.four');
    const five = document.querySelector('.five');
    let result = [];
    function calcGrade(marks){
        if(marks >= 450)
            return 'A';
        else if(marks >= 400)
            return 'B';
        else if(marks >= 300)
            return 'C';
        else    
            return 'D';
    }

        submit.addEventListener('click', e => {
            e.preventDefault();
            let sum = 0;
            for (let i = 0; i < one.children.length; i++){
                sum += Number(one.children[i].value);                
            }
            result.push(sum)
            sum = 0
            for (let i = 0; i < two.children.length; i++){
                sum += Number(two.children[i].value);
            }
            result.push(sum)
            sum = 0
            for (let i = 0; i < three.children.length; i++){
                sum += Number(three.children[i].value);
            } 
            result.push(sum)
            sum = 0
            for (let i = 0; i < four.children.length; i++){
                sum += Number(four.children[i].value);
            }
            result.push(sum)
            sum = 0
            for (let i = 0; i < five.children.length; i++){
                sum += Number(five.children[i].value);
                // console.log(five.children[i].value);
            }
            result.push(sum)
            // console.log(result);
            // alert(`Student 1: ${result[0]}\nStudent 2: ${result[1]}\nStudent 3: ${result[2]}\nStudent 4: ${result[3]}\nStudent 5: ${result[4]}\n`);
            // console.log(one.children[0].value);
            tabethetable.innerHTML = `<table border='1'>
            <tr>
            <td>${result[0]}</td><td>${result[1]}</td><td>${result[2]}</td><td>${result[3]}</td><td>${result[4]}</td>
            </tr>
            <tr>
            <td>${calcGrade(result[0])}</td><td>${calcGrade(result[1])}</td><td>${calcGrade(result[2])}</td><td>${calcGrade(result[3])}</td><td>${calcGrade(result[4])}</td>
            </tr>
            <table>`
});