'use client'

import ErrorComponent from "@/app/src/components/Error/Error.component";

export default function Error({
    error
  }: {
    error: Error
  }) {
  
    return <ErrorComponent error={error}/>;
  }