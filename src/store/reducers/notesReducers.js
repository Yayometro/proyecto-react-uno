import * as actionTypes from '../actions/actionsNotes'

const initialState = {
    notes: [
        {
            id: 0,
            title: 'Rembember use Redux for practice',
            description: "It's helpful for context in app"
        },
        {
            id: 1,
            title: 'Start you App with webpack and practice',
            description: "It's helpful for context in app"
        },
    ]
}

const notesReducers = (state = initialState, action) => {
    switch(action.type) { // Cambiar "action.types" a "action.type"
        case actionTypes.ADD_NOTE:
            return {
                ...state,
                notes: [...state.notes, action.payload]
            };
        case actionTypes.REMOVE_NOTE:
            return {
                ...state,
                notes: state.notes.filter(note => note.id !== Number(action.payload.id))
            };
        case actionTypes.EDIT_NOTE:
            return {
                ...state,
                notes: state.notes.map(note => note.id === action.payload.id ? action.payload : note)
            };
        default:
            return state;
    }
}

export default notesReducers;