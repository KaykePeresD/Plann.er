import { CalendarCheck, Mail, User, X } from "lucide-react"
import { FormEvent } from "react"
import { Button } from "../../components/button"

interface ConfirmTripModalProps {
  closeConfirmTripModal: () => void
  setOwnerName: (name: string) => void;
  setOwnerEmail: (email: string) => void;
  createTrip: (event: FormEvent<HTMLFormElement>) => void
}

export function ConfirmTripModal({
  closeConfirmTripModal,
  createTrip,
  setOwnerName,
  setOwnerEmail,
}: ConfirmTripModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Confirm trip creation</h2>
            <button>
              <X className="size-5 text-zinc-400" onClick={closeConfirmTripModal}/>
            </button>
          </div>

          <p className="text-sm text-zinc-400">
            To complete the creation of the trip to <span className="text-zinc-100 font-semibold ">Santorini</span> Greece on the dates of <span className="text-zinc-100 font-semibold ">October 16th to 29th, 2024</span> fill in your details below:
          </p>
        </div>

        <form onSubmit={createTrip} className="space-y-3">
          <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <User className="text-zinc-400 size-5" />
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none flex-1"
              onChange={event => setOwnerName(event.target.value)}
              />
          </div>

          <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <Mail className="text-zinc-400 size-5" />
            <input
              type="email"
              name="email"
              placeholder="Your personal email"
              className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none flex-1" 
              onChange={event => setOwnerEmail(event.target.value)}
              />
          </div>

          <Button variant="primary" size="full">
            Confirm trip creation
            <CalendarCheck className="size-5" />
          </Button>


        </form>
      </div>
    </div>
  )
}