'use client'

import ErrorComponent from "./src/components/Error/Error.component"

export default function Error({
    error
  }: {
    error: Error
  }){
    return <ErrorComponent error={error}/>
}