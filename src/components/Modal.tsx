
export function Modal({title,children,setSignup}:any) {
    return(
        <>
        <div className="fixed bg-black/50 top-0 right-0 left-0 bottom-0 z-40"onClick={()=>{setSignup(false)}}></div>
            <div className="mx-auto w-[500px] p-5 rounded bg-white fixed top-10 left-1/2 -translate-x-1/2 z-40">
            <h1 className="text-center font-bold text-3xl">{title}</h1>
            {children}
            </div>
            </>
    )
}