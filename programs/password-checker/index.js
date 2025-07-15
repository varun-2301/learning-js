/**
 * Password Checker Program
 * This program checks the strength of a password based on length and character variety.
 * It returns a message indicating whether the password is strong or weak.
 * Criteria for a strong password:
 *  - At least 8 characters long
 *  - Contains at least one uppercase letter
 *  - Contains at least one lowercase letter
 *  - Contains at least one digit
 *  - Contains at least one special character (e.g., !@#$%^&*()-_=+[]{}|;:'",.<>?/)
 * Response Levels
 * Level 1: If password matches any 1 of the criteria
 * Level 2: If password matches any 2 or 3 of the criteria
 * Level 3: If password matches all 4 or 5 criteria 
 * Weak Password: If password matches none of the criteria or if it is empty
 */

function checkPasswordStrength(password) {
    if (!password) return "Weak Password";

    const criteria = {
        length: password.length >= 8,
        uppercase: /[A-Z]/.test(password),
        lowercase: /[a-z]/.test(password),
        digit: /\d/.test(password),
        specialChar: /[!@#$%^&*()\-_=+[\]{}|;:'",.<>?]/.test(password)
    };

    const matchedCriteria = Object.values(criteria).filter(Boolean).length;

    if (matchedCriteria === 0) {
        return "Weak Password";
    } else if (matchedCriteria === 1) {
        return "Level 1";
    } else if (matchedCriteria <= 3) {
        return "Level 2";
    } else {
        return "Level 3";
    }
}

// Example usage
const password1 = "Password123";
console.log(checkPasswordStrength(password1)); // Level 3