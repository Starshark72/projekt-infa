import { Dock } from 'primereact/dock';
import { Tooltip } from 'primereact/tooltip';

/**
 * NavigationDock — dolna nawigacja w stylu macOS Dock.
 * Ikony reprezentują sekcje prezentacji z efektem hover i aktywnym wskaźnikiem.
 *
 * @param {Object} props
 * @param {string} props.activeSection - ID aktualnie aktywnej sekcji
 * @param {function} props.onNavigate - callback wywoływany przy kliknięciu w sekcję
 */

const SECTIONS = [
  { id: 'home',      label: 'Home',         icon: 'pi pi-home' },
  { id: 'anatomy',   label: 'Anatomia',     icon: 'pi pi-sitemap' },
  { id: 'code',      label: 'Kod',          icon: 'pi pi-code' },
  { id: 'game',      label: 'Tryb Gry',     icon: 'pi pi-trophy' },
  { id: 'effects',   label: 'Efekty',       icon: 'pi pi-sparkles' },
];

export default function NavigationDock({ activeSection = 'home', onNavigate }) {
  const items = SECTIONS.map((section) => ({
    label: section.label,
    icon: () => (
      <i
        className={`${section.icon} dock-icon`}
        data-pr-tooltip={section.label}
        data-pr-position="top"
      />
    ),
    command: () => onNavigate?.(section.id),
    className: activeSection === section.id ? 'dock-active' : '',
  }));

  return (
    <div className="navigation-dock-wrapper">
      <Tooltip target=".dock-icon" className="dock-tooltip" />
      <Dock model={items} position="bottom" />
    </div>
  );
}

export { SECTIONS };
