const TailwindMain = () => {
    return ( 
        <section className="container fixed bg-slate-200 px-4 mt-40 lg:h-128 lg:space-x-8 lg:flex lg:items-center rounded-md">
            <div className="flex">
                <div className="1 h-72 w-100 mt-0 ml-0 rounded-md bg-teal-400 pt-8 pr-72">
                    <p className="text-3xl font-light text-left pl-4">An entire library of utilities and resources at your fingertips <span className="font-semibold">for free</span></p>
                </div>
                {/* <div className="2 mr-8 ml-44 bg-teal-400 px-72 border-l-4">Build your next UI from our library of components here
                </div> */}
            </div>
        </section>
     );
}
 
export default TailwindMain;