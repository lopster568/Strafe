import AuthorHeader from '../authorHeader/author-header.component';
import Button from '../button/button.component';

const Card = ({ img, title, author }) => {
    return (
        <div className='mx-auto w-full flex justify-center' >
            <div className="bg-white text-text-grey w-72 min-h-[10rem] shadow-lg rounded-md overflow-hidden " >
                <img src={img} alt="" height="512" width="512" />
                {/* badge */}
                <div className='p-5 flex-col gap-3 flex-col space-y-2' >
                    <span className='px-3 py-1 rounded-full text-xs bg-bg'>two weeks ago</span>
                    {/* product title */}
                    <div>
                        <h2 className='font-semibold mb-2 text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap'>
                            {title}
                        </h2>
                        <span className='text-md' >{<AuthorHeader small />}</span>
                    </div>
                    <div className='mt-5 flex gap-2' >
                        <Button color="s" className="w-full" >View Thread</Button>
                        <div className='py-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;