const React = require('react')
const Def = require('./default')


function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <div>
                    <img src="/images/300.jpg" alt="Cat" />
                    <div>
                        Photo by <a href="AUTHOR_LINK">Mark James</a> on <a href="PLACEKITTEN_LINK">Placekitten</a>
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404