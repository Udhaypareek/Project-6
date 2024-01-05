let todo1 = document.getElementById("todo1");
let todo2 = document.getElementById("todo2");
let todo3 = document.getElementById("todo3");
let todo4 = document.getElementById("todo4");
let todo5 = document.getElementById("todo5");
let todo6 = document.getElementById("todo6");
let add = document.getElementById("add-btn");
let remove = document.getElementById("rem-btn");
let refresh = document.getElementById("ref-btn");

//Refresh buttom function

const refresh_todo = async () => {
    return new Promise((resolve, reject) => {
        for (let i = 1; i <= 6; i++) {
            let a = localStorage.getItem(i);
            console.log(a);
            if (a == null) {
                switch (i) {
                    case 1:
                        todo1.innerHTML = i + ".";
                        break;
                    case 2:
                        todo2.innerHTML = i + ".";
                        break;
                    case 3:
                        todo3.innerHTML = i + ".";
                        break;
                    case 4:
                        todo4.innerHTML = i + ".";
                        break;
                    case 5:
                        todo5.innerHTML = i + ".";
                        break;
                    case 6:
                        todo6.innerHTML = i + ".";
                        break;
                }
            }
            else {
                switch (i) {
                    case 1:
                        todo1.innerHTML = `${localStorage.getItem(i)}`;
                        break;
                    case 2:
                        todo2.innerHTML = `${localStorage.getItem(i)}`;
                        break;
                    case 3:
                        todo3.innerHTML = `${localStorage.getItem(i)}`;
                        break;
                    case 4:
                        todo4.innerHTML = `${localStorage.getItem(i)}`;
                        break;
                    case 5:
                        todo5.innerHTML = `${localStorage.getItem(i)}`;
                        break;
                    case 6:
                        todo6.innerHTML = `${localStorage.getItem(i)}`;
                        break;
                }
            }
        }
        resolve("success");
    })
}

refresh_todo();// To refresh the website at initial phace.

const add_todo = () => {
    return new Promise((resolve, reject) => {
        let key = prompt("Enter a no. b/w 1-6: ", null);
        let value = prompt("Enter your todo: ", null);
        localStorage.setItem(key, value);
        resolve("success");
    })
}

const remove_todo = async () => {
    return new Promise((resolve, reject) => {
        let key = prompt("Enter a no. b/w 1-6: ");
        localStorage.removeItem(key);
        resolve("success");
    })
}
// add.addEventListener("click", ()=>{
//     add_todo().then(() => {
//     refresh_todo();
//     })
//     console.log("clicked");
// });
// remove.addEventListener("click", ()=>{
//     remove_todo();
//     console.log("clicked");
// });
// refresh.addEventListener("click", ()=>{
//     refresh_todo();
//     console.log("clicked");
// });
// Add button click event handler
add.addEventListener("click", () => {
    add_todo().then(() => refresh_todo());
    console.log("clicked");
});

// Remove button click event handler
remove.addEventListener("click", () => {
    remove_todo().then(() => refresh_todo());
    console.log("clicked");
});

// Refresh button click event handler
refresh.addEventListener("click", () => {
    refresh_todo();
    console.log("clicked");
});
