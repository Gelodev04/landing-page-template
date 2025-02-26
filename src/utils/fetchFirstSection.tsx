export default async function fetchFirstSection() {
    const data = await fetch('http://localhost:1337/api/first-section')
    const content = await data.json()
    return content

}