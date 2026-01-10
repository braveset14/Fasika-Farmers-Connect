import React, { useState, useEffect } from 'react';
import { Search, Send, User, MessageCircle, ArrowLeft } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { mockApi } from '../../services/mockApi';

const Messages = () => {
    const { user } = useAuth();
    const [conversations, setConversations] = useState([]);
    const [activeConvo, setActiveConvo] = useState(null);
    const [newMessage, setNewMessage] = useState('');
    const [showChat, setShowChat] = useState(false);

    useEffect(() => {
        loadConversations();
    }, []);

    const loadConversations = () => {
        const convos = mockApi.messages.getConversations(user?.id || 'buyer1');
        setConversations(convos);
        if (convos.length > 0 && !activeConvo) {
            setActiveConvo(convos[0]);
        }
    };

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!newMessage.trim() || !activeConvo) return;

        mockApi.messages.sendMessage(activeConvo.id, user?.id || 'buyer1', newMessage);
        setNewMessage('');

        // Mock Farmer Reply after 2 seconds
        setTimeout(() => {
            mockApi.messages.sendMessage(activeConvo.id, activeConvo.farmerId, "Thank you for your message! I will get back to you shortly.");
            loadConversations();
            // Refresh active convo
            const updated = mockApi.messages.getConversations(user?.id || 'buyer1').find(c => c.id === activeConvo.id);
            setActiveConvo(updated);
        }, 1500);

        loadConversations();
        const updated = mockApi.messages.getConversations(user?.id || 'buyer1').find(c => c.id === activeConvo.id);
        setActiveConvo(updated);
    };

    return (
        <div className="h-[calc(100vh-160px)] flex flex-col animate-in fade-in duration-700">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-3xl font-black text-white">Messages</h1>
                    <p className="text-gray-400">Discuss produce and negotiate prices with farmers.</p>
                </div>
            </div>

            <div className="flex-grow flex bg-[#0d160f] border border-[#1a231c] rounded-[40px] overflow-hidden shadow-2xl">
                {/* Conversation List */}
                <div className={`w-full md:w-80 border-r border-[#1a231c] flex flex-col ${showChat ? 'hidden md:flex' : 'flex'}`}>
                    <div className="p-6 border-b border-[#1a231c]">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" size={16} />
                            <input
                                type="text"
                                placeholder="Search conversations..."
                                className="w-full bg-[#050a06] border border-[#1a231c] rounded-xl py-2.5 pl-10 pr-4 text-white text-sm outline-none focus:border-[#00df82]"
                            />
                        </div>
                    </div>
                    <div className="flex-grow overflow-y-auto p-4 space-y-2">
                        {conversations.length > 0 ? conversations.map(convo => (
                            <button
                                key={convo.id}
                                onClick={() => { setActiveConvo(convo); setShowChat(true); }}
                                className={`w-full flex items-center gap-4 p-4 rounded-3xl transition-all ${activeConvo?.id === convo.id ? 'bg-[#00df82]/10 border border-[#00df82]/30' : 'hover:bg-white/5 border border-transparent'}`}
                            >
                                <div className="w-12 h-12 bg-[#1a231c] rounded-2xl flex items-center justify-center text-[#00df82] shrink-0">
                                    <User size={20} />
                                </div>
                                <div className="text-left overflow-hidden">
                                    <h4 className="text-sm font-black text-white truncate">Farmer #{convo.farmerId}</h4>
                                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest truncate">Listing #{convo.listingId}</p>
                                    <p className="text-xs text-gray-400 truncate mt-1">{convo.messages[convo.messages.length - 1]?.text}</p>
                                </div>
                            </button>
                        )) : (
                            <div className="text-center py-10">
                                <MessageCircle className="mx-auto text-gray-700 mb-2" size={32} />
                                <p className="text-xs text-gray-600 font-bold">No active discussions.</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Chat Window */}
                <div className={`flex-grow flex flex-col bg-[#050a06]/50 ${!showChat ? 'hidden md:flex' : 'flex'}`}>
                    {activeConvo ? (
                        <>
                            {/* Chat Header */}
                            <div className="p-6 border-b border-[#1a231c] flex items-center gap-4 bg-[#0d160f]">
                                <button onClick={() => setShowChat(false)} className="md:hidden text-gray-400">
                                    <ArrowLeft size={20} />
                                </button>
                                <div className="w-10 h-10 bg-[#1a231c] rounded-xl flex items-center justify-center text-[#00df82]">
                                    <User size={18} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-black text-white">Farmer Discussion</h4>
                                    <p className="text-[10px] text-[#00df82] font-black uppercase tracking-widest">Online Now</p>
                                </div>
                            </div>

                            {/* Messages Area */}
                            <div className="flex-grow overflow-y-auto p-8 space-y-6 flex flex-col">
                                {activeConvo.messages.map((m, idx) => (
                                    <div
                                        key={idx}
                                        className={`max-w-[70%] p-4 rounded-3xl text-sm font-medium ${m.sender === (user?.id || 'buyer1') ? 'bg-[#00df82] text-[#050a06] self-end rounded-br-none' : 'bg-[#1a231c] text-white self-start rounded-bl-none'}`}
                                    >
                                        {m.text}
                                        <p className={`text-[8px] mt-1 ${m.sender === (user?.id || 'buyer1') ? 'text-[#050a06]/60' : 'text-gray-500'}`}>
                                            {new Date(m.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Message Input */}
                            <div className="p-6 bg-[#0d160f] border-t border-[#1a231c]">
                                <form onSubmit={handleSendMessage} className="flex gap-4">
                                    <input
                                        type="text"
                                        value={newMessage}
                                        onChange={(e) => setNewMessage(e.target.value)}
                                        placeholder="Type your message here..."
                                        className="flex-grow bg-[#050a06] border border-[#1a231c] rounded-2xl px-6 py-4 text-white text-sm outline-none focus:border-[#00df82] transition-all"
                                    />
                                    <button
                                        type="submit"
                                        className="bg-[#00df82] text-[#050a06] px-6 rounded-2xl font-black hover:scale-105 transition-all"
                                    >
                                        <Send size={18} />
                                    </button>
                                </form>
                            </div>
                        </>
                    ) : (
                        <div className="flex-grow flex flex-col items-center justify-center text-center p-10">
                            <div className="w-20 h-20 bg-[#1a231c] rounded-[30px] flex items-center justify-center text-gray-700 mb-6 border border-[#1a231c]">
                                <MessageCircle size={40} />
                            </div>
                            <h3 className="text-xl font-black text-white mb-2">Select a conversation</h3>
                            <p className="text-gray-500 max-w-xs text-sm font-medium">Choose a contact from the list on the left to start negotiating.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Messages;
