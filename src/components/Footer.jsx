import Logo from "../assets/logo mi.png"; // same path

export default function Footer() {
  return (
    <footer className="py-6 mt-10 flex flex-col items-center gap-4 glass text-center">
      <img src={Logo} alt="Logo" className="w-10 h-16 object-contain" />
      <p>© {new Date().getFullYear()} Chibuikem Emmanuel</p>
      <div className="flex gap-4">
        <a href="https://github.com/chibuikem-emmanuel" target="_blank">GitHub</a>
        <a href="https://www.linkedin.com/in/chibuikem-emmanuel-8725052aa" target="_blank">LinkedIn</a>
        <a href="https://twitter.com" target="_blank">Twitter</a>
      </div>
    </footer>
  );
}