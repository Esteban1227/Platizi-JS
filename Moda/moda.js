const list = [1,2,3,4,5,5,5,1,1,1,1,1,1,2,3,4];


const listObjet = {};

list.map(
    function (element){
        if(listObjet[element]){
            listObjet[element] += 1;
        }
        else{
            listObjet[element] = 1;
        }
    }
)

const listArray = Object.entries(listObjet).sort(
    function(elementOne, elementTwo){
        return elementOne[1] - elementTwo[1];
    }
);

const moda = listArray[listArray.length - 1]



//Otra forma //

const NUMBERS = [2, 2, 2, 2, 2, 4, 5, 5, 5, 5, 5, 5, 5, 5, 9];

function mode(arr){
    return arr.sort((a,b) =>
        arr.filter(v => v===a).length
        - arr.filter(v => v===b).length
    ).pop();
}


console.log(mode(NUMBERS));

