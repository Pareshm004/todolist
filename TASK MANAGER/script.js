function addTask() {
    // Get the input element
    var input = document.getElementById("taskInput");

    // Check if the input element exists
    if (!input) {
        console.error("Input element not found!");
        return;
    }

    // Get the task from the input
    var task = input.value;
    input.value = "";

    // Check if the task is empty
    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    // Get the taskList element
    var taskList = document.getElementById("taskList");

    // Check if the taskList element exists
    if (!taskList) {
        console.error("Task list element not found!");
        return;
    }

    // Create a checkbox
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // Create a new list item
    var li = document.createElement("li");

    // Append the checkbox to the list item
    li.appendChild(checkbox);

    // Append the task text to the list item
    li.appendChild(document.createTextNode(task));

    // Append the list item to the taskList
    taskList.appendChild(li);
}
