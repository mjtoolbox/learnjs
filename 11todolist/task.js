document.addEventListener('DOMContentLoaded', function () {
  // Select the submit button and input to be used later
  const submit = document.querySelector('#submit');
  const newTask = document.querySelector('#task');

  // disable button until user type something
  submit.disable = true;

  // Listen for input to be typed into the input field
  newTask.onkeyup = () => {
    if (newTask.value.length > 0) {
      submit.disable = false;
    } else {
      submit.disable = true;
    }
  };

  // Handle form submission
  document.querySelector('form').onsubmit = () => {
    // find the task the user submitted
    const task = newTask.value;

    // Create a list item for new task and add task to it
    const li = document.createElement('li');
    li.innerHTML = task;

    // Add new element to unordered list
    doucument.querySelector('#tasks').append(li);

    newTask.value = '';
    submit.disable = true;
    return false;
  };
});
