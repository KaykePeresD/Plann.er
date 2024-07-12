import { ArrowRight, UserRoundPlus } from "lucide-react";
import { Button } from "../../../components/button";

interface InviteGuestsStepProps {
    openGuestModal: () => void
    emailsToInvite: string[]
    openConfirmTripModal: () => void
}

export function InviteGuestsStep({
    emailsToInvite,
    openConfirmTripModal,
    openGuestModal
} : InviteGuestsStepProps) {
    return (
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
            <button type="button" onClick={openGuestModal} className="flex items-center gap-2 flex-1">
                <UserRoundPlus className="size-5 text-zinc-400" />
                {emailsToInvite.length > 0 ? (
                    <span className="text-zinc-100 text-lg flex-1 text-left">{emailsToInvite.length} person(s) invited</span>
                ) : (
                    <span className="text-zinc-400 text-lg flex-1 text-left">Who will be on the trip?</span>

                )}
            </button>

            <Button onClick={openConfirmTripModal} variant="primary" size="default">
             Confirm trip
            <ArrowRight className="size-5" />
                 </Button>

            
        </div>
    )
}