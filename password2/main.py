import secrets
import string

def generate_password(length=12):
    if length < 10:
        raise ValueError("The minimum password length must be at least 10 characters.")
    
    # Allowed characters
    lowercase_letters = string.ascii_lowercase
    uppercase_letters = string.ascii_uppercase
    digits = string.digits
    symbols = string.punctuation
    
    # Ensure at least one character from each type is included
    required_characters = [
        secrets.choice(lowercase_letters),
        secrets.choice(uppercase_letters),
        secrets.choice(digits),
        secrets.choice(symbols),
    ]
    
    # Fill the rest of the password with random choices from all types
    all_characters = lowercase_letters + uppercase_letters + digits + symbols
    remaining_characters = [secrets.choice(all_characters) for _ in range(length - len(required_characters))]
    
    # Combine and shuffle the characters to generate the final password
    password = required_characters + remaining_characters
    secrets.SystemRandom().shuffle(password)
    
    return ''.join(password)

# Generate a secure password with a length of 12 characters
print(generate_password(12))
