import Image from "next/image";
import Link from "next/link";

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
  formText?: string;
}

const Button = ({ type, title, icon, variant, full, formText }: ButtonProps) => {
  const whatsappURL = 'https://wa.me/6281333373738'
  const templateMessage = 'Hi%2C+I+want+to+know+more+about+makara+buggy'
  const message = type === 'submit' ? formText : templateMessage
  const url = `${whatsappURL}?text=${message}`

  return (
    <Link href={url} target="_blank">
      <button
        className={`flexCenter gap-1 md:gap-3 rounded-full border ${variant} py-1 px-2 md:px-4 ${full && 'w-full'}`}
        type={type}
      >
          {icon && <Image src={icon} alt={title} width={24} height={24} className="w-[12px] h-[12px] md:w-[24px] md:h-[24px]"/>}
          <label className="text-[8px] md:text-lg whitespace-nowrap cursor-pointer">{title}</label>
      </button>
    </Link>
  )
}

export default Button