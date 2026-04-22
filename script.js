const FORM_ENDPOINT = '';
const DEFAULT_CONTACT_EMAIL = 'hola@traxus.com';
const DEFAULT_CONTACT_PHONE = '+52 55 1800 5874';

function safeText(id, value){
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function formatCurrency(value){
  return '$' + Math.round(Number(value || 0)).toLocaleString('es-MX');
}

function getPageElement(page){
  return document.getElementById(`page-${page}`);
}

function setActivePage(page){
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const el = getPageElement(page) || getPageElement('home');
  if (el) {
    el.classList.add('active');
    if (typeof el.focus === 'function') el.focus({preventScroll:true});
  }
  document.querySelectorAll('[data-page]').forEach(link => {
    const isActive = link.dataset.page === page;
    link.setAttribute('aria-current', isActive ? 'page' : 'false');
  });
}

function goTo(page){
  const resolved = getPageElement(page) ? page : 'home';
  setActivePage(resolved);
  if (window.location.hash !== `#${resolved}`) {
    history.replaceState(null, '', `#${resolved}`);
  }
  window.scrollTo({top:0, behavior:'smooth'});
  closeMobileMenu();
}

function initRouter(){
  document.querySelectorAll('a[href^="#"][onclick*="goTo"]').forEach(link => {
    const match = link.getAttribute('onclick').match(/goTo\('([^']+)'\)/);
    if (match) {
      link.dataset.page = match[1];
      link.addEventListener('click', (e) => {
        e.preventDefault();
        goTo(match[1]);
      });
    }
  });

  document.querySelectorAll('span[data-page]').forEach(el => {
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        goTo(el.dataset.page);
      }
    });
  });

  const route = (window.location.hash || '#home').replace('#', '');
  setActivePage(route);
  window.addEventListener('hashchange', () => {
    const next = (window.location.hash || '#home').replace('#', '');
    setActivePage(next);
    window.scrollTo({top:0, behavior:'smooth'});
  });
}

function toggleMenu(){
  const m = document.getElementById('mobileMenu');
  const h = document.getElementById('hbg');
  if (!m || !h) return;
  const open = m.classList.toggle('open');
  h.setAttribute('aria-expanded', String(open));
  h.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  m.setAttribute('aria-hidden', String(!open));
}

function closeMobileMenu(){
  const m = document.getElementById('mobileMenu');
  const h = document.getElementById('hbg');
  if (!m || !h) return;
  m.classList.remove('open');
  h.setAttribute('aria-expanded', 'false');
  h.setAttribute('aria-label', 'Abrir menú');
  m.setAttribute('aria-hidden', 'true');
}

function calcHome(){
  const sup = +document.getElementById('h-sup')?.value || 0;
  const jun = +document.getElementById('h-jun')?.value || 0;
  const par = +document.getElementById('h-par')?.value || 0;
  const costoJuntas = (jun * 95 * 2 * 10) + (jun * 120 * 3);
  const costoParos = (par * 50000 * 10) + (5 * 8000 * 10);
  const cost = costoJuntas + costoParos;
  safeText('h-save', formatCurrency(cost));
  safeText('h-sup-v', sup.toLocaleString('es-MX') + ' m²');
  safeText('h-jun-v', jun.toLocaleString('es-MX') + ' ml');
  safeText('h-par-v', par + ' días/año');
}

function calcFull(){
  const sup = +document.getElementById('c-sup')?.value || 0;
  const jun = +document.getElementById('c-jun')?.value || 0;
  const res = +document.getElementById('c-res')?.value || 0;
  const mon = +document.getElementById('c-mon')?.value || 0;
  const par = +document.getElementById('c-par')?.value || 0;
  const cop = +document.getElementById('c-cop')?.value || 0;

  const costoResellado10 = jun * res * 3;
  const costoReparacionBordes10 = jun * 95 * 2 * 10;
  const costoParos10 = par * cop * 10;
  const costoDesgasteEquipos10 = mon * 8000 * 10;
  const total = costoResellado10 + costoReparacionBordes10 + costoParos10 + costoDesgasteEquipos10;
  const sobrecostoLogislab = sup * 180;
  const be = total > 0 ? (sobrecostoLogislab / (total / 10)) : 0;

  safeText('c-conv', formatCurrency(total));
  safeText('c-log', formatCurrency(0));
  safeText('c-save', formatCurrency(total));
  safeText('c-be', Math.min(be, 9.9).toFixed(1) + ' años');
  safeText('c-sup-v', sup.toLocaleString('es-MX') + ' m²');
  safeText('c-jun-v', jun.toLocaleString('es-MX') + ' ml');
  safeText('c-res-v', formatCurrency(res) + '/ml');
  safeText('c-mon-v', mon + ' equipos');
  safeText('c-par-v', par + ' días/año');
  safeText('c-cop-v', formatCurrency(cop) + '/día');
}

function showToast(message){
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = message;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 5000);
}

async function handleSubmit(e){
  e.preventDefault();
  const form = e.target;
  if (!form.reportValidity()) return;

  const data = new FormData(form);
  const entries = Object.fromEntries(data.entries());
  const body = [
    'Nueva solicitud desde traxus.com',
    '',
    `Nombre y cargo: ${entries.nombreCargo || ''}`,
    `Empresa: ${entries.empresa || ''}`,
    `Correo: ${entries.correo || ''}`,
    `Teléfono: ${entries.telefono || ''}`,
    `Tipo de proyecto: ${entries.tipoProyecto || ''}`,
    `Superficie aproximada: ${entries.superficie || ''}`,
    `Ciudad del proyecto: ${entries.ciudad || ''}`,
    `Fecha estimada de inicio: ${entries.fechaInicio || ''}`,
    '',
    'Detalles del proyecto:',
    entries.detalleProyecto || ''
  ].join('\n');

  const submitBtn = form.querySelector('button[type="submit"]');
  if (submitBtn) submitBtn.disabled = true;

  try {
    if (FORM_ENDPOINT) {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {'Accept': 'application/json'},
        body: data
      });
      if (!response.ok) throw new Error('No se pudo enviar el formulario');
      showToast('✓ Solicitud enviada — Le contactaremos en menos de 48 horas hábiles.');
    } else {
      window.location.href = `mailto:${DEFAULT_CONTACT_EMAIL}?subject=${encodeURIComponent('Solicitud de evaluación de proyecto | TRAXUS')}&body=${encodeURIComponent(body)}`;
      showToast(`✓ Se abrió su correo. Si lo prefiere, escríbanos a ${DEFAULT_CONTACT_EMAIL} o llámenos al ${DEFAULT_CONTACT_PHONE}.`);
    }
    form.reset();
  } catch (error) {
    showToast(`No se pudo enviar automáticamente. Escríbanos a ${DEFAULT_CONTACT_EMAIL}.`);
  } finally {
    if (submitBtn) submitBtn.disabled = false;
  }
}

function init(){
  initRouter();
  calcHome();
  calcFull();
  safeText('year', new Date().getFullYear());
}

document.addEventListener('DOMContentLoaded', init);
