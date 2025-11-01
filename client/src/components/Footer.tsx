export default function Footer() {
  return (
    <footer className="text-white py-12" style={{ backgroundColor: '#333333' }}>
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          {/* Logo and Tagline */}
          <div>
            <h3 className="text-2xl font-bold mb-2" style={{color: '#f5f5f5'}}>
              MichiShirube OÜ
            </h3>
            <p className="text-sm text-gray-400">
              4言語で世界をつなぎ、AIで未来を創る
            </p>
          </div>


        </div>


      </div>
    </footer>
  );
}
