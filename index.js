import axios from "axios"; 

const getData = async (user_id) => {
    const {data:Users} = await axios("https://jsonplaceholder.typicode.com/users/" + user_id)
    const {data:Posts} = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + user_id)
    
    return {Users,Posts};
}

let result = await getData(2)
console.log(result);