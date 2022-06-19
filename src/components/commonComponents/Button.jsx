import React from 'react'

function Button({variant, size, color, children, ...props}) {

    function getClassNames() {
        const classes = ["px-6 py-[10px] rounded-full"]
        const colorToUse = color ? color : "primary"

        if(!variant || variant ==="filled") {
            classes.push(`bg-${colorToUse}-40 dark:bg-${colorToUse}-80 hover:opacity-[.92] text-${colorToUse}-100 dark:text-${colorToUse}-20`)
        }
        if(variant === "text") {
            classes.push(`hover:bg-primary-40/[0.08] dark:hover:bg-primary-80/[0.08] text-${colorToUse}-40 dark:text-${colorToUse}-80`)
        }
        if(variant === "outline") {
            classes.push(`outline outline-1 outline-neutralvariant-50 hover:bg-${colorToUse}-40/[0.08] dark:hover:bg-${colorToUse}-80/[0.08] dark-outline-neutralvariant60 text-${colorToUse}-40 dark:text-${colorToUse}-80`)
        }

        if(!size || size === "large") {
            classes.push("text-label-large")
        }
        if(size === "medium") {
            classes.push("text-label-medium")
        }
        if(size === "small") {
            classes.push("text-label-small")
        }

        return classes.join(" ")
    }
  return (
        <button className={getClassNames()} {...props}>{children}</button>
  )
}  


export default Button ;