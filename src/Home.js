const Home = () => {
    
    return (
        <div className="flex items-center bg-bg_gray-100 text-text_color-100 w-screen h-176 pl-40 overflow-hidden" id="home">
            <div>
                <h1 className="text-3xl font-black w-screen">Hi, I'm Ilian</h1>
                <h1 className="text-3xl font-black w-screen ml-28">A Young Developer and Copywriter</h1>
                <div className="w-96">
                    <p className="text-text_color-200 mt-10 mb-8">
                        I'm learning how to be a Full-stack developer.<br/>
                        I Also learned about copywriting and UI/UX for websites.<br/>
                        
                    </p>
                    <p className="text-text_color-200 mb-4">
                        Here is others domains I have some knowledge in...<br/>
                    </p>
                    <p className="text-text_color-200 ml-12">
                            📜 -> Copywriting <br/>
                            🕸️ -> Full-Stack <br/>
                            📡 -> Cybersecurity <br/>
                            ⚙️ -> Java and Minecraft Modding <br/>
                            🖥️ -> UI/UX <br/>
                    </p>
                    
                </div>
            </div>
        </div>
    )
};

export default Home;