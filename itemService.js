const url = "http://34.88.192.115:8080/item"

export const fetchItems = async (): Promise => {
    const response = await fetch(url);
    if (response.status >= 200 && response.status < 300) {
        return response.json()
    }
    return Promise.reject(response.statusText)
}

export const updateItem = async (item): Promise => {
    console.log(JSON.stringify(item))
    const response = await fetch(url + "?id=" + item.id, {
        method: "PUT",
        body: JSON.stringify({
            name: item.name,
            inStorage: !item.inStorage
        }),
        headers: {
            "Content-Type": "application/json"
        },
    })

    if (response.status >= 200 && response.status < 300) {
        return fetchItems()
    }
    return Promise.reject(response.statusText)
}