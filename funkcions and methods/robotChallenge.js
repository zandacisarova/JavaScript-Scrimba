const robot = document.querySelector('.robot')

let number = 0

function moveRobot() {
    number += 50
    console.log(number)
    robot.style.left = number + 'px'
}
robot.addEventListener('click', moveRobot)

//