const URL = "https://rugby-live-data.p.rapidapi.com/match/8289907"
const TEST = true
const cacheResult = {
    "match": {
        "id": 8289907,
        "comp_id": 1266,
        "comp_name": "Six Nations",
        "season": "2022",
        "status": "Not Started",
        "match_minute": 0,
        "venue": "Stade de France",
        "game_week": 5,
        "home_team": "France",
        "away_team": "England",
        "home_id": 1967,
        "away_id": 1667,
        "date": "2022-03-19T20:00:00+00:00",
        "home_score": 0,
        "away_score": 0,
        "home_tries": 0,
        "away_tries": 0,
        "home_conversions": 0,
        "away_conversions": 0,
        "home_penalties": 0,
        "away_penalties": 0,
        "home_drop_goals": 0,
        "away_drop_goals": 0,
        "updated": "2022-03-15T01:00:02+00:00"
    },
    "referees": [],
    "home": {
        "teamsheet": [],
        "team_stats": {
            "attack": [],
            "defence": [],
            "discipline": [],
            "kicking": [],
            "breakdown": [],
            "lineouts": [],
            "scrums": [],
            "possession": []
        }
    },
    "away": {
        "teamsheet": [],
        "team_stats": {
            "attack": [],
            "defence": [],
            "discipline": [],
            "kicking": [],
            "breakdown": [],
            "lineouts": [],
            "scrums": [],
            "possession": []
        }
    },
    "events": []
}


const fetchData = async () => {
    return fetch(URL, {
        method: 'GET',
        headers: {
            'x-rapidapi-host': 'rugby-live-data.p.rapidapi.com',
            'x-rapidapi-key': '4817ee52e1msh4294c497844c7e0p13a5c7jsnca30a2a726a2'
        }
    })
}

export const GetData = async () => {
    let tab = Array()
    if (TEST) {
        return cacheResult
    }
    const resp = await fetchData()
    if (resp.ok) {
        const items = await resp.json()
        // Sort data tab ?
        return items.results
    }
    return null
}

export const GetHomeScore = async () => {
    return cacheResult.match.home_score
}

export const GetAwayScore = async () => {
    return cacheResult.match.away_score
}
