import mobileMenuStyles from './mobileMenu.module.css'

interface Props {
    links: Array<{ name: string, link: string }>
}

export default function MobileMenu({ links }: Props) {
    console.log(links);
    return (
        <div className={mobileMenuStyles.container}>
            <ul className={mobileMenuStyles.list}>
                <div className={mobileMenuStyles.navLinks}>
                    {
                        links.map((link) => (
                        <li className={mobileMenuStyles.li} key={link.name}>
                            <a href={link.link} className={mobileMenuStyles.link}>{link.name}</a>
                        </li>
                    ))
                    }
                </div>
            </ul>
        </div>
    )
}