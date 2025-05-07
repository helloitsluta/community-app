import React from "react"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "danger"
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  ...props
}) => {
  const baseStyle =
    "px-4 py-2 rounded font-semibold transition duration-200 focus:outline-none"
  const variantStyle = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
  }

  return (
    <button className={`${baseStyle} ${variantStyle[variant]}`} {...props}>
      {children}
    </button>
  )
}

export default Button
