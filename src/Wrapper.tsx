import { Storage } from '@capacitor/storage';
const URL = "https://crunch.autodicar.fr/"
// const URL = "https://dev.ouisnap.com/"


const fetchData = async () => {
    return fetch(URL, {
        method: 'GET',
    })
}

const fetchHomeScore = async () => {
    const url = URL + '/homescore'
    return fetch(url, {
        method: 'GET',
    })
}

const fetchAwayScore = async () => {
    const url = URL + '/awayscore'
    return fetch(url, {
        method: 'GET',
    })
}

export const GetData = async () => {
    const { value } = await Storage.get({ key: 'id' });
    console.log(value)
    const resp = await fetchData()
    if (resp.ok) {
        const items = await resp.json()
        if (value == items[0].event_id) {
            return {}
        }
        Storage.set({
            key: 'id',
            value: items[0].event_id,
        });
        return items[0]
    }
    return null
}

export const GetHomeScore = async () => {
    const resp = await fetchHomeScore()
    if (resp.ok) {
        return await resp.json()
    }
    console.log(await resp.json())
    return null
}

export const GetAwayScore = async () => {
    const resp = await fetchAwayScore()
    if (resp.ok) {
        return await resp.json()
    }
    console.log(await resp.json())
    return null
}
