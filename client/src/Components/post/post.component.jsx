import postImg from '../../images/postImg/postImg.jpg'
import AuthorHeader from '../authorHeader/author-header.component';

const Post = () => {
    return (
        <>
            <div className='flex items-center' >
            <img className="transition ease-in-out delay-200 hover:scale-110" src={postImg} height={"512"} width="512" alt="" />
                <div className='bg-white flex-col space-y-4 max-h-18 w-full shadow-lg p-16' >
                    <h1 className='uppercase font-Raleway text-text-grey text-2xl' >Description</h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                    <AuthorHeader small />
                </div>
            </div>
        </>
    );
}

export default Post;