import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import navBarStyles from './navBar.module.css'
import MobileMenu from '../mobileMenu/mobileMenu'
import useWindowSize from '../utils'

interface NavBarProps {
    websiteTitle: string;
    links: Array<{name: string, link: string}>
}

export default function NavBar({ websiteTitle, links }: NavBarProps) {
    const [open, setOpen] = useState(true);
    const [width, height] = useWindowSize();
    const breakpoint = 900;

    return (
        <div className={navBarStyles.container}>
            <ul className={navBarStyles.list}>

                <li className={navBarStyles.li + ' ' + navBarStyles.title}>
                    <Link href='/' passHref>
                        <div className={navBarStyles.logoSection}>
                            {/*<Image*/}
                            {/*    src='/icons/main-logo-home-icon.svg'*/}
                            {/*    alt='Main logo icon'*/}
                            {/*    width={50}*/}
                            {/*    height={50}*/}
                            {/*/>*/}
                            <a className={navBarStyles.link + ' ' + navBarStyles.webTitle}>{websiteTitle}</a>
                        </div>
                    </Link>
                </li>
                <div className={navBarStyles.navLinks}>
                    {width >= breakpoint ?
                        links.map((link) => (
                            <li className={navBarStyles.li} key={link.name}>
                                <a href={link.link} className={navBarStyles.link}>{link.name}</a>
                            </li>
                        ))
                        :
                        <div>W
                            {open ?
                                <div>
                                    <Image
                                        src='/images/hamburger-menu.svg'
                                        alt='Mobile navigation menu button'
                                        width={40}
                                        height={40}
                                        onClick={() => setOpen(!open)}
                                        className={navBarStyles.transition}
                                    />
                                </div>
                                :
                                <div>
                                    <Image
                                        src='/images/exit.svg'
                                        alt='Exit navigation menu button'
                                        width={30}
                                        height={30}
                                        onClick={() => setOpen(!open)}
                                        className={navBarStyles.transition}
                                    />
                                    <MobileMenu links={links} open={open} setOpen={setOpen}></MobileMenu>
                                </div>
                                }
                        </div>
                    }
                </div>
            </ul>
        </div>
    )
}