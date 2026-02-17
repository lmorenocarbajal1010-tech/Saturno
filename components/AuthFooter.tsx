import Link from 'next/link'
import React from 'react'

type Props = {
  question: string
  href: string
  linkText: string
}

export default function AuthFooter({ question, href, linkText }: Props) {
  return (
    <p className="text-center text-gray-400 text-sm mt-6">
      {question}{' '}
      <Link href={href} className="text-purple-400 hover:text-purple-300 font-semibold transition-colors">
        {linkText}
      </Link>
    </p>
  )
}
