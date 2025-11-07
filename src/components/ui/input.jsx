import * as React from "react"
import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "w-full bg-[#3b3b3b] text-white py-4 px-5 text-lg rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#e97216] border-none placeholder:text-gray-400 transition-all duration-200",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = "Input"

export { Input }
