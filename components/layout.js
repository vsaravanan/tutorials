import Navbar from 'components/navbar'
import Footer from 'components/footer'
import Sidebar from 'components/Sidebar'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div>
        <Sidebar></Sidebar>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
