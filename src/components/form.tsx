import { Input } from './number-input'

export const Form = ({ handleSubmit }: { handleSubmit: (e: Event) => void }) => {
  return (
    <form class="flex flex-col justify-between gap-4" onSubmit={handleSubmit}>
      <h1 class="text-center text-3xl font-bold underline decoration-primary underline-offset-2">
        no cost emi calculator
      </h1>
      <Input 
        name="amount"
        label="Amount"
        min="1"
        step=".01"
        required
      />
      <Input
        name="interest"
        label="Interest"
        subscript="(per annum)"
        min=".01"
        step=".01"
        required
      />
      <Input
        name="time"
        label="Time Period"
        subscript="(in months)"
        min="1"
        required
      />
      <Input
        name="processingFees"
        label="Processing Fees"
        subscript="(if any)"
        min="0"
        step=".01"
        defaultValue="0"
      />
      <Input 
        name="gst" 
        label="GST" 
        min="0"
        step=".01"
        defaultValue="18" 
      />

      <button
        class="bg-gradient-to-r from-teal-200 to-lime-200 px-5 py-2.5 text-center font-semibold text-gray-900 transition-all hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:outline-none focus:ring-4 focus:ring-lime-200 dark:focus:ring-teal-700"
        type="submit"
      >
        Calculate
      </button>
    </form>
  )
}
