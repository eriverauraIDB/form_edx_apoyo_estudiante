const form = document.getElementById("subdmitForm");

//modal
const modal_dispatch = (icon, mssg_response, className) => {
  // Get the modal
  const modal = document.getElementById("myModal");
  const btnClosed = document.getElementById("closeModal_button");
  const spanClosed = document.getElementById("closeModal_span");
  const mssgModal = document.getElementById("modal-body");

  //Show modal
  modal.style.display = "block";
  mssgModal.innerHTML = `<span class="material-symbols-outlined ${className}">${icon}</span><p class="modal-body-text">${mssg_response}</p>`
  // When the user clicks on <button> (x), close the modal
  btnClosed.onclick = () => {
    modal.style.display = "none";
  };
  spanClosed.onclick = () => {
    modal.style.display = "none";
  };
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = (e) => {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  };
};

const selectedRadioButton = (browserSelected) => {
  let selectedRadioButton;
  for (const radioButton of browserSelected) {
    if (radioButton.checked) {
      selectedRadioButton = radioButton.value;
      break;
    }
  }
  return selectedRadioButton;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  //   inputs values
  const inputName = document.getElementById("inputName").value;
  const inputEmail = document.getElementById("inputEmail").value;
  const inputDescription = document.getElementById("inputDescription").value;
  const inputIssue = document.getElementById("inputIssue").value;
  const inputCourse = document.getElementById("inputCourse").value;
  const browserSelected = document.querySelectorAll(
    'input[name="browserSelected"]'
  );
  const inputSystemOperativeSelect = document.querySelectorAll(
    'input[name="systemOperativeSelect"]'
  );
  const selectedRadioBrowserSelected = selectedRadioButton(browserSelected);
  const selectedRadioInputSystemOperativeSelect = selectedRadioButton(
    inputSystemOperativeSelect
  );
  const uploadFileEle = document.getElementById("formFile");
  let formData = new FormData();
  formData.append("uploadFileEle", uploadFileEle);
 
  //validation
  if (
    inputName == "" ||
    inputEmail == "" ||
    inputDescription == "" ||
    inputIssue == "" ||
    inputCourse == ""
  ) {

    //add className error validation
    const classListForm = document.getElementsByClassName("form_control_input");
    let element;
    for (let index = 0; index < classListForm.length; index++) {
      element = classListForm[index];
      element.classList.add("form-controlE");
    }
    modal_dispatch("error", "Por favor, completa tu formulario", 'error');
    window.addEventListener("click", function (e) {
      for (let index = 0; index < classListForm.length; index++) {
        element = classListForm[index];
        element.classList.remove("form-controlE");
      }
    });
  } else {
    fetch("/upload/image", { method: "POST", body: formData });
      console.log(
        inputName,
        inputEmail,
        inputDescription,
        inputIssue,
        inputCourse,
        uploadFileEle,
        selectedRadioBrowserSelected,
        selectedRadioInputSystemOperativeSelect
      );
    modal_dispatch("done", "El mensaje fue enviado", 'successfully');
  }
});
