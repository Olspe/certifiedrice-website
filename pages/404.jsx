export default function Custom404() {
    return (
        <div>
            <div className="header">
                <h1 className="underline">404 Error!</h1>

                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <h3>Oops! Looks like this page doesn't exist!</h3>
                <h3>Want to return to home?</h3>

                <a href="./">
                    <button>Go Back Home!</button>
                </a>
            </div>

            <footer>
                <p>© 2022-Present Certified_Rice. All Rights Reserved.</p>
            </footer>
        </div>
    )
}