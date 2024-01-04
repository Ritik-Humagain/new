function Block(para){
    return(
<div className="py-8 px-8 contact-block flex justify-between bg-gradient-to-r from-purple-500 to-slate-900 text-cyan-400 max-w-sm mx-auto mt-5">
                    
                    <div> <b className="text-center pt-8 text-white"> Membership Number: </b> <b className="text-black border-double border-2 border-rose-500 rounded-full p-1">
                    {para.member}</b>
                        <br/>
                    <b> Name : </b>
                    {para.name}
                    <br/>
                    <b>Address : </b>
                    {para.address}
                    <br/>
                    <b>Contact : </b>
                    {para.contact}
                    </div>
                    <img src={para.image} className="mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0  border-2  "/>

                    
                </div>
    );
}
export default Block;