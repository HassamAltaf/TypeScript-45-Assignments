// Q6: Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

let white_space = "\n\t Hassam Ul Haq \t\n"
console.log(white_space)

let withoutwhiteSpace = white_space.trim()
console.log(withoutwhiteSpace)
