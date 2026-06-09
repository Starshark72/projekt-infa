import { useState } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import { ScrollPanel } from 'primereact/scrollpanel';
import { Inplace, InplaceDisplay, InplaceContent } from 'primereact/inplace';
import { Chart } from 'primereact/chart';
import TypewriterText from './TypewriterText';
import { SKILLS_DATA, LOGIC_CODE, CSS_CODE } from '../../../data/inspectorData';

/**
 * CodeInspectorSection — Hakerski terminal pokazujący proces twórczy.
 * Trzy zakładki: Skille (prompt), Logika (JS), Styl (CSS).
 * Zawiera efekt maszyny do pisania oraz wykres proporcji.
 */
export default function CodeInspectorSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Konfiguracja wykresu kołowego (Doughnut)
  const chartData = {
    labels: ['AI Prompting (Skille)', 'React JS (Logika)', 'PrimeFlex (Stylizacja)'],
    datasets: [
      {
        data: [40, 40, 20],
        backgroundColor: [
          'rgba(192, 132, 252, 0.8)', // fiolet (AI)
          'rgba(56, 189, 248, 0.8)',  // błękit (React)
          'rgba(52, 211, 153, 0.8)'   // zieleń (CSS)
        ],
        hoverBackgroundColor: [
          '#c084fc',
          '#38bdf8',
          '#34d399'
        ],
        borderWidth: 0,
      }
    ]
  };

  const chartOptions = {
    cutout: '70%',
    plugins: {
      legend: {
        display: false // Wyłączamy wbudowaną legendę, by ikona zawsze była na środku
      }
    }
  };

  return (
    <section id="section-code" className="app-section">
      <div className="section-badge">
        <i className="pi pi-code" />
        <span>Inspektor Kodu</span>
      </div>

      <h2 className="section-title">Matrix Tworzenia</h2>
      <p className="section-subtitle mb-5">
        Jak powstaje ta aplikacja? Zobacz na żywo kod, style i instrukcje,
        które napędziły Antigravity do stworzenia tego interfejsu.
      </p>

      <div className="flex flex-column xl:flex-row gap-5 w-full mx-auto" style={{ maxWidth: '1200px' }}>
        
        {/* Lewa kolumna: Terminal / IDE */}
        <div className="flex-1 min-w-0 glass-panel p-0 overflow-hidden inspector-terminal">
          <div className="terminal-header flex align-items-center gap-2 px-3 py-2">
            <div className="flex gap-1">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
            </div>
            <span className="terminal-title text-xs font-mono ml-2 opacity-60">root@antigravity:~</span>
          </div>

          <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} className="terminal-tabs">
            {/* ZAKŁADKA 1: SKILLE */}
            <TabPanel header="Antigravity Skill (.md)" leftIcon="pi pi-file-edit mr-2">
              <ScrollPanel style={{ width: '100%', height: '350px' }} className="terminal-scroll">
                <div className="terminal-content">
                  <div className="mb-4 text-xs opacity-50">
                    <TypewriterText text="> Ładowanie pamięci asystenta... Gotowe." speed={10} active={activeIndex === 0} />
                  </div>
                  
                  {SKILLS_DATA.map((skill, index) => (
                    <div key={skill.id} className="mb-3">
                      <Inplace>
                        <InplaceDisplay>
                          <span className="skill-title-link">
                            <i className="pi pi-chevron-right text-xs mr-2" />
                            {skill.title}
                          </span>
                        </InplaceDisplay>
                        <InplaceContent>
                          <div className="skill-content-block mt-2 pl-4 border-left-1 border-primary">
                            <TypewriterText 
                              text={skill.content} 
                              speed={5} 
                              delay={index * 50} 
                              active={activeIndex === 0} 
                            />
                          </div>
                        </InplaceContent>
                      </Inplace>
                    </div>
                  ))}
                </div>
              </ScrollPanel>
            </TabPanel>

            {/* ZAKŁADKA 2: LOGIKA (JS) */}
            <TabPanel header="Architektura (React)" leftIcon="pi pi-box mr-2">
              <ScrollPanel style={{ width: '100%', height: '350px' }} className="terminal-scroll">
                <div className="terminal-content text-blue-300">
                  <div className="mb-3 text-xs opacity-50">
                    <TypewriterText text="> Inicjalizacja AppShell.jsx..." speed={10} active={activeIndex === 1} />
                  </div>
                  <pre className="code-pre">
                    <TypewriterText text={LOGIC_CODE} speed={3} active={activeIndex === 1} />
                  </pre>
                </div>
              </ScrollPanel>
            </TabPanel>

            {/* ZAKŁADKA 3: STYL (CSS) */}
            <TabPanel header="Geometria (CSS)" leftIcon="pi pi-palette mr-2">
              <ScrollPanel style={{ width: '100%', height: '350px' }} className="terminal-scroll">
                <div className="terminal-content text-green-300">
                  <div className="mb-3 text-xs opacity-50">
                    <TypewriterText text="> Parsowanie index.css..." speed={10} active={activeIndex === 2} />
                  </div>
                  <pre className="code-pre">
                    <TypewriterText text={CSS_CODE} speed={4} active={activeIndex === 2} />
                  </pre>
                </div>
              </ScrollPanel>
            </TabPanel>
          </TabView>
        </div>

        {/* Prawa kolumna: Metryki */}
        <div className="w-full xl:w-20rem glass-panel p-4 flex flex-column align-items-center justify-content-center">
          <h3 className="text-center font-semibold text-sm mb-4 opacity-80" style={{ letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Metryki Twórcze
          </h3>
          
          <div className="chart-container relative flex justify-content-center w-full" style={{ maxWidth: '200px' }}>
            <Chart type="doughnut" data={chartData} options={chartOptions} className="w-full" />
            
            {/* Wyśrodkowana ikona - teraz z translate(-50%, -50%) bo canvas jest czystym kwadratem */}
            <div className="absolute top-50 left-50" style={{ transform: 'translate(-50%, -50%)' }}>
              <i className="pi pi-microchip text-4xl opacity-50" style={{ color: 'var(--accent-primary)' }}></i>
            </div>
          </div>
          
          {/* Custom HTML Legend */}
          <div className="mt-4 flex flex-column gap-2 w-full px-3 text-xs">
            {chartData.labels.map((label, i) => (
              <div key={label} className="flex align-items-center gap-2">
                <span 
                  className="border-round" 
                  style={{ width: '20px', height: '8px', backgroundColor: chartData.datasets[0].backgroundColor[i] }}
                ></span>
                <span className="opacity-80">{label}</span>
              </div>
            ))}
          </div>

          <div className="mt-4 text-xs text-center opacity-60 line-height-3">
            Odzwierciedla balans pomiędzy Prompt Engineeringiem (skille) a natywnym kodem aplikacji.
          </div>
        </div>

      </div>
    </section>
  );
}
