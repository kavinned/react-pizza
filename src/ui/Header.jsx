import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

export default function Header() {
    return (
        <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6 font-primary font-semibold">
            <Link to="/" className="tracking-widest">
                <span className="bg-yellow-700 px-1 py-1 rounded-full mx-1">
                    🍕
                </span>
                React Pizza{" "}
            </Link>
            <div className="md:absolute md:left-1/2 md:-translate-x-1/2">
                <SearchOrder />
            </div>
            <p>
                <Username />
            </p>
        </header>
    );
}
