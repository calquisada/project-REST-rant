const React = require('react')
const Def = require('./default')


function home () {
    return (
        <Def>
            <main>
                <h1>Home</h1>
                <div>
                    <img src="/images/brenda-godinez-MsTOg6rhRVk-unsplash.jpg" alt="Fruit Shake" />
                    <div>
                        Photo by <a href="AUTHOR_LINK">Brenda Godinez</a> on <a href="UNSPLASH_LINK">Unsplash</a>
                    </div>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home
