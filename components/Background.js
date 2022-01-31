const Background = ({children}) => {
    return (  
    <nav className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 lg:fixed lg:w-full lg:top-0 lg:left-0 lg:z-40 h-full">
        <div className="flex px-4 py-5 mx-auto">
            {children}
        </div>
    </nav>
    );
}
 
export default Background;