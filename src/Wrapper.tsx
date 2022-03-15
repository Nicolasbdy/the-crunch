const URL = ""


const fetchData = async () => {
    return fetch(URL, {
        method: "GET"
    })
}


export const GetData = async () => {
    let tab = Array()
    const resp = await fetchData()
    if (resp.ok) {
        const items = await resp.json()
        // Sort data tab ?
        return tab.map((item, index) => {
            return {
                
            }
        })
    }
    return null
}