import Image from "next/image";

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
}

const Button = ({ type, title, icon, variant, full }: ButtonProps) => {
  return (
    <button
    className={`flexCenter gap-1 md:gap-3 rounded-full border ${variant} py-1 px-2 md:px-4 ${full && 'w-full'}`}
      type={type}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} className="w-[12px] h-[12px] md:w-[24px] md:h-[24px]"/>}
      <label className="text-[8px] md:text-lg whitespace-nowrap cursor-pointer">{title}</label>
    </button>
  )
}

export default Button