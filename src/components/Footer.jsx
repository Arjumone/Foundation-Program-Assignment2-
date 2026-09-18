function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 text-center py-7">

      <div className="flex justify-center items-center gap-2">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3163/3163478.png"
          alt="MovieExplorer Logo"
          className="w-8 h-8"
        />

        <h2 className="text-white text-xl font-bold">
          MovieExplorer
        </h2>
      </div>

      <p className="mt-2">
        © 2026 MovieExplorer. All rights reserved.
      </p>

    </footer>
  );
}

export default Footer;