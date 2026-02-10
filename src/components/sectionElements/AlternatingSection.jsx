export function AlternatingSection({
  index,
  colorMode,
  children,
  forcePrimaryDark = false,
}) {
  const colors = {
    light: ['bg-white', 'bg-terciary'],
    default: ['bg-white', 'bg-terciary'],
    dark: ['bg-black', 'bg-darkOpacity'],
  }

  // caso especial do default
  if (colorMode === 'default' && forcePrimaryDark) {
    return <section className="bg-primaryDark">{children}</section>
  }

  const bgClass = colors[colorMode][index % 2]

  return <section className={bgClass}>{children}</section>
}
