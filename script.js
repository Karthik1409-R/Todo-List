const taskInput = document.getElementById('taskInput');
const dateInput = document.getElementById('dateInput');
const statusSelect = document.querySelector('select');

function addTask() {
    const text = taskInput.value.trim();
    const date = dateInput.value;
    const status = statusSelect.value.toLowerCase();

    if (!text) {
        alert("Enter your Task");
        return;
    }

    // Create task card container
    const taskCard = document.createElement('div');
    taskCard.className = "bg-white p-4 rounded-xl border-[2px] border-gray-300 flex justify-between gap-2 items-start";

    // Create content section (text,date)
    const contentWrapper = document.createElement('div');
    contentWrapper.className = "flex flex-col gap-2";

    const textContentWithCheckBox = document.createElement('div');
    textContentWithCheckBox.className = 'flex gap-2 items-center'

    const taskText = document.createElement('span');
    taskText.textContent = text;
    taskText.className = "text-gray-800 text-[20px] font-medium";

    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox'
    checkBox.className = 'w-4 h-4 cursor-pointer'

    checkBox.onchange = () => {
    taskText.classList.toggle("line-through", checkBox.checked);
    };

    textContentWithCheckBox.appendChild(checkBox);
    textContentWithCheckBox.appendChild(taskText);

    const taskDate = document.createElement("span");
    taskDate.textContent = date ? `📅 ${date}` : "";
    taskDate.className = "text-sm text-gray-500";

    contentWrapper.appendChild(textContentWithCheckBox);
    if (date) contentWrapper.appendChild(taskDate);

    // Create button wrapper
    const buttonGroup = document.createElement("div");
    buttonGroup.className = "flex flex-col gap-2 ";

    // Edit button
    const editBtn = document.createElement("button");
    editBtn.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
    editBtn.className = "text-green-500 text-lg";
    editBtn.onclick = () => {
        const newText = prompt("Edit your task:", taskText.textContent);
        if (newText !== null) {
            taskText.textContent = newText.trim();
        }
    };

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = `<i class="fas fa-trash-alt"></i>`;
    deleteBtn.className = "text-red-500 text-lg";
    deleteBtn.onclick = () => taskCard.remove();

    buttonGroup.appendChild(editBtn);
    buttonGroup.appendChild(deleteBtn);

    // Add to task card
    taskCard.appendChild(contentWrapper);
    taskCard.appendChild(buttonGroup);


    // Append to correct column
    if (status === "to do") {
        document.getElementById("todo").appendChild(taskCard);
    } else if (status === "doing") {
        document.getElementById("doing").appendChild(taskCard);
    } else if (status === "done") {
        document.getElementById("done").appendChild(taskCard);
    }

    // Reset form
    taskInput.value = "";
    dateInput.value = "";
    statusSelect.value = "To do";

}
