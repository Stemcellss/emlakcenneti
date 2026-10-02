'use client';
import { useState } from 'react';
import { Search, Building, MapPin, SlidersHorizontal, ArrowRight, Zap, CheckCircle2, X, User, PlusCircle } from 'lucide-react';

export default function Page() {
  const [searchType, setSearchType] = useState('satilik');
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('Tümü');
  const [searchResult, setSearchResult] = useState<string | null>(null);
  
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showAdModal, setShowAdModal] = useState(false);

  const featuredProperties = [
    { id: 1, title: 'Moda Sahilinde Deniz Manzaralı Lüks Daire', price: '7.500.000 TL', location: 'Kadıköy, İstanbul', rooms: '3+1', sqm: '145 m²', type: 'Satılık Daire' },
    { id: 2, title: 'Yapay Zeka Destekli Akıllı Villa', price: '18.900.000 TL', location: 'Urla, İzmir', rooms: '5+1', sqm: '320 m²', type: 'Satılık Villa' },
    { id: 3, title: 'Plazalara Yakın Modern Ofis Katı', price: '45.000 TL/ay', location: 'Şişli, İstanbul', rooms: '2 Bölüm', sqm: '110 m²', type: 'Kiralık İş Yeri' }
  ];

  const handleSearch = () => {
    setSearchResult(`"${location || 'Tüm Konumlar'}" için ${searchType === 'satilik' ? 'Satılık' : 'Kiralık'} (${propertyType}) ilanları filtreleniyor...`);
  };

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 relative">
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Building className="w-8 h-8 text-emerald-600" />
            <span className="text-2xl font-black tracking-tight text-gray-900">Emlak<span className="text-emerald-600">Cenneti</span></span>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setShowLoginModal(true)} 
              className="flex items-center gap-1.5 text-sm font-semibold text-gray-700 hover:text-emerald-600 transition px-3 py-2 rounded-xl hover:bg-gray-50 cursor-pointer"
            >
              <User className="w-4 h-4" /> Giriş Yap
            </button>
            <button 
              onClick={() => setShowAdModal(true)} 
              className="flex items-center gap-1.5 bg-emerald-600 text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-emerald-700 transition shadow-md shadow-emerald-600/20 cursor-pointer"
            >
              <PlusCircle className="w-4 h-4" /> İlan Ver
            </button>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-b from-emerald-900 to-emerald-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-emerald-800/80 border border-emerald-600 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-emerald-200 shadow-inner">
            <Zap className="w-3.5 h-3.5 text-yellow-400" /> Yapay Zeka Destekli Yeni Nesil Emlak Platformu
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Hayalinizdeki EmlakCenneti'ni Keşfedin</h1>
          <p className="text-emerald-100 text-base md:text-lg max-w-2xl mx-auto">Yüz binlerce güncel ilan, akıllı fiyat analizleri ve güvenilir danışmanlarla doğru gayrimenkulü bulun.</p>

          <div className="bg-white p-4 rounded-2xl shadow-2xl text-gray-800 mt-8 max-w-3xl mx-auto border border-emerald-700/20">
            <div className="flex border-b border-gray-100 pb-3 mb-4 gap-4 text-sm font-semibold">
              <button onClick={() => setSearchType('satilik')} className={`px-5 py-2 rounded-xl transition cursor-pointer ${searchType === 'satilik' ? 'bg-emerald-600 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'}`}>Satılık</button>
              <button onClick={() => setSearchType('kiralik')} className={`px-5 py-2 rounded-xl transition cursor-pointer ${searchType === 'kiralik' ? 'bg-emerald-600 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'}`}>Kiralık</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center">
              <div className="flex items-center bg-gray-50 border border-gray-200 px-3 py-3 rounded-xl">
                <MapPin className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0" />
                <input 
                  type="text" 
                  placeholder="İl, ilçe veya mahalle..." 
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="bg-transparent w-full focus:outline-none text-sm" 
                />
              </div>
              <div className="flex items-center bg-gray-50 border border-gray-200 px-3 py-3 rounded-xl">
                <SlidersHorizontal className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0" />
                <select 
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="bg-transparent w-full focus:outline-none text-sm cursor-pointer"
                >
                  <option value="Tümü">Konut Tipi (Tümü)</option>
                  <option value="Daire">Daire</option>
                  <option value="Villa">Villa</option>
                  <option value="Arsa">Arsa</option>
                </select>
              </div>
              <button 
                onClick={handleSearch}
                className="bg-emerald-600 text-white h-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-emerald-700 transition shadow-md cursor-pointer"
              >
                <Search className="w-5 h-5" /> İlanları Ara
              </button>
            </div>
            {searchResult && (
              <div className="mt-4 p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-sm font-medium flex items-center gap-2 text-left">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                {searchResult}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Öne Çıkan İlanlar</h2>
            <p className="text-sm text-gray-500 mt-1">Sizin için seçtiğimiz en popüler gayrimenkul fırsatları</p>
          </div>
          <button onClick={() => alert('Tüm ilanlar listesine yönlendiriliyorsunuz...')} className="text-emerald-600 font-semibold text-sm hover:underline flex items-center gap-1 cursor-pointer">Tümünü Gör <ArrowRight className="w-4 h-4" /></button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProperties.map(property => (
            <div 
              key={property.id} 
              onClick={() => alert(`"${property.title}" detay sayfası açılıyor.`)}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer text-left"
            >
              <div className="h-56 bg-emerald-50 relative flex items-center justify-center text-emerald-700 font-bold text-base border-b border-gray-100 group-hover:bg-emerald-100 transition">
                {property.type} Görseli
              </div>
              <div className="p-5 space-y-3">
                <div className="text-emerald-600 font-extrabold text-xl">{property.price}</div>
                <h3 className="font-bold text-gray-900 group-hover:text-emerald-600 transition line-clamp-1">{property.title}</h3>
                <p className="text-gray-500 text-sm flex items-center gap-1"><MapPin className="w-4 h-4 text-gray-400" /> {property.location}</p>
                <div className="flex gap-4 pt-3 border-t border-gray-100 text-xs text-gray-600 font-semibold">
                  <span className="bg-gray-100 px-2.5 py-1 rounded-md">Oda: {property.rooms}</span>
                  <span className="bg-gray-100 px-2.5 py-1 rounded-md">Alan: {property.sqm}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {showLoginModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl relative text-left">
            <button onClick={() => setShowLoginModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-2 cursor-pointer">
              <X className="w-5 h-5" />
            </button>
            <div className="text-center mb-6">
              <Building className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
              <h3 className="text-xl font-bold text-gray-900">EmlakCenneti'ne Giriş Yap</h3>
              <p className="text-sm text-gray-500 mt-1">Hesabınıza erişin veya hızlıca üye olun</p>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">E-posta Adresi</label>
                <input type="email" placeholder="ornek@mail.com" className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-emerald-600" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Şifre</label>
                <input type="password" placeholder="••••••••" className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-emerald-600" />
              </div>
              <button onClick={() => { alert('Giriş yapıldı!'); setShowLoginModal(false); }} className="w-full bg-emerald-600 text-white py-3 rounded-xl font-semibold hover:bg-emerald-700 transition shadow-md cursor-pointer">
                Giriş Yap
              </button>
            </div>
          </div>
        </div>
      )}

      {showAdModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl relative text-left">
            <button onClick={() => setShowAdModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-2 cursor-pointer">
              <X className="w-5 h-5" />
            </button>
            <div className="text-center mb-6">
              <PlusCircle className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
              <h3 className="text-xl font-bold text-gray-900">Hızlı İlan Ver</h3>
              <p className="text-sm text-gray-500 mt-1">Gayrimenkul bilgilerinizi girerek hemen yayınlayın</p>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">İlan Başlığı</label>
                <input type="text" placeholder="Örn: Sahibinden Satılık Lüks Daire" className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-emerald-600" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Fiyat (TL)</label>
                  <input type="text" placeholder="5.000.000" className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-emerald-600" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Konum</label>
                  <input type="text" placeholder="İstanbul, Kadıköy" className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-emerald-600" />
                </div>
              </div>
              <button onClick={() => { alert('İlan başarıyla oluşturuldu!'); setShowAdModal(false); }} className="w-full bg-emerald-600 text-white py-3 rounded-xl font-semibold hover:bg-emerald-700 transition shadow-md cursor-pointer">
                İlanı Yayınla
              </button>
            </div>
          </div>
        </div>
      )}

      <footer className="bg-white border-t border-gray-100 py-12 mt-20 text-center text-sm text-gray-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-2">
            <Building className="w-6 h-6 text-emerald-600" />
            <span className="font-bold text-gray-900">EmlakCenneti.com</span>
          </div>
          <p>© 2026 Tüm hakları saklıdır. Yapay Zeka Destekli Emlak Platformu.</p>
        </div>
      </footer>
    </main>
  );
}
