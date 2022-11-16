function generatePassword() {
    
    let password = "";
    let allChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890~!@#$%^&*()_-+=<.>/?;:";
    
    let charsArray, char, matches;
    
    charsArray = allChars.split("");
    
    for (let i = 0; i < 10; i++) { 

        char = charsArray[Math.floor(Math.random() * charsArray.length)];
        
        if (char.match(/[^a-z\d]/i)) {
            matches = password.match(/[^a-z\d]/ig);
            if (Array.isArray(matches) && matches.length == 2) {
                while(char.match(/[^a-z\d]/i)) char = charsArray[Math.floor(Math.random() * charsArray.length)];
            }
        }

        if (char.match(/[A-Z]/)) {
            matches = password.match(/[A-Z]/g);
            if (Array.isArray(matches) && matches.length > 2) {
                while(char.match(/[A-Z]/) && matches.length > 2) char = charsArray[Math.floor(Math.random() * charsArray.length)];
            }
        }

        if (char.match(/\d/)) {
            matches = password.match(/\d/);
            if (Array.isArray(matches) && matches.length > 2) {
                while(char.match(/\d/) && matches.length > 2) char = charsArray[Math.floor(Math.random() * charsArray.length)];
            }
        }
        
        password += char;
    }
    document.getElementById("password").value = password;
}

generatePassword();