import user from '../../images/avatar/user.jpg'

const AuthorHeader = ({small, timestamp}) => {
    return (
        <>
            {
                small ? (
                    <div className='flex flex-col cursor-default' >
                        <div className='flex items-center space-x-1'>
                            <img className="w-6 h-6 rounded-full" src={user} alt="Rounded avatar" />
                            <h2 className='font-bold uppercase text-sm' >Samira</h2>
                        </div>
                    </div>
                ) : (
                    <div className='flex flex-col cursor-default' >
                        <div className='flex items-center space-x-3'>
                            <img className="w-10 h-10 rounded-full" src={user} alt="Rounded avatar" />
                            <h2 className='font-bold uppercase text-l' >Samira</h2>
                            {
                                timestamp ? (
                                    <span className='px-3 py-1 rounded-full text-xs text-white bg-a'>2w</span>
                                    ) : null
                                }
                        </div>
                    </div>
                )
            }
        </>
    );
}

export default AuthorHeader;