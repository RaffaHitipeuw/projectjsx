import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-[#FBFCFF]">
      <Navbar />
      <main className="flex-1 container mx-auto px-6 py-10">
        {children}
      </main>
      <Footer />
    </div>
  )
}
