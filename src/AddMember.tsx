import React from 'react'
import {useState, FormEvent} from 'react'
import {useHistory} from 'react-router-dom'

interface Member{
    name: string;
    email: string;
}

export function AddMember<Member>() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
const data = {
    name: name,
    email: email,
}
const history = useHistory();
const submitMember =(event: FormEvent)=>{
    event.preventDefault()
    fetch("http://localhost:3001/members/new", {
    method: "Post",
    body: JSON.stringify(data),
    headers: {"Content-Type": "application/json"}
    })
    .then(response => response.json())
    .then(json => history.push(`/users/${json.id}`))
}
return (
<section>
<h1> Members Page </h1>
<h2>Add Member</h2>
<form onSubmit={submitMember} >
<label htmlFor="name">Name</label>
<input type="text" id="name"  value={name} onChange={event=> {setName(event.target.value)}}/>
<label htmlFor="email">Email</label>
<input type="text" id="email"  value={email} onChange={event=> {setEmail(event.target.value)}}/>
<button type="submit" value="Add">add</button>
</form>
</section>
)};