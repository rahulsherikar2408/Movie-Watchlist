

function Pagination({pageNo, setPageNo}) {
    
    return (
        <div className="bg-gray-400 p-4 mt-8 flex justify-center">
            <div className={`text-2xl cursor-pointer hover:scale-130 duration-200 ${pageNo>1? 'hover:cursor-pointer':'hover:cursor-not-allowed hover:text-gray-500'}`} onClick={() => {(pageNo>1)?setPageNo(pageNo-1):''}}><i class="fa-solid fa-arrow-left"></i></div>
            <div className="text-2xl font-bold ml-5 mr-5">{pageNo}</div>
            <div className="text-2xl cursor-pointer hover:scale-130 duration-200" onClick={() => setPageNo(pageNo+1)}><i class="fa-solid fa-arrow-right"></i></div>
        </div>
    )
}

export default Pagination;