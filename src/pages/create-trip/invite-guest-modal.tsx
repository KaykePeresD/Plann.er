import { AtSign, Plus, X } from "lucide-react"
import { FormEvent } from "react"

interface InviteGuestsModalProps {
  closeGuestsModal: () => void
  emailsToInvite: string[]
  addNewEmailToInvite: (event: FormEvent<HTMLFormElement>) => void
  removeEmailFromInvites: (email: string) => void
}

export function InviteGuestsModal({ addNewEmailToInvite, 
  closeGuestsModal, 
  emailsToInvite, 
  removeEmailFromInvites }: InviteGuestsModalProps) {
    return(
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
        <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
         <div className="space-y-2">
        <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Select guests</h2>
        <button type="button" onClick={closeGuestsModal} >
          <X className="size-5" />
        </button>

        
        </div>
        <p className="text-sm text-zinc-400">
          Guests will receive emails to confirm their participation in the trip.
          </p>
         </div>

         <div className="flex flex-wrap gap-2">
          {emailsToInvite.map(email => {
            return (
            <div key={email} className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-8">
            <span className="text-zinc-300">{email}</span>
            <button type="button" onClick={() => removeEmailFromInvites(email)}>
              <X  className="size-4 text-zinc-400"/>
            </button>
          </div>
            )
          })}
         </div>

         <div className="w-full h-px bg-zinc-800" />

         <form onSubmit={addNewEmailToInvite} className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
          <div className="px-2 flex items-center flex-1 gap-2 ">
          <AtSign className="text-zinc-400 size-5" />
          <input 
          type="email" 
          name="email" 
          placeholder="Enter the guest's email"
          className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none flex-1" />
          </div>
          <button type="submit" className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 flex items-center gap-2 font-medium hover:bg-lime-400">
          To invite
          <Plus className="size-5" />
          </button>     
         </form>
        </div>
      </div>
    )
}