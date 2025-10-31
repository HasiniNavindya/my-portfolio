export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm">© {new Date().getFullYear()} Hasini Navindya. All rights reserved.</div>
        <div className="flex items-center gap-4">
          <a href="/#home" className="hover:text-primary-dark">Home</a>
          <a href="/#about" className="hover:text-primary-dark">About</a>
          <a href="/#skills" className="hover:text-primary-dark">Skills</a>
          <a href="/#projects" className="hover:text-primary-dark">Projects</a>
          <a href="/#contact" className="hover:text-primary-dark">Contact</a>
        </div>
      </div>
    </footer>
  );
}
