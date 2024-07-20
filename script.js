document.getElementById('convert-btn').addEventListener('click', function() {
    const numberInput = document.getElementById('number').value.trim();
    const outputElement = document.getElementById('output');
    
    // Clear previous output
    outputElement.textContent = '';

    // Check if input is empty
    if (numberInput === '') {
        outputElement.textContent = 'Please enter a valid number';
        return;
    }

    // Convert input to integer
    const number = parseInt(numberInput);

    // Validate the range of input
    if (number < 1) {
        outputElement.textContent = 'Please enter a number greater than or equal to 1';
        return;
    }
    if (number > 3999) {
        outputElement.textContent = 'Please enter a number less than or equal to 3999';
        return;
    }

    // Define arrays for Roman numeral components
    const romanNumerals = [
        { value: 1000, numeral: 'M' },
        { value: 900, numeral: 'CM' },
        { value: 500, numeral: 'D' },
        { value: 400, numeral: 'CD' },
        { value: 100, numeral: 'C' },
        { value: 90, numeral: 'XC' },
        { value: 50, numeral: 'L' },
        { value: 40, numeral: 'XL' },
        { value: 10, numeral: 'X' },
        { value: 9, numeral: 'IX' },
        { value: 5, numeral: 'V' },
        { value: 4, numeral: 'IV' },
        { value: 1, numeral: 'I' }
    ];

    // Function to convert number to Roman numeral
    function convertToRoman(num) {
        let roman = '';
        for (let i = 0; i < romanNumerals.length; i++) {
            while (num >= romanNumerals[i].value) {
                roman += romanNumerals[i].numeral;
                num -= romanNumerals[i].value;
            }
        }
        return roman;
    }

    // Convert the input number to Roman numeral
    const romanResult = convertToRoman(number);

    // Output the Roman numeral
    outputElement.textContent = romanResult;
});
