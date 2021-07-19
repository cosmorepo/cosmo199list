import Ninjas from "."

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    const paths = data.map(jinja => {
        return {
            params: { id: Ninjas.id.toString() }
        }
    })

    return{
        paths: paths,
        fallback: false 
    }
}

const Details = () => {
    return (
        <div>
            <h1>Details Page</h1>
        </div>
    )
}

export default Details