
// Level 1

const getData = async ()=>{
    const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    return (await data).json()
    

}

getData()


// level 3

const getUser = (users)=>{
    const new_user = [];

    for(let i=0;i<users.length;i++){
        const newuser =  users[i]
        newuser.id=i

        new_user.push(newuser)
    }

    return new_user;
}

const student = [{
    name:'rahul'
},
{
    name:'man'
},]

const userrrr = getUser(student)
console.log(userrrr)