import { EmiDetails, formatAmount } from '../calculate'

export const Result = ({ emiDetails }: { emiDetails: EmiDetails | null }) => {
  const tableHeaderClass = `px-4 py-2 border-b border-solid border-border`
  const tableDataClass = `text-center whitespace-nowrap`

  return (
    <>
      {emiDetails === null ? (
        <p class="text-center text-xl">results will appear here...</p>
      ) : (
        <>
          <div class="mb-2 flex flex-col gap-2">
            <p>
              Total Amount: <b>{formatAmount(emiDetails.totalAmount)}</b>
            </p>
            <p>
              Upfront Discount: <b>{formatAmount(emiDetails.upfrontDiscount)}</b>
            </p>
            <p>
              Extra Amount:{' '}
              <span class="text-primary">
                <b>{formatAmount(emiDetails.extraAmount)}</b>
              </span>
            </p>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full border-separate border-spacing-y-2">
              <thead>
                <tr>
                  <th class={tableHeaderClass}>Month</th>
                  <th class={tableHeaderClass}>Outstanding</th>
                  <th class={tableHeaderClass}>Emi Amount</th>
                  <th class={tableHeaderClass}>Interest</th>
                  <th class={tableHeaderClass}>GST</th>
                </tr>
              </thead>
              <tbody>
                {emiDetails.tableData.map(entry => (
                  <tr key={entry.index}>
                    <td class={tableDataClass}>{entry.index}</td>
                    <td class={tableDataClass}>{formatAmount(entry.outstanding)}</td>
                    <td class={tableDataClass}>{formatAmount(entry.emiAmount)}</td>
                    <td class={tableDataClass}>{formatAmount(entry.interest)}</td>
                    <td class={tableDataClass}>{formatAmount(entry.gst)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  )
}
