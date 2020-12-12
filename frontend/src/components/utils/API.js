import axios from "axios";

const URL = 'http://localhost:3001';

//afficher les bénéficiaire
export const getBenef = () => {
    return axios.get(URL + '/beneficiaire')
}

//ajout d'un bénéficiaire
export const createBenef = (nom, IBAN) => {
    return axios.post(URL + '/beneficiaire', {nom, IBAN})
}

//supprimer un bénéficiaire
export const deleteBenef = (benefID) => {
    return axios.delete(URL + '/beneficiaire', {benefID})
}

//mise à jour des bénéficiaires
export const updateBenef = (benef) => {
    return axios.put(URL + '/beneficiaire/' + benef._id, benef)
}

//afficher la todo
export const getTodo = () => {
    return axios.get(URL + "/todo")
}

//ajout d'une tache
export const createTache = () => {
    return axios.post(URL + "/todo", {tache, date})
}

//afficher les meetings
export const getMeet = () => {
    return axios.get(URL + "/meeting")
}

/*formulaire*/
//ajout meeting
export const createMeet = () => {
    return axios.post(URL + "/meeting", {heure, tache})
}