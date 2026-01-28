function generatePassword() {
  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!#$%&()*+";

  const size = parseInt(document.getElementById("size").value);
  const nrLetters = parseInt(document.getElementById("letters").value);
  const nrNumbers = parseInt(document.getElementById("numbers").value);
  const nrSymbols = parseInt(document.getElementById("symbols").value);

  // Check empty inputs
  if (
    isNaN(size) ||
    isNaN(nrLetters) ||
    isNaN(nrNumbers) ||
    isNaN(nrSymbols)
  ) {
    alert("❌ Please fill all fields!");
    return;
  }

  const totalLength = nrLetters + nrNumbers + nrSymbols;

  // Validation
  if (size <= 0) {
    alert("❌ Password length must be greater than 0!");
    return;
  }

  if (totalLength !== size) {
    alert("❌ Total characters do not match password length!");
    return;
  }

  let passwordArray = [];

  // Add letters
  for (let i = 0; i < nrLetters; i++) {
    passwordArray.push(
      letters[Math.floor(Math.random() * letters.length)]
    );
  }

  // Add numbers
  for (let i = 0; i < nrNumbers; i++) {
    passwordArray.push(
      numbers[Math.floor(Math.random() * numbers.length)]
    );
  }

  // Add symbols
  for (let i = 0; i < nrSymbols; i++) {
    passwordArray.push(
      symbols[Math.floor(Math.random() * symbols.length)]
    );
  }

  // Shuffle password
  for (let i = passwordArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [passwordArray[i], passwordArray[j]] = [passwordArray[j], passwordArray[i]];
  }

  const finalPassword = passwordArray.join("");

  document.getElementById("result").innerText = finalPassword;

  // Strength indicator
  let strengthText = "";
  if (size <= 4) strengthText = "🔴 Weak Password";
  else if (size <= 6) strengthText = "🟡 Medium Password";
  else strengthText = "🟢 Strong Password";

  document.getElementById("strength").innerText = strengthText;
}
