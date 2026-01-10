import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Send, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { mockApi } from '../../services/mockApi';

const Support = () => {
    const { user } = useAuth();
    const [issueType, setIssueType] = useState('Technical');
    const [message, setMessage] = useState('');
    const [tickets, setTickets] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadTickets();
    }, []);

    const loadTickets = () => {
        const userTickets = mockApi.tickets.getByUser(user?.id || 'farmer1');
        setTickets(userTickets);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!message.trim()) return;

        setLoading(true);
        setTimeout(() => {
            mockApi.tickets.create({
                userId: user?.id || 'farmer1',
                type: issueType,
                message: message
            });
            setMessage('');
            loadTickets();
            setLoading(false);
            alert("Support request submitted!");
        }, 800);
    };

    return (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header */}
            <div>
                <h1 className="text-4xl font-extrabold text-white mb-4">Customer Support</h1>
                <p className="text-sm text-gray-500 font-medium max-w-xl">
                    Need help with your listings or farm advice? Submit a ticket and our team will get back to you.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Submit Form */}
                <div className="bg-[#0d160f] border border-[#1a231c] rounded-[40px] p-10 shadow-2xl">
                    <h3 className="text-xl font-black text-white mb-8 flex items-center gap-3">
                        <MessageSquare className="text-[#00df82]" size={24} />
                        New Support Request
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-3">
                            <label className="text-[11px] font-black text-gray-500 uppercase tracking-widest pl-1">Issue Type</label>
                            <select
                                value={issueType}
                                onChange={(e) => setIssueType(e.target.value)}
                                className="w-full bg-[#050a06] border border-[#1a231c] rounded-2xl p-4 text-white text-sm font-bold outline-none focus:border-[#00df82] transition-all"
                            >
                                <option>Technical Issue</option>
                                <option>Listing Help</option>
                                <option>Market Prices</option>
                                <option>Weather Accuracy</option>
                                <option>General Inquiry</option>
                            </select>
                        </div>

                        <div className="space-y-3">
                            <label className="text-[11px] font-black text-gray-500 uppercase tracking-widest pl-1">Message</label>
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Describe your problem or question in detail..."
                                rows="6"
                                className="w-full bg-[#050a06] border border-[#1a231c] rounded-3xl p-5 text-white text-sm font-bold outline-none focus:border-[#00df82] resize-none placeholder:text-gray-800"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-[#00df82] text-[#050a06] font-black py-4 rounded-2xl flex items-center justify-center gap-3 hover:scale-[1.02] transition-all disabled:opacity-50"
                        >
                            <Send size={18} />
                            {loading ? 'Submitting...' : 'Send Request'}
                        </button>
                    </form>
                </div>

                {/* Ticket History */}
                <div className="space-y-6">
                    <h3 className="text-xl font-black text-white flex items-center gap-3">
                        <Clock className="text-gray-500" size={24} />
                        Recent Tickets
                    </h3>

                    <div className="space-y-4">
                        {tickets.length > 0 ? tickets.map(ticket => (
                            <div key={ticket.id} className="bg-[#0d160f] border border-[#1a231c] rounded-3xl p-6 hover:border-white/10 transition-all">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <span className="text-[10px] font-black uppercase text-[#00df82] bg-[#00df82]/10 px-2 py-1 rounded-md">
                                            {ticket.type}
                                        </span>
                                        <p className="text-xs text-gray-500 mt-2 font-medium">
                                            {new Date(ticket.createdAt).toLocaleDateString()} at {new Date(ticket.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </p>
                                    </div>
                                    <StatusBadge status={ticket.status} />
                                </div>
                                <p className="text-sm text-gray-300 font-medium leading-relaxed">
                                    {ticket.message}
                                </p>
                            </div>
                        )) : (
                            <div className="text-center py-20 bg-[#0d160f] rounded-3xl border border-[#1a231c] border-dashed">
                                <p className="text-gray-500 font-bold">No support tickets found.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

const StatusBadge = ({ status }) => {
    const styles = {
        OPEN: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
        IN_REVIEW: 'text-yellow-500 bg-yellow-500/10 border-yellow-500/20',
        RESOLVED: 'text-[#00df82] bg-[#00df82]/10 border-[#00df82]/20'
    };

    const icon = {
        OPEN: <ArrowRight size={10} />,
        IN_REVIEW: <AlertCircle size={10} />,
        RESOLVED: <CheckCircle2 size={10} />
    };

    return (
        <span className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border ${styles[status]}`}>
            {icon[status]}
            {status.replace('_', ' ')}
        </span>
    );
};

export default Support;
