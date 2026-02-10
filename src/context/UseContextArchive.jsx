import { createContext, useContext, useState } from 'react'

const ColorModeContext = createContext(null)

export function ColorModeProvider({ children }) {
  const [colorMode, setColorMode] = useState('dark') // default, light, dark
  const [whatsAppColor] = useState(false) // ativa cor do WhatsApp
  const [showGlobalButton] = useState(false) // ativa as os botões e caixa de alerta
  const [enableClickEvent, setEnableClickEvent] = useState(true) // Dispara evento de clique

  return (
    <ColorModeContext.Provider
      value={{
        colorMode,
        setColorMode,
        whatsAppColor,
        showGlobalButton,
        enableClickEvent,
        setEnableClickEvent,
      }}
    >
      {children}
    </ColorModeContext.Provider>
  )
}

export function ButtonsLps() {
  const [showGlobalButtonsLps, setShowGlobalButtonsLps] = useState(true) // ativa as os botões da lps

  return {
    showGlobalButtonsLps,
    setShowGlobalButtonsLps,
  }
}

export const whatsAppThemes = {
  light: 'bg-wppDark text-corTitulosPreto border-green-600/30',
  dark: 'bg-wppLight text-corTitulosBranca border-green-600/30',
  default: 'bg-wppDark text-corTitulosPreto border-green-600/30',
}

export const defaultButtonThemes = {
  light: 'bg-primaryDark text-corTitulosBranca border border-primaryDark/20 ',
  dark: 'bg-primaryLight text-corTitulosPreto',
  default: 'bg-primaryLight text-corTitulosPreto ',
}

export const alertTheme = {
  light: 'bg-red-800 text-corTitulosBranca border border-primaryDark/20',
  dark: 'bg-red-800 text-corTitulosBranca border border-primaryDark/20 shadow-white',
}

export function useColorMode() {
  const context = useContext(ColorModeContext)
  if (!context) {
    throw new Error('useColorMode must be used within ColorModeProvider')
  }
  return context
}

export default function MeuBotao({ children }) {
  const { enableClickEvent } = useColorMode()

  function handleClick() {
    if (!enableClickEvent) return

    console.log('Evento disparado!')
  }

  return <button onClick={handleClick}>{children}</button>
}
