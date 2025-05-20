function letter1Combinations(digits: string): string[] {
    if (digits.length === 0) return [];
  
    const phoneMap: Record<string, string> = {
      '2': 'abc', '3': 'def', '4': 'ghi',
      '5': 'jkl', '6': 'mno', '7': 'pqrs',
      '8': 'tuv', '9': 'wxyz'
    };
  
    let result: string[] = ['']; // Start with an empty string
  
    for (const digit of digits) {
      const letters = phoneMap[digit];
      const temp: string[] = [];
  
      for (const letter of letters) {
        for (const combination of result) {
          temp.push(combination + letter);
        }
      }
  
      result = temp;
    }
  
    return result;
  }
  
  // Example usage
  console.log(letter1Combinations("33"));
  