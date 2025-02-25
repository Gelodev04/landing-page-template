
export default async function fetchHome() {
    const data = await fetch('http://localhost:1337/api/home')
    const content = await data.json()
    return content

}
