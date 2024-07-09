interface resolvedObject {
  name: string
  from: string
}

interface ComponentResolverObject {
  type: 'component' | 'directive'
  resolve: (name: string) => resolvedObject
}

function resolveDirective(name: string): resolvedObject {
  const directives: Record<string, { importName: string }> = {
    Hovertime: { importName: 'vHovertime' },
    Highlight: { importName: 'vHighlight' },
  }

  const directive = directives[name]
  return {
    name: directive.importName,
    from: '@v-anything/directives',
  }
}

export default function VAnythingResolver(): ComponentResolverObject[] {
  return [{
    type: 'directive',
    resolve: (name: string) => {
      return resolveDirective(name)
    },
  }]
}
