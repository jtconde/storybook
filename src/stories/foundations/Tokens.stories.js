const radii = [['--r-xs','6px'],['--r-sm','8px'],['--r-md','10px'],['--r-lg','12px'],
               ['--r-xl','16px'],['--r-2xl','20px'],['--r-pill','999px']];
const shadows = [['--sh-1','Resting card'],['--sh-2','Card at rest on light'],
                 ['--sh-3','Card on hover'],['--sh-4','Composer / modal'],['--sh-nav','Floating navbar']];

export default { title: 'Foundations/Radius & Elevation' };

export const Radius = {
  render: () => `<div class="sb-row">${radii.map(([t, v]) => `
    <div style="text-align:center">
      <div style="width:92px;height:72px;background:var(--surface-on-dark);
                  border:1px solid var(--line-on-dark);border-radius:var(${t})"></div>
      <code style="display:block;font-size:11.5px;color:var(--on-dark-2);margin-top:8px">${t}</code>
      <span style="font-size:11px;color:var(--on-dark-3)">${v}</span>
    </div>`).join('')}</div>`,
};

export const Elevation = {
  parameters: { backgrounds: { value: '#f2f2f2' } },
  render: () => `<div class="sb-row">${shadows.map(([t, use]) => `
    <div style="text-align:center">
      <div style="width:132px;height:84px;background:#fff;border-radius:12px;box-shadow:var(${t})"></div>
      <code style="display:block;font-size:11.5px;color:#3c3f48;margin-top:12px">${t}</code>
      <span style="font-size:11px;color:#75777f">${use}</span>
    </div>`).join('')}</div>`,
};
