function Box() {
    return(
        <div className="h-[200px] w-[98%] ml-3 mt-2.5 gap-2.5 grid grid-cols-4">
            <section className="bg-amber-900">
                <section className="text-white ml-2">text A</section>
                <section className="h-[150px] bg-gray-500 w-[150px] ml-[150px] mt-[15px] flex justify-center items-center text-white">put <br />your <br /> photo</section>
            </section>
            <section className="bg-amber-800">
                <section className="text-white ml-2">text B</section>
                <section className="h-[150px] bg-gray-500 w-[150px] ml-[150px] mt-[15px] flex justify-center items-center text-white">put <br />your <br /> photo</section>
            </section>
            <section className="bg-amber-700">
                <section className="text-white ml-2">text C</section>
                <section className="h-[150px] bg-gray-500 w-[150px] ml-[150px] mt-[15px] flex justify-center items-center text-white">put <br />your <br /> photo</section>
            </section>
            <section className="bg-amber-600">
                <section className="text-white ml-2">text D</section>
                <section className="h-[150px] bg-gray-500 w-[150px] ml-[150px] mt-[15px] flex justify-center items-center text-white">put <br />your <br /> photo</section>
            </section>
        </div>  
    )
}
export default Box