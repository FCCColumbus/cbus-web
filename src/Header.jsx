
import links from './links'
// TODO: add permanant?? discord link

function Header() {

    return (
        <header>
            <nav>
                <ul>
                    {links.map(link => <li key={link.text}><a href={link.href}>{link.text === 'Home' ? <img src='/fcc-logo.svg' alt='fcc logo' className='header-logo' /> : link.text}</a></li>)}
                </ul>
            </nav>
            <h1>free code camp
                <img src='free-code-camp-logo.svg' alt='fcc logo' className='big-logo' /> columbus</h1>
        </header>
    )
}

export default Header