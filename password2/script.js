function generatePassword(length) {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const digits = '0123456789';
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';
    const allCharacters = lowercase + uppercase + digits + symbols;
  
    if (length < 10) {
      alert('Password length must be at least 10 characters!');
      return '';
    }
  
    // Ensure at least one of each character type
    const password = [
      lowercase[Math.floor(Math.random() * lowercase.length)],
      uppercase[Math.floor(Math.random() * uppercase.length)],
      digits[Math.floor(Math.random() * digits.length)],
      symbols[Math.floor(Math.random() * symbols.length)],
    ];
  
    // Fill the rest of the password length
    for (let i = password.length; i < length; i++) {
      password.push(allCharacters[Math.floor(Math.random() * allCharacters.length)]);
    }
  
    // Shuffle the password array and return as a string
    return password.sort(() => Math.random() - 0.5).join('');
  }
  
  document.getElementById('generate').addEventListener('click', () => {
    const length = parseInt(document.getElementById('length').value);
    const password = generatePassword(length);
    document.getElementById('password').value = password;
  });
  