document.getElementById("login-btn").addEventListener("click", (e) => {
  e.preventDefault();
  const accountNumber = document.getElementById("number-input").value;
  const pinNumber = document.getElementById("pin-input").value;
  const convertedPin = Number(pinNumber);

  if (accountNumber.length === 11) {
    if (convertedPin == 1234) {
      window.location.href = "./main.html";
    } else {
      alert("Not Okay");
    }
  } else {
    alert("Need valid account number");
  }
});
