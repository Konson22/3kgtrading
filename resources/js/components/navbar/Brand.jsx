import { Link } from 'react-router-dom'

export default function Brand() {
  return (
    <Link to="/" className="flex items-center gap-3 group">
      <img src="/images/logo2.png" alt="3K GTC" className="h-12 lg:h-16 w-auto" />
      <div className="flex flex-col pl-3 border-l border-gray-200 group-hover:border-gray-300 transition-colors">
        <span className="lg:text-base text-sm uppercase font-bold tracking-wider text-gray-700 group-hover:text-gray-900 transition-colors leading-tight">
          General Trading
        </span>
        <span className="text-[10px] font-medium tracking-widest text-primary uppercase group-hover:text-gray-600 transition-colors">
          Limited
        </span>
      </div>
    </Link>
  )
}
