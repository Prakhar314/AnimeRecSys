import React, { createContext, useReducer, useEffect } from 'react'


const initialState = {
    userAnimeList: JSON.parse(localStorage.getItem('userAnimeList') || '[]'),
    recsInSync: JSON.parse(localStorage.getItem('recsInSync') || 'false')
};

const actionTypes = Object.freeze({
    ADD_ANIME: Symbol('ADD_ANIME'),
    REMOVE_ANIME: Symbol('REMOVE_ANIME'),
    CLEAR: Symbol('CLEAR'),
    SYNC: Symbol('SYNC')
})

const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {

    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case actionTypes.ADD_ANIME:
                return {
                    recsInSync: false,
                    userAnimeList: [action.payload, ...state.userAnimeList.filter((item) => item.id !== action.payload.id)]
                }

            case actionTypes.REMOVE_ANIME:
                return {
                    recsInSync: false,
                    userAnimeList: [...state.userAnimeList.filter((item) => item.id !== action.payload.id)]
                }
            case actionTypes.CLEAR:
                return {
                    recsInSync: false,
                    userAnimeList: []
                }
            case actionTypes.SYNC:
                return {
                    ...state,
                    recsInSync: true
                }
            default:
                throw new Error();
        };
    }, initialState);

    useEffect(() => {
        console.log('setting a ' + JSON.stringify(state.userAnimeList))
        localStorage.setItem('userAnimeList', JSON.stringify(state.userAnimeList))
    }, [state.userAnimeList])

    useEffect(() => {
        console.log('setting b ' + JSON.stringify(state.recsInSync))
        localStorage.setItem('recsInSync', JSON.stringify(state.recsInSync))
    }, [state.recsInSync])

    return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider, actionTypes }