import React from 'react'
import AtadosLogo from 'assets/svg/atados-logo.svg'

export interface ManifestProps {
  readonly darkMode: boolean
  readonly title: React.ReactNode
  readonly className?: string
}

const Manifest: React.FC<ManifestProps> = ({
  className,
  title,
  children,
  darkMode,
}) => {
  return (
    <div id="manifesto" className={className}>
      <h1
        className={`text-3xl font-bold mb-4 text-center${
          darkMode ? ' text-gray-100' : undefined
        }`}
      >
        {title}
      </h1>
      <div
        className={`text-xl leading-relaxed${
          darkMode ? ' text-gray-300' : undefined
        }`}
      >
        {children}
      </div>
      <p className="text-gray-600 text-2xl font-light mt-5 select-none">
        <AtadosLogo
          width={32}
          height={32}
          className="text-gray-600 inline-block mr-1"
        />{' '}
        Atados
      </p>
    </div>
  )
}

Manifest.displayName = 'Manifest'

export { Manifest }
export default Manifest
