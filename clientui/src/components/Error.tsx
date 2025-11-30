import { Link } from "react-router-dom"

const Error = () => {
    return (
        <div>
            <h1>Oops! Something went wrong.</h1>
            <p>The page you are looking for does not exist.</p>

            <Link
                to="/">Go back to Homepage
            </Link>
        </div>
    )
}



export default Error