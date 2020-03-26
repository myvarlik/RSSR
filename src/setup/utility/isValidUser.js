import {getStore} from "trim-redux";

/**
 * check if the user has logged-in before or not and token is valid or not
 *
 * @param updateIsRequired {boolean} : if it is set to false then user is valid just when has token
 * @returns {boolean}
 */
export const isValidUser = (updateIsRequired = true) => {
    const localUser = getStore('localUser');

    if (localUser === undefined) {
        console.error('❗ localUser not exist in store!')
        return false;
    }

    if (localUser.token === null)
        return false;

    if (updateIsRequired)
        return localUser.updated;
    else
        return true;
}
