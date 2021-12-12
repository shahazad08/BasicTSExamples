let pid:string | number
pid=22

// Enum
enum Direction1 {
    Up=1,
    Down,
    Left,
    Right
}
console.log(Direction1.Left);

enum Direction2 {
    Up='Up',
    Down='Down',
    Left='Left',
    Right='Right'
}
console.log(Direction2.Left);

const ColorRed=0;
const ColorGreen=1;
const ColorBlue=2

enum Color { Red=0, Green=1, Blue=2, Purple=3 }
let backgroundColor=Color.Red
console.log(backgroundColor);
