import { Search, Submit, Table } from './';
import { useState } from 'react';


const Home = () => {
   const [total, setTotal] = useState(0);

    return (
        <div className='flex flex-row gap-11 mx-24 mt-7
        items-start justify-center max-md:flex-col max-md:gap-1 max-md:mx-3'>
            <h1 className='text-2xl p-3 font-mono font-bold border-2
            border-blue-500 rounded-xl bg-red-600 text-white'>
                Hello User
                <br />
                Welcome to the app
            </h1>

            <div className='flex flex-col justify-center items-center
            relative w-full border-2 border-black rounded-xl
            mt-11 max-sm:items-start bg-white'>

                <Search />

                <Table total={total} setTotal={setTotal} />

                <Submit total={total} />

            </div>

        </div>
    )
}

export default Home;