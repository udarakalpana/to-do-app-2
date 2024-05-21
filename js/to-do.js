function createNewTask() {
    const inputItem = document.getElementById('taskInput').value

    if (inputItem === '') {
        alert('Please fill the task!')
        return
    }

    const listItem = document.createElement('li')
    listItem.textContent = inputItem

    // Create complete btn
    const completeBtn = document.createElement('button')
    completeBtn.appendChild(document.createTextNode('Complete'))
    listItem.appendChild(completeBtn)
    completeBtn.className = 'complete_btn'
    

    completeBtn.onclick = function() {
        listItem.className = 'completed_task'
    }

    // Delete btn part
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'Remove'
    deleteBtn.className = 'delete_btn'
    listItem.appendChild(deleteBtn)

    deleteBtn.onclick = function() {
        listItem.remove()
    }


    document.getElementById('taskList').appendChild(listItem)

}