import Head from 'next/head'
import NavBar from '../../components/navBar/navBar'

export const links = [
    { name: 'Experience', link: '/experience' },
    { name: 'Skills', link: '/skills' },
    { name: 'Education', link: '/education' },
    { name: 'Projects', link: '/projects' },
    { name: 'Resume', link: '/resume' },
]

export const websiteTitle = 'Mitch Hein';
export const pageTitle = '';
export const bannerTitle1 = '';

interface Children  {
    children: any;
}

export default function MainLayout({ children }:Children) {
    return (
        <div style={{ caretColor: 'transparent' }}>
            <NavBar websiteTitle={websiteTitle} links={links}></NavBar>
            <Head>
                <title>{pageTitle}</title>
                <link rel="shortcut icon" href="/icons/favicon.svg" />
            </Head>
            <main>{children}</main>
        </div>
    )
}