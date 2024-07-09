type InputProps = {
  name: string
  label: string
  subscript?: string
  [key: string]: any // rest props, no validation
}

export const Input = ({ label, subscript, name, ...rest }: InputProps) => {
  return (
    <label class="flex items-center justify-between gap-4" for={name}>
      {subscript ? (
        <p class="flex flex-col">
          <span>{label}</span>
          <span class="text-xs">{subscript}</span>
        </p>
      ) : (
        <p>{label}</p>
      )}
      <input
        id={name}
        name={name}
        type="number"
        class="no-spinner focus-visible:border-primary focus-visible:outline-primary focus-visible:ring-transparent"
        {...rest}
      />
    </label>
  )
}
