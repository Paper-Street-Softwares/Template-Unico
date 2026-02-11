export function AlternatingSection({
  index,
  colorMode,
  children,
  forcePrimaryDark = false,
}) {
  const colors = {
    light: ['bg-white', 'bg-neutral-50'],
    defaultDark: ['bg-white', 'bg-terciary'],
    defaultLight: ['bg-primaryLight', 'bg-primaryDark'],
    dark: ['bg-black', 'bg-darkOpacity'],
  }

  // caso especial do default
  if (colorMode === 'defaultDark' && forcePrimaryDark) {
    return <section className="bg-primaryDark">{children}</section>
  }

  if (colorMode === 'defaultLight' && forcePrimaryDark) {
    return <section className="bg-white">{children}</section>
  }

  const bgClass = colors[colorMode][index % 2]

  return <section className={bgClass}>{children}</section>
}
