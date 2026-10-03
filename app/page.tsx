'use client';
import { useState } from 'react';
import { Search, Building, MapPin, SlidersHorizontal, ArrowRight, Zap, CheckCircle2, X, User, PlusCircle, Heart, Map, Filter, ChevronRight, Bed, Square, DollarSign } from 'lucide-react';

export default function Page() {
  const [searchType, setSearchType] = useState('satilik');
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('Tümü');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [searchResult, setSearchResult] = useState<string | null>(null);
  
  // Modal durumları
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showAdWizard, setShowAdWizard] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<any | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [adStep, setAdStep] = useState(1);

  // İlan Veri Tabanı
  const properties = [
    { id: 1, title: 'Moda Sahilinde Deniz Manzaralı Lüks Daire', price: 7500000, priceFormatted: '7.500.000 TL', location: 'Kadıköy, İstanbul', rooms: '3+1', sqm: '145 m²', type: 'Daire', category: 'satilik', desc: 'Kadıköy sahilinde, metroya ve toplu taşımaya yürüme mesafesinde, geniş balkonlu ve kesintisiz deniz manzaralı lüks daire.' },
    { id: 2, title: 'Yapay Zeka Destekli Akıllı Villa', price: 18900000, priceFormatted: '18.900.000 TL', location: 'Urla, İzmir', rooms: '5+1', sqm: '320 m²', type: 'Villa', category: 'satilik', desc: 'Urla’nın en sakin lokasyonunda, özel havuzlu, yerden ısıtmalı ve akıllı ev otomasyon sistemine sahip lüks müstakil villa.' },
    { id: 3, title: 'Plazalara Yakın Modern Ofis Katı', price: 45000, priceFormatted: '45.000 TL/ay', location: 'Şişli, İstanbul', rooms: '2 Bölüm', sqm: '110 m²', type: 'İş Yeri', category: 'kiralik', desc: 'Şişli merkezde, kurumsal plazaların ve iş dünyasının kalbinde, otoparklı ve güvenlikli modern kiralık ofis katı.' }
  ];

  const handleSearch = () => {
    setSearchResult(`"${location || 'Tüm Konumlar'}" için ${searchType === 'satilik' ? 'Satılık' : 'Kiralık'} (${propertyType}) ilanları filtrelendi.`);
  };

  const toggleFavorite = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
  };

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 relative">
      {/* Üst Menü */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setSelectedProperty(null)}>
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
              onClick={() => { setAdStep(1); setShowAdWizard(true); }} 
              className="flex items-center gap-1.5 bg-emerald-600 text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-emerald-700 transition shadow-md shadow-emerald-600/20 cursor-pointer"
            >
              <PlusCircle className="w-4 h-4" /> İlan Ver
            </button>
          </div>
        </div>
      </header>

      {selectedProperty ? (
        /* İLAN DETAY SAYFASI */
        <div className="max-w-5xl mx-auto px-4 py-12 space-y-8 animate-in fade-in duration-200">
          <button onClick={() => setSelectedProperty(null)} className="text-sm font-semibold text-emerald-600 hover:underline flex items-center gap-1 cursor-pointer">
            ← İlan Listesine Geri Dön
          </button>
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl space-y-6">
            <div className="h-80 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-700 font-bold text-xl border border-emerald-100">
              {selectedProperty.type} Görsel Galerisi / Sanal Tur
            </div>
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full font-bold uppercase">{selectedProperty.category} {selectedProperty.type}</span>
                <h1 className="text-3xl font-extrabold text-gray-900 mt-2">{selectedProperty.title}</h1>
                <p className="text-gray-500 text-sm flex items-center gap-1 mt-1"><MapPin className="w-4 h-4 text-gray-400" /> {selectedProperty.location}</p>
              </div>
              <div className="text-3xl font-black text-emerald-600">{selectedProperty.priceFormatted}</div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 border-y border-gray-100">
              <div className="bg-gray-50 p-3 rounded-xl text-center"><span className="text-xs text-gray-400 block">Oda Sayısı</span><strong className="text-gray-800">{selectedProperty.rooms}</strong></div>
              <div className="bg-gray-50 p-3 rounded-xl text-center"><span className="text-xs text-gray-400 block">Metrekare</span><strong className="text-gray-800">{selectedProperty.sqm}</strong></div>
              <div className="bg-gray-50 p-3 rounded-xl text-center"><span className="text-xs text-gray-400 block">Bina Yaşı</span><strong className="text-gray-800">Sıfır / Yeni</strong></div>
              <div className="bg-gray-50 p-3 rounded-xl text-center"><span className="text-xs text-gray-400 block">Isıtma</span><strong className="text-gray-800">Yerden Isıtma</strong></div>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-gray-900">İlan Açıklaması</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{selectedProperty.desc}</p>
            </div>
            <div className="p-6 bg-emerald-50/50 rounded-2xl border border-emerald-100 flex flex-col md:flex-row justify-between items-center gap-4">
              <div>
                <h4 className="font-bold text-gray-900">EmlakDanışmanı AI Destekli İletişim</h4>
                <p className="text-xs text-gray-500">Bu ilan EmlakCenneti güvenli ticaret altyapısı ile korunmaktadır.</p>
              </div>
              <div className="flex gap-3 w-full md:w-auto">
                <button onClick={() => alert('Danışman ile WhatsApp bağlantısı açılıyor...')} className="flex-1 bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-emerald-700 transition cursor-pointer">WhatsApp ile Bağlan</button>
                <button onClick={() => alert('Arama talebi oluşturuldu!')} className="flex-1 bg-white text-emerald-600 border border-emerald-600 px-6 py-3 rounded-xl font-semibold text-sm hover:bg-emerald-50 transition cursor-pointer">Telefonu Göster</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* ANA SAYFA & FİLTRELEME */
        <>
          <section className="bg-gradient-to-b from-emerald-900 to-emerald-800 text-white py-20 px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 bg-emerald-800/80 border border-emerald-600 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-emerald-200 shadow-inner">
                <Zap className="w-3.5 h-3.5 text-yellow-400" /> Yapay Zeka Destekli Yeni Nesil Emlak Platformu
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Hayalinizdeki EmlakCenneti'ni Keşfedin</h1>
              <p className="text-emerald-100 text-base md:text-lg max-w-2xl mx-auto">Yüz binlerce güncel ilan, akıllı fiyat analizleri ve güvenilir danışmanlarla doğru gayrimenkulü bulun.</p>

              {/* Gelişmiş Arama Kutusu */}
              <div className="bg-white p-5 rounded-2xl shadow-2xl text-gray-800 mt-8 max-w-4xl mx-auto border border-emerald-700/20 space-y-4">
                <div className="flex border-b border-gray-100 pb-3 gap-4 text-sm font-semibold">
                  <button onClick={() => setSearchType('satilik')} className={`px-5 py-2 rounded-xl transition cursor-pointer ${searchType === 'satilik' ? 'bg-emerald-600 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'}`}>Satılık</button>
                  <button onClick={() => setSearchType('kiralik')} className={`px-5 py-2 rounded-xl transition cursor-pointer ${searchType === 'kiralik' ? 'bg-emerald-600 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'}`}>Kiralık</button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-3 items-center">
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
                      <option value="İş Yeri">İş Yeri</option>
                      <option value="Arsa">Arsa</option>
                    </select>
                  </div>
                  <div className="flex items-center bg-gray-50 border border-gray-200 px-3 py-3 rounded-xl gap-2">
                    <DollarSign className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    <input type="number" placeholder="Min TL" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} className="bg-transparent w-full focus:outline-none text-sm" />
                    <span className="text-gray-300">-</span>
                    <input type="number" placeholder="Max TL" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} className="bg-transparent w-full focus:outline-none text-sm" />
                  </div>
                  <button 
                    onClick={handleSearch}
                    className="bg-emerald-600 text-white h-full py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-emerald-700 transition shadow-md cursor-pointer"
                  >
                    <Search className="w-5 h-5" /> İlan Ara
                  </button>
                </div>
                {searchResult && (
                  <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-sm font-medium flex items-center gap-2 text-left">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    {searchResult}
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* İlan Listesi & Harita Görünümü Alanı */}
          <section className="max-w-7xl mx-auto px-4 py-16">
            <div className="flex justify-between items-end mb-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Öne Çıkan İlanlar</h2>
                <p className="text-sm text-gray-500 mt-1">Sizin için seçtiğimiz en popüler gayrimenkul fırsatları</p>
              </div>
              <div className="flex gap-2">
                <button onClick={() => alert('Harita görünümü aktifleşiyor...')} className="flex items-center gap-1.5 bg-white border border-gray-200 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-gray-50 shadow-sm cursor-pointer">

<Map className="w-4 h-4 text-emerald-600" />
Haritada Gör
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {properties.map(property => (
                <div 
                  key={property.id} 
                  onClick={() => setSelectedProperty(property)}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer text-left relative"
                >
                  <button 
                    onClick={(e) => toggleFavorite(property.id, e)} 
                    className="absolute top-4 right-4 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition cursor-pointer shadow-sm"
                  >
                    <Heart className={`w-5 h-5 ${favorites.includes(property.id) ? 'text-red-500 fill-red-500' : 'text-gray-600'}`} />
                  </button>
                  <div className="h-56 bg-emerald-50 relative flex items-center justify-center text-emerald-700 font-bold text-base border-b border-gray-100 group-hover:bg-emerald-100 transition">
                    {property.type} Görseli
                  </div>
                  <div className="p-5 space-y-3">
                    <div className="text-emerald-600 font-extrabold text-xl">{property.priceFormatted}</div>
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
        </>
      )}

      {/* İLAN VERME SİHİRBAZI (MULTI-STEP WIZARD) */}
      {showAdWizard && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl relative text-left">
            <button onClick={() => setShowAdWizard(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-2 cursor-pointer">
              <X className="w-5 h-5" />
            </button>
            <div className="text-center mb-6">
              <PlusCircle className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
              <h3 className="text-xl font-bold text-gray-900">İlan Ekleme Sihirbazı (Adım {adStep}/3)</h3>
              <p className="text-sm text-gray-500 mt-1">Gayrimenkul bilgilerinizi girerek hemen yayınlayın</p>
            </div>
            
            {adStep === 1 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">İlan Kategorisi</label>
                  <select className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-emerald-600">
                    <option>Konut (Satılık / Kiralık)</option>
                    <option>İş Yeri / Plaza</option>
                    <option>Arsa / Tarla</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">İlan Başlığı</label>
                  <input type="text" placeholder="Örn: Sahibinden Satılık Lüks Daire" className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-emerald-600" />
                </div>
                <button onClick={() => setAdStep(2)} className="w-full bg-emerald-600 text-white py-3 rounded-xl font-semibold hover:bg-emerald-700 transition shadow-md cursor-pointer">Devam Et →</button>
              </div>
            )}

            {adStep === 2 && (
              <div className="space-y-4">
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
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Metrekare ($m^2$)</label>
                  <input type="text" placeholder="145" className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-emerald-600" />
                </div>
                <div className="flex gap-2">
                  <button onClick={() => setAdStep(1)} className="w-1/3 bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition cursor-pointer">Geri</button>
                  <button onClick={() => setAdStep(3)} className="w-2/3 bg-emerald-600 text-white py-3 rounded-xl font-semibold hover:bg-emerald-700 transition shadow-md cursor-pointer">Fotoğraf Ekle →</button>
                </div>
              </div>
            )}

            {adStep === 3 && (
              <div className="space-y-4 text-center">
                <div className="border-2 border-dashed border-gray-200 p-8 rounded-2xl bg-gray-50 text-gray-500 text-sm">
                  Fotoğrafları sürükleyip bırakın veya yüklemek için tıklayın
                </div>
                <button onClick={() => { alert('İlan başarıyla yayına alındı!'); setShowAdWizard(false); }} className="w-full bg-emerald-600 text-white py-3 rounded-xl font-semibold hover:bg-emerald-700 transition shadow-md cursor-pointer">İlanı Hemen Yayınla</button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Giriş Yap Modalı */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl relative text-left">
            <button onClick={() => setShowLoginModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-2 cursor-pointer">
              <X className="w-5 h-5" />
            </button>
            <div className="text-center mb-6">
              <Building className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
              <h3 className="text-xl font-bold text-gray-900">EmlakCenneti'ne Giriş Yap</h3>
              <p className="text-sm text-gray-500 mt-1">Favori ilanlarınıza erişin ve ilan yönetin</p>
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

      {/* Footer */}
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
