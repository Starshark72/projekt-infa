import { useState } from 'react';
import { Timeline } from 'primereact/timeline';
import { Sidebar } from 'primereact/sidebar';
import { Card } from 'primereact/card';
import { Tag } from 'primereact/tag';
import ANATOMY_ITEMS from '../../../data/anatomyData';
import LivePreview from './LivePreview';

/**
 * AnatomySection — interaktywna sekcja "Anatomia Komponentu".
 * Wyświetla oś czasu (Timeline) z kluczowymi klockami Reacta.
 * Kliknięcie punktu otwiera Sidebar z opisem i live demo.
 */
export default function AnatomySection() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setSidebarVisible(true);
  };

  const handleSidebarHide = () => {
    setSidebarVisible(false);
  };

  /* ─── Timeline: custom marker ─── */
  const markerTemplate = (item) => (
    <div
      className="anatomy-marker"
      style={{ '--marker-color': item.color }}
      onClick={() => handleItemClick(item)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleItemClick(item)}
      aria-label={`Otwórz szczegóły: ${item.title}`}
    >
      <i className={item.icon} />
    </div>
  );

  /* ─── Timeline: custom content ─── */
  const contentTemplate = (item) => (
    <Card
      className="anatomy-card"
      style={{ '--card-accent': item.color }}
      onClick={() => handleItemClick(item)}
    >
      <div className="flex align-items-center gap-2 mb-2">
        <span className="anatomy-card-title">{item.title}</span>
        <Tag
          value={item.tagline}
          style={{
            background: `${item.color}15`,
            color: item.color,
            border: 'none',
            fontSize: '0.65rem',
            fontWeight: 600,
          }}
        />
      </div>
      <p className="anatomy-card-desc">
        {item.description.substring(0, 100)}...
      </p>
      <span className="anatomy-card-cta">
        <i className="pi pi-arrow-right" />
        Odkryj więcej
      </span>
    </Card>
  );

  /* ─── Sidebar header ─── */
  const sidebarHeader = selectedItem && (
    <div className="flex align-items-center gap-3">
      <div
        className="sidebar-header-icon"
        style={{ background: `${selectedItem.color}20`, color: selectedItem.color }}
      >
        <i className={selectedItem.icon} />
      </div>
      <div>
        <div className="font-bold text-lg" style={{ color: 'var(--text-primary)' }}>
          {selectedItem.title}
        </div>
        <div className="text-xs" style={{ color: 'var(--text-muted)' }}>
          {selectedItem.tagline}
        </div>
      </div>
    </div>
  );

  return (
    <section id="section-anatomy" className="app-section">
      {/* Nagłówek sekcji */}
      <div className="section-badge">
        <i className="pi pi-sitemap" />
        <span>Anatomia Komponentu</span>
      </div>

      <h2 className="section-title" style={{ fontSize: '2.25rem' }}>
        Z czego składa się ta aplikacja?
      </h2>

      <p className="section-subtitle mb-5">
        Kliknij dowolny punkt na osi czasu, aby zanurzyć się w koncept
        i zobaczyć go w akcji — na żywo, bez przeładowania.
      </p>

      {/* Oś czasu */}
      <div className="anatomy-timeline-wrapper">
        <Timeline
          value={ANATOMY_ITEMS}
          align="alternate"
          marker={markerTemplate}
          content={contentTemplate}
          className="anatomy-timeline"
        />
      </div>

      {/* Panel boczny ze szczegółami */}
      <Sidebar
        visible={sidebarVisible}
        onHide={handleSidebarHide}
        position="right"
        className="anatomy-sidebar"
        header={sidebarHeader}
        style={{ width: '420px' }}
      >
        {selectedItem && (
          <div className="flex flex-column gap-4 mt-3">
            {/* Pełny opis */}
            <div>
              <h4 className="text-sm font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                📖 Wyjaśnienie
              </h4>
              <p className="text-sm" style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                {selectedItem.description}
              </p>
            </div>

            {/* Snippet kodu */}
            <div>
              <h4 className="text-sm font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                💻 Przykład kodu
              </h4>
              <div className="anatomy-code-block">
                <pre>{selectedItem.codeSnippet}</pre>
              </div>
            </div>

            {/* Live Preview z InputSwitch */}
            <LivePreview type={selectedItem.liveDemo} />
          </div>
        )}
      </Sidebar>
    </section>
  );
}
