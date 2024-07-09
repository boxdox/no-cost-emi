import { useState } from 'preact/hooks'

import { type EmiDetails, calculateEmi } from './calculate'
import { Form } from './components/form'
import { Result } from './components/result'

export const App = () => {
  const [result, setResult] = useState<EmiDetails | null>(
    calculateEmi({
      amount: 10000,
      interestPerAnnum: 15,
      timeInMonths: 6,
      processingFees: 0,
      gstInPercentage: 18,
    })
  )

  const handleSubmit = (e: Event) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)

    const inputData = {
      amount: parseFloat(formData.get('amount') as string),
      interestPerAnnum: parseFloat(formData.get('interest') as string),
      timeInMonths: parseInt(formData.get('time') as string),
      processingFees: parseFloat((formData.get('processingFees') as string) || '0'),
      gstInPercentage: parseFloat((formData.get('gst') as string) || '18'),
    }

    setResult(calculateEmi(inputData))
  }

  return (
    <div class="w-full max-w-xl rounded-lg border-border p-4 sm:border">
      <Form handleSubmit={handleSubmit} />
      <div class="mx-auto my-6 w-[80%] rounded-full border-t-4 border-primary/20" />
      <Result emiDetails={result} />
    </div>
  )
}
