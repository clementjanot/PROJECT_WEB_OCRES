import axios from "axios";

const URL = 'http://localhost:3002';

//afficher les bénéficiaire
export const getBenef = () => {
    return axios.get(URL + '/beneficiaire')
}

//ajout d'un bénéficiaire
export const createBenef = (nom, IBAN) => {
    return axios.post(URL + '/beneficiaire', {nom, IBAN})
}

//supprimer un bénéficiaire
export const deleteBenef = (benefId) => {
    return axios.delete(URL + '/beneficiaire/' + benefId )
}

//mise à jour des bénéficiaires
export const updateBenef = (benef) => {
    return axios.put(URL + '/beneficiaire/' + benef._id, benef)
}

//afficher la todo
export const getTodo = () => {
    return axios.get(URL + '/todo')
}

//ajout d'une tache
export const createTache = (tache, date) => {
    return axios.post(URL + "/todo", {tache, date})
}

//supprimer une tache
export const deleteTache = (tacheID) => {
    return axios.delete(URL + '/todo/' + tacheID )
}

//mise à jour de la todo
export const updateTodo = (todo) => {
    return axios.put(URL + '/todo/' + todo._id, todo)
}

//afficher les meetings
export const getMeet = () => {
    return axios.get(URL + '/meeting')
}

//supprimer un meeting
export const deleteMeet = (meetID) => {
    return axios.delete(URL + '/meeting/' + meetID )
}

//ajout meeting
export const createMeet = (heure, tache) => {
    return axios.post(URL + '/meeting', {heure, tache})
}

//mise à jour meetings
export const updateMeet = (meets) => {
    return axios.put(URL + '/meeting/' + meets._id, meets)
}