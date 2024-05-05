import checkout from '../../assets/images/checkout/checkout.png'
const AddNewService = () => {
    return (
        <div>
            <div className='space-y-32'>
                <div className='relative w-full'>
                    <img src={checkout} className='w-full rounded-xl' />
                    <div className='absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)'>
                        <p className='text-white font-bold text-5xl ml-24'>Add New Service</p>
                    </div>
                </div>
                <div>
                    <div className='p-24 bg-[#F3F3F3] rounded-xl'>
                        <form className='grid grid-cols-2 gap-6'>
                            <input type="text" placeholder='Service Name'
                                className='py-4 pl-6 rounded-xl'
                            />
                            <input type="text" placeholder='Service Price'
                                className='py-4 pl-6 rounded-xl'
                            />
                            <input type="text" placeholder='Text here'
                                className='py-4 pl-6 rounded-xl'
                            />
                            <input type="text" placeholder='Service Type'
                                className='py-4 pl-6 rounded-xl'
                            />
                            <textarea type="text" placeholder='Product Description'
                                className='col-span-2 pl-6 pt-4 rounded-xl'
                            />
                            <input type='submit' value="Submit" className='text-xl font-semibold bg-[#FF3811] text-white py-4 w-full col-span-2 rounded-xl'/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddNewService;