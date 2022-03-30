// Level 1

const arr = [1, 2, 3];
const student = {name: 'Elie', rank: 'Pro'}

const res = arr.map((value)=>value+1)
console.log(res)


const allCal = arr.reduce((prev,curr)=>prev+curr)

console.log(allCal)

const striObj = JSON.stringify(student)

console.log(striObj)




// level 3

let user = [{
    name: "Elie",
    job: "Instructor",
    workDetails: {
        type: "Part Time",
        hours: "40 hours"
    },
    educationQualifications: [
        {
            name: "Full Stack",
            type: "Certification"
        },
        {
            name: "Javascript",
            type: "Certification"
        }
    ]
}]





user = user.map((my)=> {return my.name.toUpperCase()})

console.log(user)


