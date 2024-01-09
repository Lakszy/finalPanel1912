'use client';
import { ReactNode } from "react"

interface IPrimaryInput extends React.InputHTMLAttributes<HTMLInputElement>  {
    label ?: string,
    LeftComp ?: ReactNode,
    RightComp ?: ReactNode,
}
const PrimaryInput = ({
    label,
    LeftComp,
    RightComp,
    ...props
}: IPrimaryInput ) => {
    return(
        <div className="flex flex-col ">
            {!!label && <label className="text-md text-gray-600">{label}</label>}
            <div className="flex items-center border border-[#F0E4E4] rounded-3xl p-2 bg-white ">
                {LeftComp && LeftComp}
                <input
                    className= "block p-2  flex-1 border-none outline-none bg-transparent  "
                 {...props}  />
                {RightComp && RightComp}
            </div>  
        </div>
    )
    
}

export default PrimaryInput