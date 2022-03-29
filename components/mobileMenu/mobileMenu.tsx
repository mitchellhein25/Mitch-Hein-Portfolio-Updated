import mobileMenuStyles from './mobileMenu.module.css'

interface Props {
    links: Array<{ name: string, link: string }>
    open: Boolean
    setOpen: Function
}

export default function MobileMenu({ links, open, setOpen }: Props) {
    console.log(links);
    return (
        <div className={mobileMenuStyles.container}>
            <ul className={mobileMenuStyles.list}>
                <div className={mobileMenuStyles.navLinks}>
                    {
                        links.map((link) => (
                        <li className={mobileMenuStyles.li} key={link.name}>
                            <a onClick={() => setOpen(!open)} href={link.link} className={mobileMenuStyles.link}>{link.name}</a>
                        </li>
                    ))
                    }
                </div>
            </ul>
        </div>
    )
}