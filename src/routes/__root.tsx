import { Outlet, createRootRoute, HeadContent, Scripts } from '@tanstack/react-router'
import type { ReactNode } from 'react'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import appCss from '../styles.css?url'


export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'SolidRoad | AI-Powered Quality Assurance',
      },
      {
        name: 'description',
        content: 'Scale your support team with automated Quality Assurance and AI Coaching. Join high-growth companies using SolidRoad.',
      },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
    ],
  }),
  component: RootComponent,
  notFoundComponent: () => (
    <div className="min-h-screen bg-[#022c22] flex flex-col items-center justify-center text-center p-4">
      <h1 className="text-9xl font-bold text-emerald-900 animate-pulse">404</h1>
      <h2 className="text-3xl font-bold text-white mt-4">Page Not Found</h2>
      <p className="text-emerald-100/60 mt-2 max-w-md">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <a href="/" className="mt-8 px-6 py-3 bg-amber-500 text-emerald-950 font-bold rounded-full hover:bg-amber-400 transition-colors">
        Return Home
      </a>
    </div>
  ),
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
