import { Link2, Plus } from "lucide-react";
import { Button } from "../../components/button";

export function ImportantLinks() {
    return (
        <div className="space-y-6 ">
            <h2 className="font-semibold text-xl">Important links</h2>
            <div className="space-y-5">
                <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1.5 flex-1">
                        <span className="block font-medium text-zinc-100">
                            AirBnB Booking
                        </span>
                        <a href="#" className="block text-xs text-zinc-400 truncate hover:text-zinc-200">
                            https://www.airbnb.com.br/rooms/104700011</a>
                    </div>
                    <Link2 className="text-zinc-400 size-5" />
                </div>
                <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1.5 flex-1">
                        <span className="block font-medium text-zinc-100">
                            House rules
                        </span>
                        <a href="#" className="block text-xs text-zinc-400 truncate  hover:text-zinc-200">
                            https://www.notion.com/pages/10470001123
                        </a>
                    </div>
                    <Link2 className="text-zinc-400 size-5" />
                </div>
            </div>
            <Button variant="secondary" size="full">
                Register new link
                <Plus className="w-5 h-5" />
            </Button>
        </div>
    )
}