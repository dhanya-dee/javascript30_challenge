// let elementsTagNameInput = [...document.getElementsByTagName('input')];

// var checkedTodos = [];
// elementsTagNameInput.filter(
//     (ele,index) => {
//         ele.addEventListener("click", () => {  //click is not checked as per project try this with onkeydown is pressed down
//             if(checkedTodos.length == 1){
//                 ele.checked = true;
//             }
//             if(checkedTodos.length <= 2 || !checkedTodos.includes(index)){
//                 ele.checked = true;
//                 checkedTodos.push(index);
//             }
//             if(checkedTodos.length > 2 || !ele.checked) { 
//                 checkedTodos.shift();
//                 unstrikeAllSelections();
//             }
//             //shiftkey is pressed down
//             strikeSelections(checkedTodos,index)
//         })
//     }
// );

// function strikeSelections(checkedTodos,index) {
//     if(checkedTodos[0] <= index <= checkedTodos[1]){
//         let isBetween = elementsTagNameInput.slice(checkedTodos[0],checkedTodos[1]+1);
//         if(isBetween.length){
//             isBetween.map((item) => { item.checked = true; } );
//         }
//     }
// }

// function unstrikeAllSelections(){
//     elementsTagNameInput.map((item) => { item.checked = false; } );
// }