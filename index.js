let form = document.createElement("form");
let input = document.createElement("input");
let buttonWrapper = document.createElement("div");
let button = document.createElement("button");

form.classList.add("input-group", "mb-3");
input.classList.add("form-control");
input.placeholder = "Введите название нового дела";
buttonWrapper.classList.add("input-group-append");
button.classList.add("btn", "btn-primary");
button.textContent = "Добавить дело";
button.disabled = true;

input.addEventListener('input', () => {
    button.disabled = input.value === "";
});

buttonWrapper.append(button);
form.append(input);
form.append(buttonWrapper);
document.body.append(form);

let list = document.createElement("ul");
list.classList.add("list-group");
form.after(list);

const createElement = () => {
    let item = document.createElement("li");
    buttonGroup = document.createElement("div");
    let doneButton = document.createElement("button");
    let deleteButton = document.createElement("button");
    item.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
    item.textContent = input.value;
    buttonGroup.classList.add("btn-group", "btn-group-sm");
    doneButton.classList.add("btn", "btn-success");
    doneButton.textContent = "Готово";
    deleteButton.classList.add("btn", "btn-danger");
    deleteButton.textContent = "Удалить";
    buttonGroup.append(doneButton);
    buttonGroup.append(deleteButton);
    buttonGroup.append(doneButton);
    buttonGroup.append(deleteButton);
    item.append(buttonGroup);
    list.append(item);
    input.value = "";
}


button.addEventListener("click", (e) => {
    e.preventDefault();
    if (!input.value) {
        return
    }
    createElement();
});



list.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-success")) {
        e.target.parentElement.parentElement.classList.toggle("list-group-item-success")
    }
})


list.addEventListener("click", (e) => {
    console.log(e)
    if (e.target.classList.contains("btn-danger")) {
        e.target.parentElement.parentElement.remove()
    }
})