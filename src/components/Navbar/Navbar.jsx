export default function Navbar() {
  return (
    <nav className="bg-[#D0CCD0] shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-center items-center">
        <ul className="flex gap-6 text-gray-600 font-medium">
          <li className="hover:text-white cursor-pointer">Home</li>
          <li className="hover:text-white cursor-pointer">About</li>
          <li className="hover:text-white cursor-pointer">Contact</li>
        </ul>
      </div>
    </nav>
  )
}
