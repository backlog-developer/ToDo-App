export function CreateToDo(){
    return <div>
        <input type ="text" placeholder="title"></input> <br />
        <input type ="description" placeholder="description"></input> <br />
    
        <button>Add  a ToDo</button>
    </div>
}

// the only thing its define in a seprate file so you need  to export it and import it into App.jsx 
// 2 way two export :-
/***
 * 1st way:-
 function CreateToDo(){....
 .......} and at the end 

 module.exports = {
 CreateToDo,
 };
 
 * 2nd way :-
 
export function CreateToDo(){....
....}
:- by adding export before function 

 */