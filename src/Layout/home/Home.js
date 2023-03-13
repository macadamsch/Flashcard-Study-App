import React, { useEffect, useState } from "react";
import { listDecks } from "../../utils/api/index";

import CreateDeckButton from "./CreateDeckButton";
import DeleteDeckButton from "./DeleteDeckButton";
import ViewDeckButton from "./ViewDeckButton";
import StudyDeckButton from "./StudyDeckButton";

function Home () {
    const [decks, setDecks] = useState([]);

    useEffect(()=>{ //load all decks from the api
        async function loadDecks() {
            const response = listDecks();
            const decksFromAPI = await response;
            setDecks(decksFromAPI);
        }
        loadDecks();
    }, []); //runs only once

    return (
        <div className="home">
            <CreateDeckButton />
            {decks.map((deck, index)=>{
                return (
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <h5 className="card-title font-weight-bold">{deck.name}</h5>
                        <h6 className="card-subtitle text-muted">{deck.cards.length} cards</h6>
                    </div>
                    <p className="card-text">{deck.description}</p>
                    <div className="d-flex">
                        <div className="mr-auto">
                            <ViewDeckButton deck={deck} />
                            <StudyDeckButton deck={deck} />
                        </div>
                        <div>
                            <DeleteDeckButton deck={deck} />
                        </div>
                    </div>
                </div>
                );
            })}  
        </div>
    );
}

export default Home;