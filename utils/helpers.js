export const CSVtoJSON = csv => {
    const lines = csv.split('\n')
    const result = []
    const headers = lines.shift().split(';')

    lines.map(l => {
        const obj = {}
        const line = l.split(';')
        headers.map((h, i) => {
            obj[h] = line[i]
        })
        result.push(obj)
    })

    return result
}