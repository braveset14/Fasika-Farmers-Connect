import React from 'react';
import {
    CloudSun,
    Droplets,
    Wind,
    RefreshCcw,
    CloudRain,
    Sun,
    Thermometer,
    Info,
    ChevronRight,
    CloudLightning
} from 'lucide-react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts';

const forecastData = [
    { name: 'Mon', temp: 22 },
    { name: 'Tue', temp: 24 },
    { name: 'Wed', temp: 23 },
    { name: 'Thu', temp: 25 },
    { name: 'Fri', temp: 24 },
    { name: 'Sat', temp: 22 },
    { name: 'Sun', temp: 21 },
];

const Weather = () => {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header */}
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-extrabold text-white flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#00df82] rounded-lg flex items-center justify-center">
                            <CloudSun size={20} className="text-[#050a06]" />
                        </div>
                        Weather for Arsi, Oromia
                    </h1>
                    <p className="text-xs text-gray-500 mt-1">Updated: Today, 10:15 AM</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-[#0d160f] border border-[#1a231c] text-[#00df82] text-xs font-bold rounded-xl hover:bg-[#00df82]/10 transition-all">
                    <RefreshCcw size={14} />
                    Refresh Data
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Current Weather Card */}
                <div className="lg:col-span-2 bg-gradient-to-br from-[#0d160f] to-[#050a06] border border-[#1a231c] rounded-3xl p-10 flex flex-col justify-between relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#00df82]/5 blur-[80px] -mr-32 -mt-32" />

                    <div className="flex justify-between items-start relative z-10">
                        <div>
                            <span className="text-[10px] font-black uppercase tracking-widest bg-yellow-900/40 text-yellow-400 px-3 py-1 rounded-full border border-yellow-800/40">Current</span>
                            <div className="mt-6 flex items-baseline gap-2">
                                <h2 className="text-8xl font-black text-white">23°</h2>
                                <span className="text-4xl font-bold text-gray-500">C</span>
                            </div>
                            <p className="text-2xl font-bold text-gray-300 mt-2">Sunny Intervals</p>
                        </div>
                        <Sun size={120} className="text-yellow-400 drop-shadow-[0_0_30px_rgba(250,204,21,0.3)] animate-pulse" />
                    </div>

                    <div className="grid grid-cols-3 gap-8 pt-10 border-t border-[#1a231c] mt-10 relative z-10">
                        <WeatherStat icon={Droplets} label="RAINFALL NOW" value="0 mm/hr" />
                        <WeatherStat icon={Droplets} label="HUMIDITY" value="60%" />
                        <WeatherStat icon={Wind} label="WIND" value="12 km/h" />
                    </div>
                </div>

                {/* Sidebar Stats */}
                <div className="space-y-6">
                    <SidebarCard
                        icon={CloudRain}
                        label="RAIN TODAY"
                        value="5 mm"
                        status="Expected"
                        statusColor="text-[#00df82]"
                    >
                        <div className="w-full bg-[#1a231c] h-1.5 rounded-full mt-4">
                            <div className="bg-[#3b82f6] h-full rounded-full" style={{ width: '40%' }} />
                        </div>
                    </SidebarCard>

                    <SidebarCard
                        icon={Droplets}
                        label="HUMIDITY"
                        value="60%"
                        status="Comfortable levels for harvesting."
                        statusColor="text-gray-500"
                        iconColor="text-purple-400"
                    />

                    <SidebarCard
                        icon={Thermometer}
                        label="FEELS LIKE"
                        value="24°C"
                        status="Slightly warmer than air temp."
                        statusColor="text-gray-500"
                        iconColor="text-orange-400"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* 7-Day Forecast Chart */}
                <div className="lg:col-span-2 bg-[#0d160f] border border-[#1a231c] rounded-3xl p-8">
                    <div className="flex justify-between items-center mb-8">
                        <h3 className="text-xl font-extrabold text-white">Next 7 Days Forecast</h3>
                        <div className="flex bg-[#050a06] p-1 rounded-xl">
                            {['Today', '3 Days', '7 Days'].map(tab => (
                                <button key={tab} className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${tab === '7 Days' ? 'bg-[#00df82] text-[#050a06]' : 'text-gray-500 hover:text-white'}`}>
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="h-[250px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={forecastData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1a231c" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#4b5563', fontSize: 12 }} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#050a06', border: '1px solid #1a231c', borderRadius: '12px' }}
                                />
                                <Area type="monotone" dataKey="temp" stroke="#00df82" strokeWidth={3} fillOpacity={0.1} fill="#00df82" dot={{ fill: '#00df82', r: 4 }} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Upcoming Days List */}
                <div className="bg-[#0d160f] border border-[#1a231c] rounded-3xl p-8">
                    <h3 className="text-xl font-extrabold text-white mb-6">Upcoming Days</h3>
                    <div className="space-y-3">
                        <ForecastItem day="Tomorrow" sky="Clear sky" temp="25° / 18°" humidity="0%" icon={Sun} color="text-yellow-400" />
                        <ForecastItem day="Wednesday" sky="Light Rain" temp="22° / 16°" humidity="65%" icon={CloudRain} color="text-blue-400" />
                        <ForecastItem day="Thursday" sky="Cloudy" temp="21° / 15°" humidity="20%" icon={CloudSun} color="text-gray-400" />
                        <ForecastItem day="Friday" sky="Sunny" temp="24° / 17°" humidity="5%" icon={Sun} color="text-yellow-400" />
                    </div>
                </div>
            </div>

            {/* Bottom Disclaimer */}
            <div className="flex items-start gap-3 p-6 bg-white/[0.02] border border-[#1a231c] rounded-2xl">
                <Info size={18} className="text-[#00df82] shrink-0" />
                <p className="text-xs text-gray-500 leading-relaxed italic">
                    Weather data is an estimate based on regional satellite data. Always check local conditions before applying fertilizers or pesticides.
                </p>
            </div>
        </div>
    );
};

const WeatherStat = ({ icon: Icon, label, value }) => (
    <div>
        <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#00df82]">
                <Icon size={16} />
            </div>
            <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{label}</span>
        </div>
        <p className="text-xl font-black text-white">{value}</p>
    </div>
);

const SidebarCard = ({ icon: Icon, label, value, status, statusColor, iconColor = "text-[#00df82]", children }) => (
    <div className="bg-[#0d160f] border border-[#1a231c] rounded-2xl p-6 group hover:border-[#00df82]/30 transition-all">
        <div className="flex justify-between items-start mb-4">
            <div>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{label}</span>
                <div className="flex items-baseline gap-2 mt-1">
                    <h4 className="text-3xl font-black text-white">{value}</h4>
                    {status && <span className={`text-[10px] font-bold ${statusColor}`}>{status}</span>}
                </div>
            </div>
            <Icon className={iconColor} size={24} />
        </div>
        {children}
    </div>
);

const ForecastItem = ({ day, sky, temp, humidity, icon: Icon, color }) => (
    <div className="flex items-center justify-between p-4 bg-[#050a06] border border-[#1a231c] rounded-2xl hover:border-[#00df82]/30 transition-all group cursor-pointer">
        <div className="flex items-center gap-4">
            <div className={`w-10 h-10 rounded-xl bg-[#1a231c] flex items-center justify-center ${color}`}>
                <Icon size={20} />
            </div>
            <div>
                <h5 className="text-sm font-bold text-white group-hover:text-[#00df82] transition-colors">{day}</h5>
                <p className="text-[10px] text-gray-500 font-medium">{sky}</p>
            </div>
        </div>
        <div className="text-right">
            <p className="text-sm font-black text-white">{temp}</p>
            <div className="flex items-center justify-end gap-1 text-[10px] text-blue-400 font-bold">
                <Droplets size={10} />
                <span>{humidity}</span>
            </div>
        </div>
    </div>
);

export default Weather;
