export type TableEntry = {
  index: number
  outstanding: number
  emiAmount: number
  interest: number
  gst: number
}

export type EmiDetails = {
  extraAmount: number
  totalAmount: number
  upfrontDiscount: number
  tableData: Array<TableEntry>
}

export const formatAmount = (amount: number) => `Rs ${amount.toFixed(2)}`

export const calculateEmi = ({
  amount,
  interestPerAnnum,
  timeInMonths,
  processingFees,
  gstInPercentage,
}: {
  amount: number
  interestPerAnnum: number
  timeInMonths: number
  processingFees: number
  gstInPercentage: number
}): EmiDetails => {
  const interestPerMonth = interestPerAnnum / 12 / 100 // get decimal value for percentage
  const emiAmount = amount / timeInMonths

  const adjustedPrinciple =
    (emiAmount - emiAmount / Math.pow(interestPerMonth + 1, timeInMonths)) / interestPerMonth

  const processingFeesWithGST = processingFees * (1 + gstInPercentage / 100)
  const upfrontDiscount = amount - adjustedPrinciple

  const tableData: Array<TableEntry> = new Array(timeInMonths).fill(null)

  for (let i = 0; i < timeInMonths; i++) {
    const outstanding = i === 0 ? amount - upfrontDiscount : tableData[i - 1].outstanding

    const interest =
      (outstanding * interestPerMonth * Math.pow(1 + interestPerMonth, timeInMonths)) /
      Math.pow(1 + interestPerMonth, timeInMonths - 1)

    const gst = interest * (gstInPercentage / 100)

    tableData[i] = {
      index: i + 1,
      outstanding: outstanding + interest - emiAmount,
      interest,
      gst,
      emiAmount: emiAmount + gst,
    }
  }

  const totalAmount = tableData.reduce((acc, val) => acc + val.emiAmount, 0) + processingFeesWithGST

  return {
    totalAmount,
    upfrontDiscount,
    extraAmount: totalAmount - amount,
    tableData,
  }
}
