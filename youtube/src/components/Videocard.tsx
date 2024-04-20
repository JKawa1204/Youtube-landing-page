
export function Videocard(props:any)
{
    return <div>
        <img className={"rounded-xl w-1920 h-1020 pl-5 ps-3 pt-6 cursor-pointer"} src ={props.image} /> 
        <div className="grid grid-cols-12 ">
            <div className="col-span-1">
                <img className={'rounded-full w-25 h-25 pt-5 cursor-pointer' } src= {props.thumb} />
            </div>
            <div className="col-span-11 pl-5 pt-5">
                <div className="cursor-pointer">
                    {props.title}
                    </div>
                <div className="col-span-11 pl-5 text-gray-600 text-base cursor-pointer">
                    {props.channel}
                </div>
                <div className="col-span-11 pl-5 text-gray-600 text-base">
                    {props.views} |  {props.time}
                </div>
            </div>
            
        </div>
    </div>
}