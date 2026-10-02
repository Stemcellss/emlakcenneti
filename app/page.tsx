'use client';
import { useState } from 'react';
import { Search, Building, MapPin, SlidersHorizontal, ArrowRight, Zap } from 'lucide-react';

export default function Page() {
  const [searchType, setSearchType] = useState('satilik');

  const featuredProperties = [
    { id: 1, title: 'Moda Sahilinde Deniz Manzaralı Lüks Daire', price: '7.500.000 TL', location: 'Kadıköy, İstanbul', rooms: '3+1', sqm: '145 m²', type: 'Satılık Daire' },
    { id: 2, title: 'Yapay Zeka Destekli Akıllı Villa', price: '18.900.000 TL', location: 'Urla, İzmir', rooms: '5+1', sqm: '320 m²', type: 'Satılık Villa' },
    { id: 3, title: 'Plazalara Yakın Modern Ofis Katı', price: '45.000 TL/ay', location: 'Şişli, İstanbul', rooms: '2 Bölüm', sqm: '110 m²', type: 'Kiralık İş Yeri' }
  ];

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Building className="w-8 h-8 text-emerald-600" />
            <span className="text-2xl font-black tracking-tight text-gray-900">Emlak<span className="text-emerald-600">Cenneti</span></span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-sm font-medium text-gray-700 hover:text-emerald-600">Giriş Yap</button>
            <button className="bg-emerald-600 text-white px-5 py-2.5 rounded-xl font-medium hover:bg-emerald-700 transition shadow-sm">İlan Ver</button>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-b from-emerald-900 to-emerald-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-emerald-800/80 border border-emerald-600 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-emerald-200">
            <Zap className="w-3.5 h-3.5 text-yellow-400" /> Yapay Zeka Destekli Yeni Nesil Emlak Platformu
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Hayalinizdeki EmlakCenneti'ni Keşfedin</h1>
          <p className="text-emerald-100 text-base md:text-lg max-w-2xl mx-auto">Yüz binlerce güncel ilan, akıllı fiyat analizleri ve güvenilir danışmanlarla doğru gayrimenkulü bulun.</p>

          <div className="bg-white p-3 rounded-2xl shadow-xl text-gray-800 mt-8 max-w-3xl mx-auto">
            <div className="flex border-b border-gray-100 pb-3 mb-3 gap-4 text-sm font-semibold">
              <button onClick={() => setSearchType('satilik')} className={`px-4 py-1.5 rounded-lg transition ${searchType === 'satilik' ? 'bg-emerald-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}>Satılık</button>
              <button onClick={() => setSearchType('kiralik')} className={`px-4 py-1.5 rounded-lg transition ${searchType === 'kiralik' ? 'bg-emerald-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}>Kiralık</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center">
              <div className="flex items-center bg-gray-50 border border-gray-200 px-3 py-3 rounded-xl">
                <MapPin className="w-5 h-5 text-gray-400 mr-2" />
                <input type="text" placeholder="İl, ilçe veya mahalle..." className="bg-transparent w-full focus:outline-none text-sm" />
              </div>
              <div className="flex items-center bg-gray-50 border border-gray-200 px-3 py-3 rounded-xl">
                <SlidersHorizontal className="w-5 h-5 text-gray-400 mr-2" />
                <select className="bg-transparent w-full focus:outline-none text-sm">
                  <option>Konut Tipi (Tümü)</option>
                  <option>Daire</option>
                  <option>Villa</option>
                  <option>Arsa</option>
                </select>
              </div>
              <button className="bg-emerald-600 text-white h-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-emerald-700 transition">
                <Search className="w-5 h-5" /> İlanları Ara
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Öne Çıkan İlanlar</h2>
            <p className="text-sm text-gray-500 mt-1">Sizin için seçtiğimiz en popüler gayrimenkul fırsatları</p>
          </div>
          <button className="text-emerald-600 font-semibold text-sm hover:underline flex items-center gap-1">Tümünü Gör <ArrowRight className="w-4 h-4" /></button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProperties.map(property => (
            <div key={property.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition overflow-hidden group">
              <div className="h-56 bg-gray-200 relative flex items-center justify-center text-gray-400 font-medium">
                {property.type} Görseli
              </div>
              <div className="p-5 space-y-3">
                <div className="text-emerald-600 font-bold text-lg">{property.price}</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition line-clamp-1">{property.title}</h3>
                <p className="text-gray-500 text-sm flex items-center gap-1"><MapPin className="w-4 h-4" /> {property.location}</p>
                <div className="flex gap-4 pt-3 border-t border-gray-100 text-xs text-gray-600 font-medium">
                  <span>Oda: {property.rooms}</span>
                  <span>Alan: {property.sqm}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-white border-t border-gray-100 py-12 mt-20 text-center text-sm text-gray-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-2">
            <Building className="w-6 h-6 text-emerald-600" />
            <span className="font-bold text-gray-900">EmlakCenneti.com</span>
          </div>
          <p>© 2026 Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </main>
  );
}
