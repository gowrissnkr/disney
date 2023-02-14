import React, { useState } from "react";
import Character from "./Character";
import { useSelector } from 'react-redux';
import "./Character.css"

const CharacterList = () => {



    const characters = useSelector((state) => state.characters.allCharacters.data)


    const [search, setSearch] = useState('')
    const [searchCharacter, setSearchCharacter] = useState('')
    const [filterCharacter, setFilterCharacter] = useState([])


    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(search)
        const searchById = characters.filter((character) => character._id === parseInt(search))
        setFilterCharacter(searchById)
    }

    const handleSubMission = (event) => {
        event.preventDefault()
        const searchByName = characters.filter((character) => character.name.toLowerCase().includes(searchCharacter.toLocaleLowerCase()))
        setFilterCharacter(searchByName)
    }

    console.log(filterCharacter)

    return (
        <div>
            <div className="formDiv">
                <form onSubmit={handleSubMission}>
                    <input type="text" placeholder="Search for a Character..." value={searchCharacter} onChange={(e) => setSearchCharacter(e.target.value)} />
                    <button type="submit">Search By Name</button>
                </form>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Search for a Id..." value={search} onChange={(e) => setSearch(e.target.value)} />
                    <button type="submit">Search By Id</button>
                </form>
            </div>
            <div className="character-list">
                {filterCharacter.length > 0 ? filterCharacter.map((character) => (
                    <Character key={character._id} name={character.name} image={character.imageUrl} />
                )) :
                    characters === undefined ?
                        (<div><h1>...Loading</h1>
                        </div>) :
                        characters.map((character) => (
                            <Character key={character._id} name={character.name} image={character.imageUrl} />
                        ))
                }
            </div>
        </div>
    );
}

export default CharacterList