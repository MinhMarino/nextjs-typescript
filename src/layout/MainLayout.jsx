import Header from '@/components/header.jsx';
import Footer from '@/components/footer.jsx';

export default function MainLayout({ children }) {
    return (
        <>
            <Header />
            <main>
                { children }
            </main>
            <Footer />
        </>
    )
}