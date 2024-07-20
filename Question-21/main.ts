// Q21: They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

interface ITCourse {
    name: string;
    location: string;
    onsiteStudents: number;
}

let ITCourse = {
    name: "TypeScript and Node.js",
    location: "Governor House Sindh",
    onsiteStudents: 50000
}

console.log(ITCourse);
