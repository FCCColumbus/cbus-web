import links from '../links'

function Footer() {
  return (
    <footer>
      <nav>
        <ul>
          {links.map((link, i) =>
            i === 0
              ? ''
              : (
                <li key={link.text}>
                  <a href={link.href}>
                    {
                      link.text === 'Home'
                        ? <img src='/fcc-logo.svg' alt='fcc logo' className='header-logo' />
                        : link.text
                    }
                  </a>
                </li>
              )
          )}
        </ul>
      </nav>
      <p>Copyright Free Code Camp Columbus 2023 - {new Date().getFullYear()}</p>
      <a href="https://www.netlify.com" target="_blank" rel="noreferrer" className="image-wrapper" data-testid="image-wrapper"> <img src="https://www.netlify.com/v3/img/components/netlify-color-accent.svg" alt="Deploys by Netlify" /> </a>
    </footer>
  );
}

export default Footer;
