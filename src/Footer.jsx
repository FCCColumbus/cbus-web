
import links from './links'

function Footer() {

    return (

        <footer>
            <nav>
                <ul>
                    {links.map((link, i) => i === 0 ? '' : <li key={link.text}><a href={link.href}>{link.text === 'Home' ? <img src='/fcc-logo.svg' alt='fcc logo' className='header-logo' /> : link.text}</a></li>)}
                </ul>
            </nav>
            <p>Copyright Free Code Camp Columbus 2023 - {new Date().getFullYear()}</p>

        </footer>

    );

}

export default Footer