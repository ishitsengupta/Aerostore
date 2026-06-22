export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const baseStyle = "px-6 py-2 rounded-lg font-medium transition-all duration-300 disabled:opacity-50";
  const variants = {
    primary: "bg-[#7C9CFF] hover:bg-[#6885e5] text-white shadow-lg shadow-[#7C9CFF]/30",
    outline: "border border-[#7C9CFF] text-[#7C9CFF] hover:bg-[#7C9CFF]/10",
    ghost: "text-slate-500 hover:text-slate-800 hover:bg-slate-200/50"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}