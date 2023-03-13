import React from "react";
import { deleteDeck } from "../../utils/api";

function DeleteDeckButton({ deck }) {
    const handleTrashClick = () => {
        if (
            window.confirm("Delete this deck? You will not be able to undo this action.")
        ) {
            deleteDeck(deck.id)
        }
    };

    return (
        <button
            type="button"
            className="btn btn-danger"
            onClick={handleTrashClick}>
                <a href="/" className="text-white">
                    <span className="oi oi-trash" />
                </a>
            </button>
    );
}

export default DeleteDeckButton;