import {FaWhatsapp} from "react-icons/fa";

function Chat() {
    return (
        <div class="fixed bottom-10 right-10 flex items-center gap-3 z-50">
            <span className="bg-white text-gray-700 text-sm font-medium px-3 px-2 rounded-lg shadow-md hidden md:block">
                Chat me on Whatsapp
            </span>
                <a href="https://wa.me/2348029934948"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 p-4 text-white rounded-full text-green-500 transition delay-150 ease-in-out hover:-translate-y-1 hover:scale-110">
                    <FaWhatsapp className="text-4xl"/>
                </a>
        </div>
    );
}

export default Chat;