import Head from 'next/head'
import NavBar from '../../components/navBar/navBar'
import styles from './mainLayout.module.css'

export const links = [
    { name: 'Contact', link: '#contact' },
    { name: 'Experience', link: '#experience' },
    { name: 'Skills', link: '#skills' },
    { name: 'Education', link: '#education' },
    { name: 'Projects', link: '#projects' },
    { name: 'Resume', link: '#resume' },
]

export const websiteTitle = 'Mitch Hein';
export const pageTitle = 'Mitch Hein Portfolio';

interface Children  {
    children: any;
}

export default function MainLayout({ children }:Children) {
    return (
        <div style={{ caretColor: 'transparent' }}>
            <NavBar websiteTitle={websiteTitle} links={links}></NavBar>
            <Head>
                <title>{pageTitle}</title>
                <link rel="Tab icon" href="/images/favicon.svg" />
            </Head>
            <main className={styles.mainContainer}>{children}</main>
        </div>
    )
}