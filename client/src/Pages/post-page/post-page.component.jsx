import Discussion from "../../Components/discussion/discussion.component";
import PillButton from "../../Components/pill-button/pill-button.component";
import Post from "../../Components/post/post.component";
import ScrollToTop from "../../Components/scroll-to-top/scroll-to-top.component";

const PostPage = () => {
    return (
        <>
            <div className="bg-a text-white p-24 flex" />
            <div className="w-full max-w-5xl mx-auto mt-[-80px] my-8 space-y-12"  >
                <Post />
                <div className="flex-col justify-items-center bg-white shadow-lg" >
                    <div className="bg-white border text-p text-2xl rounded-full p-2 flex justify-center  w-52 mx-auto" >
                        <h1>DISCUSSIONS</h1>
                    </div>
                    <Discussion />
                </div>
            </div>
            <ScrollToTop />
        </>
    );
}

export default PostPage;