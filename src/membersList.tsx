import React, { useState, useEffect } from 'react';
interface Member {
    id: number;
    name: string;
    email: string;
}

export function MemberList() {
  
    const [members, setMembers]=useState<Member[]>([])
    const [search, setSearch] = useState("");
    const [mode, setMode] = useState('Loading');


    useEffect(() => {
        setMode("Loading")
        fetch(`http://localhost:3001/members?search=${search}`)
            .then(response => response.json())
            .then(json => setMembers(json.members))
            .then(() => { setMode('Ready') })
    }, [search])



    return (
        <div>
            <h1>Members</h1>
            <label>
                <input type="text" value={search} onChange={(event) => { setSearch(event.target.value) }} ></input>
            </label>
            {mode === 'Ready' && <SearchResults members={members}></SearchResults>}
            {mode === 'Loading' && <p>Loading</p>}
        </div>
    );
}

interface MemberProps {
    id: number;
    name: string;
    email: string;
}

const MemberItem = (props: MemberProps) => {
    return <li><a href ={`http://localhost:3000/users/${props.id}`}>{props.name}, {props.email} </a></li>
};

interface SearchResultProps {
    members: Member[];

}

function SearchResults(props: SearchResultProps) {

    const memberList = props.members.map((member: MemberProps) => {
        return <MemberItem name={member.name} email={member.email} id={member.id}></MemberItem>
    })
    if (props.members.length === 0) {
        return (
            <p> No Results</p>
        )
    }

    return (

        <section>
            <h2>List of Members</h2>
            <a href ={"http://localhost:3000/add/member"}> Add Member</a>
            <ul>
                {memberList}
            </ul>
        </section>
    )
}