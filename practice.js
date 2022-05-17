function myfunction ([y1, y2, ,y3, y4, y5]){
    const[x1, ...[result]] = y3

    console.log(result)

};

const myarray = ['rock', 'paper', 'sisors', 'lizard', 'spock'];

const pepe = [...myarray];

myfunction(myarray);