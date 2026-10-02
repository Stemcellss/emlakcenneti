'use client';
import { useState } from 'react';

export default function Page() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    alert('Arama yapılıyor: ' + searchTerm);
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', borderBottom: '1px solid #eee', paddingBottom: '20px' }}>
        <h1 style={{ color: '#059669', fontSize: '24px', fontWeight: 'bold' }}>EmlakCenneti</h1>
        <div>
          <button 
            onClick={() => alert('Giriş yap paneli açılıyor!')}
            style={{ marginRight: '10px', padding: '10px 20px', cursor: 'pointer', borderRadius: '8px', border: '1px solid #ddd', background: '#fff' }}
          >
            Giriş Yap
          </button>
          <button 
            onClick={() => alert('İlan verme sihirbazı başlatılıyor!')}
            style={{ padding: '10px 20px', cursor: 'pointer', borderRadius: '8px', background: '#059669', color: '#fff', border: 'none' }}
          >
            İlan Ver
          </button>
        </div>
      </nav>

      <div style={{ background: '#f9fafb', padding: '30px', borderRadius: '16px', border: '1px solid #e5e7eb', textAlign: 'center' }}>
        <h2 style={{ marginBottom: '20px', color: '#1f2937' }}>Hayalinizdeki EmlakCenneti'ni Bulun</h2>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
          <input 
            type="text" 
            placeholder="İl veya ilçe yazın..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ padding: '12px', width: '60%', borderRadius: '8px', border: '1px solid #d1d5db' }}
          />
          <button 
            onClick={handleSearch}
            style={{ padding: '12px 24px', background: '#059669', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}
          >
            Ara
          </button>
        </div>
      </div>
    </div>
  );
}
