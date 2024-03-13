import Link from "next/link";

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant?: string;
  full?: boolean;
  formText?: string;
  size?: string;
}

const Button = ({ type, title, icon, variant, full, formText, size }: ButtonProps) => {
  const whatsappURL = 'https://wa.me/6281333373738'
  const templateMessage = 'Hi%2C+I+want+to+know+more+about+makara+buggy'
  const message = type === 'submit' ? formText : templateMessage
  const url = `${whatsappURL}?text=${message}`

  return (
    <Link href={url} target="_blank">
      <button
        className={`flexCenter gap-1 md:gap-3 rounded-full ${variant} py-1 px-2 md:px-4 ${full && 'w-full'}`}
        type={type}
      >
          {icon && <img src={icon} alt={title} width={72} height={72} className={`${size === 'lg' ? 'w-[36px] h-[36px] md:w-[72px] md:h-[72px]' : 'w-[12px] h-[12px] md:w-[24px] md:h-[24px]'}`}/>}
          {title && <label className="text-[8px] md:text-lg whitespace-nowrap cursor-pointer">{title}</label>}
      </button>
    </Link>
  )
}

export default Button