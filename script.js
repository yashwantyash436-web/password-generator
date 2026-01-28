function generatePassword() {
  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!#$%&()*+";

  const size = parseInt(document.getElementById("size").value);
  const nrLetters = parseInt(document.getElementById("letters").value);
  const nrNumbers = parseInt(document.getElementById("numbers").value);
  const nrSymbols = parseInt(document.getElementById("symbols").value);

  // Validation: empty fields
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

  // Validation: match size
  if (totalLength !== size) {
    alert("❌ Please check the size!");
    return;
  }

  if (totalLength === 0) {
    alert("❌ Please enter at least one character!");
    return;
  }

  // Strength (EXACTLY like Python)
  let strengthText = "";
  if (totalLength <= 4) strengthText = "🔴 Easy password";
  else if (totalLength <= 6) strengthText = "🟡 Medium password";
  else strengthText = "🟢 Strong password";

  document.getElementById("strength").innerText = strengthText;

  let password = [];

  // Add letters
  for (let i = 0; i < nrLetters; i++) {
    password.push(
      letters[Math.floor(Math.random() * letters.length)]
    );
  }

  // Add numbers
  for (let i = 0; i < nrNumbers; i++) {
    password.push(
      numbers[Math.floor(Math.random() * numbers.length)]
    );
  }

  // Add symbols
  for (let i = 0; i < nrSymbols; i++) {
    password.push(
      symbols[Math.floor(Math.random() * symbols.length)]
    );
  }

  // BEFORE SHUFFLE (Python equivalent print)
  document.getElementById("beforeShuffle").innerText =
    "Password before shuffle: " + password.join("");

  // SHUFFLE (same as random.shuffle)
  for (let i = password.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [password[i], password[j]] = [password[j], password[i]];
  }

  // JOIN (same as "".join)
  const finalPassword = password.join("");

  // Final output
  document.getElementById("result").innerText =
    "Shuffled password: " + finalPassword;
}
