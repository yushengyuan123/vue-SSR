export function getItems(id) {
    const items = [
        {
            id: 1,
            name: '芭比娃娃',
            price: 123
        },
        {
            id: 2,
            name: '钢铁侠',
            price: 1234
        },
        {
            id: 3,
            name: '美国队长',
            price: 987
        },
    ]
    return new Promise((resolve => {
        setTimeout(() => {
            resolve({
                code: 1,
                message: 'success',
                data: items[id]
            })
        }, 1000)
    }))
}
