


export function DangerButton({ labelName }: { labelName?: string }) {
    return (
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg cursor-pointer w-full min-w-[150px] max-w-[190px] transition-all">
            {labelName || "Danger"}
        </button>
    )
}


export function SecondaryButton({ labelName }: { labelName?: string }) {
    return (
        <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg cursor-pointer w-full min-w-[150px] max-w-[190px] transition-all">
            {labelName || "Secondary"}
        </button>
    )
}


export function PrimaryButton({ labelName }: { labelName?: string }) {
    return (
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg cursor-pointer w-full min-w-[150px] max-w-[190px] transition-all">
            {labelName || "Primary"}
        </button>
    )
}

export function UpdateButton({ labelName }: { labelName?: string }) {
    return (
        <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg cursor-pointer w-full min-w-[150px] max-w-[190px] transition-all">
            {labelName || "Update"}
        </button>
    )
}


export function DoneButton({ labelName }: { labelName?: string }) {
    return (
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg cursor-pointer w-full min-w-[150px] max-w-[190px] transition-all">
            {labelName || "Done"}
        </button>
    )
}



export function FlexRow({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-row gap-4 mx-8 border-[6px] px-8 py-8 border-white rounded-lg shadow-lg bg-slate-100">
            {children}
        </div>
    )
}

export function Title({ title }: { title: string }) {
    return (
        <h1 className="text-4xl my-2 font-bold tracking-widest text-green-500 rounded-lg px-2 py-2 bg-slate-50 cursor-pointer">
            {title}
        </h1>
    )
}


// This page import all UI Components for visualization/debug/testing
export default function UI() {
    return (
        // Main Ui Page Container
        <div className='w-full mx-auto px-2 py-28 flex flex-col items-start justify-start gap-4 min-h-screen bg-slate-200'>

            <Title title="Buttons" />
            <FlexRow>
                <DoneButton />
                <UpdateButton />
                <PrimaryButton />
                <DoneButton labelName='Success' />
                <SecondaryButton />
                <DangerButton />
                
            </FlexRow>

        </div>
    )
}