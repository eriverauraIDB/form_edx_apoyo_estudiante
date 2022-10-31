const form = document.getElementById("subdmitForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

//   inputs values
  const inputName = document.getElementById("inputName").value;
  const inputEmail = document.getElementById("inputEmail").value;
  const inputDescription = document.getElementById("inputDescription").value;
  const inputIssue = document.getElementById("inputIssue").value;
  const inputCourse = document.getElementById("inputCourse").value;
  const browserSelected =  document.querySelector('input[name=browserSelected]:checked').value;
  const inputSystemOperativeSelect =  document.querySelector('input[name=systemOperativeSelect]:checked').value;
  console.log(inputName,inputEmail, inputDescription, inputIssue, inputCourse, browserSelected,inputSystemOperativeSelect )

  if (inputName == '' || inputEmail == '' || inputDescription == '' || inputIssue == '' || inputCourse == '') {
    alert("Name must be filled out");
    return false;
  }
});
