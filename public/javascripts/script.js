

function showEditor(buttonId) {
  var editorContainer = document.getElementById('editor-container');
  var overlay = document.getElementById('overlay');


  // Customize the content based on the button clicked
  var itemNameLabel = '';
  var buttonText = '';


  switch (buttonId) {

    case 'NewUserBtn':
      userIDLabel = 'New User ID:';
      firstNameLabel = 'New User  First Name:';
      lastNameLabel = 'New User Last Name:';
      buttonText = 'Add User';

      editorContainer.innerHTML = `
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">

      <form action = "/users" method = "post">
      <h2>Edit/Add Item</h2>
      <div>
        <label class="label" for="userId">${userIDLabel}</label>
        <input type="number" id="userId" name="userId" min="0" step="1">
      </div>
    
      <div>
        <label class="label" for="firstName">${firstNameLabel}</label>
        <input type="text" id="firstName" name="firstName">
      </div>
    
      <div>
        <label class="label" for="lastName">${lastNameLabel}</label>
        <input type="text" id="lastName" name="lastName">
      </div>
    
      <div>
        <button class="btn btn-dark" onclick="saveAndClose()">${buttonText}</button>
        <button class="btn btn-dark" onclick="closeEditor()">Cancel</button>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    `;

      break;

    case 'EditUserBtn':
      userIDLabel = 'User ID:';
      firstNameLabel = 'User  First Name:';
      lastNameLabel = 'User Last Name:';
      buttonText = 'Edit User';

      editorContainer.innerHTML = `
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
      <form action = "/edit" method = "post">

      <h2>Edit/Add Item</h2>
      
      <div>
        <label class="label" for="userId">${userIDLabel}</label>
        <input type="number" id="userId" name="userId" min="0" step="1">
      </div>
    
      <div>
        <label class="label" for="firstName">${firstNameLabel}</label>
        <input type="text" id="firstName" name="firstName">
      </div>
    
      <div>
        <label class="label" for="lastName">${lastNameLabel}</label>
        <input type="text" id="lastName" name="lastName">
      </div>
    
      <div>
        <button class="btn btn-dark" onclick="saveAndClose()">${buttonText}</button>
        <button class="btn btn-dark" onclick="closeEditor()">Cancel</button>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    `;


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

      editorContainer.innerHTML = `
      <h2>Edit/Add Item</h2>
      <label for="itemName">${itemNameLabel}</label>
      <input type="text" id="itemName" name="itemName">
      <input type="text" id="itemName" name="itemName">
    
    
    
      <button onclick="saveAndClose()">${buttonText}</button>
      <button onclick="closeEditor()">Cancel</button>
    `;

      break;

    default:
      // Handle other cases if needed
      break;
  }




if (buttonId == 'NewAssetBtn' || buttonId == 'EditAssetBtn' || buttonId == 'DeleteAssetBtn'){

  editorContainer.innerHTML = `
  <h2>Edit/Add Item</h2>
  <label for="itemName">${itemNameLabel}</label>
  <input type="text" id="itemName" name="itemName">
  <input type="text" id="itemName" name="itemName">



  <button onclick="saveAndClose()">${buttonText}</button>
  <button onclick="closeEditor()">Cancel</button>
`;

}




const style = document.createElement('style');
style.textContent = `
  .label {
    display: inline-block;
    width: 200px; 
    height: 30px;
  }
`;
document.head.appendChild(style);

 


  


  // Show the editor container
  editorContainer.style.display = 'block';
  overlay.style.display = 'block';
}
  


  
  function closeEditor() {
    // Hide the editor and overlay
    document.getElementById('editor-container').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
  }
  
  async function saveAndClose() {
 
    closeEditor();
  }
  
  