import { Link } from 'react-router-dom';

export default function Brand() {
    return (
      <Link
                to="/"
                className="flex shrink-0 items-center gap-1.5 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
                <img src="/images/logo.png" alt="logo" className="h-14 w-14" />
            </Link>
    );
}
