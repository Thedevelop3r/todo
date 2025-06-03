import Breadcrumbs from '@/components/BreadCrumbs'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'



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
        <div className="flex flex-row flex-wrap w-full gap-16 border-[6px] px-4 py-8 border-white rounded-lg shadow-lg bg-slate-100">
            {children}
        </div>
    )
}

export function Title({ title }: { title: string }) {
    return (
        <h1 className="text-4xl my-2 font-bold tracking-widest text-green-500 inset-shadow-sm inset-shadow-green-500 rounded-lg shadow-lg px-2 py-2 bg-slate-50 cursor-pointer">
            {title}
        </h1>
    )
}

export function Checkbox() {
    return (
        <div className="flex items-center">
            <input
                type="checkbox"
                className="h-5 w-5 accent-blue-600"
            />
            <label className="ml-2 text-gray-700">Checkbox</label>
        </div>
    );
}

export  function StyledCheckboxes() {
  return (
    <>
      {/* 1. Basic Blue Checkbox */}
      <div className="flex items-center">
        <input type="checkbox" className="h-5 w-5 accent-blue-600" />
        <label className="ml-2 text-gray-700">Basic Blue</label>
      </div>

      {/* 2. Rounded Pink Checkbox */}
      <div className="flex items-center">
        <input type="checkbox" className="h-5 w-5 rounded-full accent-pink-500" />
        <label className="ml-2 text-pink-700">Rounded Pink</label>
      </div>

      {/* 3. Green Scale-on-Check */}
      <div className="flex items-center group">
        <input
          type="checkbox"
          className="h-5 w-5 accent-green-500 transition-transform group-hover:scale-110"
        />
        <label className="ml-2 text-green-800">Scale on Hover</label>
      </div>

      {/* 4. Purple Shadow Checkbox */}
      <div className="flex items-center">
        <input
          type="checkbox"
          className="h-5 w-5 accent-purple-600 shadow-sm shadow-purple-200"
        />
        <label className="ml-2 text-purple-700">Shadow Purple</label>
      </div>

      {/* 5. Red Checkbox with Ring on Focus */}
      <div className="flex items-center">
        <input
          type="checkbox"
          className="h-5 w-5 accent-red-600 focus:ring-2 focus:ring-red-300"
        />
        <label className="ml-2 text-red-700">Focus Ring</label>
      </div>

      {/* 6. Indigo Hover Animation */}
      <div className="flex items-center group">
        <input
          type="checkbox"
          className="h-5 w-5 accent-indigo-500 transition-all duration-300 group-hover:scale-125"
        />
        <label className="ml-2 text-indigo-700">Hover Animate</label>
      </div>

      {/* 7. Checkbox with Label Tooltip */}
      <div className="flex items-center group relative">
        <input type="checkbox" className="h-5 w-5 accent-yellow-500" />
        <label className="ml-2 text-yellow-700">Hover Me</label>
        <span className="absolute left-28 opacity-0 group-hover:opacity-100 bg-black text-white text-xs rounded px-2 py-1 transition">
          Tooltip Info
        </span>
      </div>

      {/* 8. Dark Themed Checkbox */}
      <div className="flex items-center bg-gray-800 p-2 rounded">
        <input type="checkbox" className="h-5 w-5 accent-white" />
        <label className="ml-2 text-white">Dark Mode</label>
      </div>

      {/* 9. Cyan Checkbox with Text Change */}
      <div className="flex items-center">
        <input type="checkbox" id="check-cyan" className="h-5 w-5 accent-cyan-600 peer" />
        <label htmlFor="check-cyan" className="ml-2 peer-checked:text-cyan-600">
          Text Color on Check
        </label>
      </div>

      {/* 10. Orange Checkbox with Bold Label on Check */}
      <div className="flex items-center">
        <input type="checkbox" id="check-orange" className="h-5 w-5 accent-orange-500 peer" />
        <label htmlFor="check-orange" className="ml-2 peer-checked:font-bold">
          Bold on Check
        </label>
      </div>
    </>
  );
}

export function StyledRadioButtons() {
  return (
    <>
      {/* 1. Basic Blue Radio */}
      <div className="flex items-center">
        <input type="radio" name="color" className="h-5 w-5 accent-blue-600" />
        <label className="ml-2 text-gray-700">Basic Blue</label>
      </div>

      {/* 2. Pink Rounded Radio */}
      <div className="flex items-center">
        <input type="radio" name="color" className="h-5 w-5 rounded-full accent-pink-500" />
        <label className="ml-2 text-pink-700">Rounded Pink</label>
      </div>

      {/* 3. Green Scale-on-Check */}
      <div className="flex items-center group">
        <input
          type="radio"
          name="color"
          className="h-5 w-5 accent-green-500 transition-transform group-hover:scale-110"
        />
        <label className="ml-2 text-green-800">Scale on Hover</label>
      </div>

      {/* 4. Purple Radio with Shadow */}
      <div className="flex items-center">
        <input
          type="radio"
          name="color"
          className="h-5 w-5 accent-purple-600 shadow-sm shadow-purple-300"
        />
        <label className="ml-2 text-purple-700">Shadow Purple</label>
      </div>

      {/* 5. Red Focus Ring */}
      <div className="flex items-center">
        <input
          type="radio"
          name="color"
          className="h-5 w-5 accent-red-600 focus:ring-2 focus:ring-red-300"
        />
        <label className="ml-2 text-red-700">Focus Ring</label>
      </div>

      {/* 6. Indigo Hover Animation */}
      <div className="flex items-center group">
        <input
          type="radio"
          name="color"
          className="h-5 w-5 accent-indigo-500 transition-transform duration-300 group-hover:scale-125"
        />
        <label className="ml-2 text-indigo-700">Hover Animate</label>
      </div>

      {/* 7. Yellow with Tooltip */}
      <div className="flex items-center group relative">
        <input type="radio" name="color" className="h-5 w-5 accent-yellow-500" />
        <label className="ml-2 text-yellow-700">Hover Me</label>
        <span className="absolute left-28 opacity-0 group-hover:opacity-100 bg-black text-white text-xs rounded px-2 py-1 transition">
          Tooltip Info
        </span>
      </div>

      {/* 8. Dark Mode Radio */}
      <div className="flex items-center bg-gray-800 p-2 rounded">
        <input type="radio" name="color" className="h-5 w-5 accent-white" />
        <label className="ml-2 text-white">Dark Mode</label>
      </div>

      {/* 9. Cyan Text Change on Select */}
      <div className="flex items-center">
        <input type="radio" id="radio-cyan" name="color" className="h-5 w-5 accent-cyan-600 peer" />
        <label htmlFor="radio-cyan" className="ml-2 peer-checked:text-cyan-600">
          Text Color on Check
        </label>
      </div>

      {/* 10. Orange Bold Label on Select */}
      <div className="flex items-center">
        <input
          type="radio"
          id="radio-orange"
          name="color"
          className="h-5 w-5 accent-orange-500 peer"
        />
        <label htmlFor="radio-orange" className="ml-2 peer-checked:font-bold">
          Bold on Check
        </label>
      </div>
    </>
  );
}



// This page import all UI Components for visualization/debug/testing
export default function UI() {
    return (
        // Main Ui Page Container
        <div className='w-full px-2 py-28 flex flex-col items-start justify-start gap-4 min-h-screen bg-slate-200'>
            <Navbar />
            <Sidebar />
            <Breadcrumbs />
            {/* Buttons */}
            <Title title="Buttons" />
            <FlexRow>
                <DoneButton />
                <UpdateButton />
                <PrimaryButton />
                <DoneButton labelName='Success' />
                <SecondaryButton />
                <DangerButton />
            </FlexRow>

            {/* Checkbox */}
            <Title title="Checkbox" />
            <FlexRow>
                <Checkbox />
                <StyledCheckboxes />
            </FlexRow>

            {/* Radio */}
            <Title title="Radio" />
            <FlexRow>
               <StyledRadioButtons />
            </FlexRow>
            <Footer />
        </div>
    )
}