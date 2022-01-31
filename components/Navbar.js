import Link from "next/link";

const Navbar = () => {
    return ( 
        <div className="absolute bg-white w-screen h-24 mt-0 lg:fixed lg:w-full lg:top-0 lg:left-0 lg:z-40 flex">
            <div className="name ml-10 my-8 font-bold text-2xl">
                <img src='/Tealplatypus.svg' alt="" />
                <p>TailwindPractice</p>
            </div>
            <div className="flex justify-between ml-72 my-8">
                <a className="mr-10 text-teal-400 text-lg" href="/">Home</a>
                <div className="mr-10 text-lg">Components</div>
                <a className="mr-10 text-lg" href="/premium">Premium</a>
                <p className="mr-10 text-lg" href='/tools'>Tools</p>
            </div>
            <div className="rightelements flex justify-between space-y-4 lg:space-y-0 lg:flex-row lg:items-right lg:space-x-4 ml-auto mr-24 my-8">
                    <a className='link bg-teal-400 w-24 text-center pt-2 mr-12 rounded-md h-10 font-bold text-neutral-100' href='/submit'>Submit</a>
                    <a className='login bg-teal-400 w-24 text-center pt-2 rounded-md h-10 font-bold text-neutral-100' href='/login'>Login</a>
            </div>
            {/* main area for the page */}
        </div>
     );
}
 
export default Navbar;