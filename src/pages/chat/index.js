
import ChatWindow from "@/components/chat-window";
import CreateFolderButton from "@/components/create-folder-button";
import GenerateFileButton from "@/components/loan-creation";

export default function Chat() {
    return (
        <div>
            <h1>Chat</h1>
            <ChatWindow />  
            <GenerateFileButton />
            <CreateFolderButton />
        </div>
    )
}