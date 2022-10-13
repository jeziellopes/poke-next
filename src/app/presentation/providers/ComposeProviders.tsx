import React from 'react'

interface IComposeProvidersProps {
  with: Array<React.ElementType>
  children: React.ReactNode
}

export const ComposeProviders = ({
  with: Providers,
  children,
}: IComposeProvidersProps) => {
  return (
    <>
      {Providers.reduceRight(
        (ComposedProviders, ParentProvider) => (
          <ParentProvider>{ComposedProviders}</ParentProvider>
        ),
        children
      )}
    </>
  )
}
