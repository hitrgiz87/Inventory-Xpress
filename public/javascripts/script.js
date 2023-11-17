function showEditor(buttonId) {
  var editorContainer = document.getElementById('editor-container');
  var overlay = document.getElementById('overlay');

  // Customize the content based on the button clicked
  var itemNameLabel = '';
  var buttonText = '';

  switch (buttonId) {
    case 'NewUserBtn':
      itemNameLabel = 'New User Name:';
      buttonText = 'Add User';
      break;

    case 'EditUserBtn':
      itemNameLabel = 'Edit User Name:';
      buttonText = 'Update User';
      break;

    case 'DeleteUserBtn':
      itemNameLabel = 'User to Delete:';
      buttonText = 'Delete User';
      break;

    case 'NewAssetBtn':
      itemNameLabel = 'New Asset Name:';
      buttonText = 'Add Asset';
      break;

    case 'EditAssetBtn':
      itemNameLabel = 'Edit Asset Name:';
      buttonText = 'Update Asset';
      break;

    case 'DeleteAssetBtn':
      itemNameLabel = 'Asset to Delete:';
      buttonText = 'Delete Asset';
      break;

    case 'CheckOutBtn':
      itemNameLabel = 'Item to Check Out:';
      buttonText = 'Check Out';
      break;

    default:
      // Handle other cases if needed
      break;
  }

  
  editorContainer.innerHTML = `
    <h2>Edit/Add Item</h2>
    <label for="itemName">${itemNameLabel}</label>
    <input type="text" id="itemName" name="itemName">



    <button onclick="saveAndClose()">${buttonText}</button>
    <button onclick="closeEditor()">Cancel</button>
  `;

  // Show the editor container
  editorContainer.style.display = 'block';
  overlay.style.display = 'block';
}
  


  
  function closeEditor() {
    // Hide the editor and overlay
    document.getElementById('editor-container').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
  }
  
  function saveAndClose() {
    // Add your logic to save the data here
    // After saving the data, close the editor
    closeEditor();
  }
  