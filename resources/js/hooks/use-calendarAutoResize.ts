import { useEffect } from "react";



export function useCalendarAutoResize(ref : any , deps: any[] = []) {


    useEffect(()=>{

        if(ref?.current){
            ref.current.getApi().updateSize();


            setTimeout(() => {
                window.dispatchEvent(new Event("resize"));
            }, 40);
        }

    } , deps);

}
