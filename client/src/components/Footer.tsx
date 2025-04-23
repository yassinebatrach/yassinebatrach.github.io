export default function Footer() {
  return (
    <footer className="bg-primary-900 text-primary-300 py-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-black text-lg font-bold mb-4">Chernobyl: Before & After</h3>
            <p className="mb-4">A historical documentation project dedicated to preserving the memory and lessons of the Chernobyl disaster.</p>
            <p className="text-sm">Images sourced from various historical archives and photographers. All rights belong to their respective owners.</p>
          </div>
          <div>
            <h3 className="text-black text-lg font-bold mb-4">Learn More</h3>
            <ul className="space-y-2">
              <li><a href="https://www.iaea.org/newscenter/focus/chernobyl" className="hover:text-accent-400 transition-colors" target="_blank" rel="noopener noreferrer">IAEA Chernobyl Report</a></li>
              <li><a href="https://web.archive.org/web/20170808212545/http://chornobyl.in.ua/en/" className="hover:text-accent-400 transition-colors" target="_blank" rel="noopener noreferrer">Chernobyl Exclusion Zone Information</a></li>
              <li><a href="https://www.un.org/en/events/chernobylday/" className="hover:text-accent-400 transition-colors" target="_blank" rel="noopener noreferrer">UN Chernobyl Recovery and Development Programme</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-primary-700 text-center text-sm">
          <p>© 2023 Chernobyl Historical Documentation Project. This site is for educational purposes only.</p>
        </div>
      </div>
    </footer>
  );
}
