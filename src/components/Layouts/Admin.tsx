import React, { PropsWithChildren } from 'react'

type Props = {}

export default function AdminLayout({children}: PropsWithChildren<Props>) {
  return (
    <div>{children}</div>
  )
}