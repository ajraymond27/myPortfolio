import React from 'react';
import { useRouter } from 'next/router'

export default function Link ({ children, href }) {
    const router = useRouter()
    return (
      <a
        href="#"
        onClick={e => {
          e.preventDefault()
          // typically you want to use `next/link` for this usecase
          // but this example shows how you can also access the router
          // and use it manually
          router.push(href)
        }}
      >
        {children}
        <style jsx>{`
          a {
            color: var(--base2);
            font-size: 14pt;
            font-weight: bold;
          }
          a:hover {
            color: var(--orange);
          }
        `}</style>
      </a>
    )
  }